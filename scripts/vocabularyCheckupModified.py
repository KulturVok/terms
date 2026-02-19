import lxml.etree
import glob
import json
from rdflib import Graph, URIRef, Literal, Namespace
from rdflib.namespace import SKOS, RDF, DCTERMS, XSD, VANN
from Levenshtein import distance

# Legacy namespaces present in source XML — needed only to strip them from the graph
DC  = Namespace("http://purl.org/dc/elements/1.1/")
DCQ = Namespace("http://purl.org/dc/qualifier/1.0/")
CC  = Namespace("http://web.resource.org/cc/")

# ---------------------------------------------------------------------------
# Namespaces
# ---------------------------------------------------------------------------
EX = Namespace("http://www.example.org/")
CC_LICENSE = URIRef("http://creativecommons.org/licenses/by-nc-sa/2.0/de/")

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------
allRdfFiles = [x for x in glob.glob("rdf-xml/*.rdf") if "modified" not in x]
LANG = "de"

descriptionDict = {
    "gefaess": {
        "description": "Gefäße und Formen. Eine Typologie für Museen und Sammlungen",
        "title": "Gefäßtypologie",
        "author": "Landesstelle für die nichtstaatlichen Museen in Bayern",
    },
    "ackerbau": {
        "description": "Thesaurus zu Ackerbaugerät, Feldbestellung - Landwirtschaftliche Transport- und Nutzfahrzeuge - Werkzeuge (Holzbearbeitung)",
        "title": "Ackerbaugeräte-Systematik",
        "author": "Spengler, W. Eckehart",
    },
    "grobsystematik": {
        "description": "EDV-gestützte Bestandserschließung in kleinen und mittleren Museen",
        "title": "Grobsystematik",
        "author": "Institut für Museumskunde",
    },
    "moebel": {
        "description": "Möbel. Eine Typologie für Museen und Sammlungen",
        "title": "Möbeltypologie",
        "author": ["Westfälisches Museumsamt", "Landesstelle für die nichtstaatlichen Museen in Bayern"],
    },
    "spitzen": {
        "description": "Systematik für Spitzen und Stickereien",
        "title": "Spitzensystematik",
        "author": "Sächsische Landesstelle für Museumswesen",
    },
    "technik_spitzen": {
        "description": "Systematik für die Technik zur Herstellung von Spitzen und Stickereien",
        "title": "Spitzentechnik-Systematik",
        "author": "Sächsische Landesstelle für Museumswesen",
    },
}

generalURI = "https://www.w3id.org/KulturVok/terms/"

# Load UUID pools for each scheme
with open("schemeUUIDDict.json", "r", encoding="utf-8") as f:
    schemeUUIDDict = json.load(f)

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
RDF_ABOUT    = "{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about"
RDF_RESOURCE = "{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource"
SKOS_CONCEPT    = "{http://www.w3.org/2004/02/skos/core#}Concept"
SKOS_NARROWER   = "{http://www.w3.org/2004/02/skos/core#}narrower"
SKOS_BROADER    = "{http://www.w3.org/2004/02/skos/core#}broader"
SKOS_RELATED    = "{http://www.w3.org/2004/02/skos/core#}related"
SKOS_INSCHEME   = "{http://www.w3.org/2004/02/skos/core#}inScheme"
SKOS_EXAMPLE    = "{http://www.w3.org/2004/02/skos/core#}example"
SKOS_DEFINITION = "{http://www.w3.org/2004/02/skos/core#}definition"

# All SKOS properties that carry concept references
SKOS_REF_PROPS = {SKOS_NARROWER, SKOS_BROADER, SKOS_RELATED}

# All text-content SKOS properties that need xml:lang
SKOS_LANG_TAGS = [
    "{http://www.w3.org/2004/02/skos/core#}prefLabel",
    "{http://www.w3.org/2004/02/skos/core#}altLabel",
    "{http://www.w3.org/2004/02/skos/core#}hiddenLabel",
    "{http://www.w3.org/2004/02/skos/core#}scopeNote",
    "{http://www.w3.org/2004/02/skos/core#}note",
    SKOS_DEFINITION,
    SKOS_EXAMPLE,
]

XML_LANG = "{http://www.w3.org/XML/1998/namespace}lang"


def set_lang(element, lang=LANG):
    """Add xml:lang attribute to an lxml element so rdflib picks it up natively."""
    element.set(XML_LANG, lang)


def merge_and_tag(parent, elements, lang=LANG):
    """
    Merge multiple sibling elements of the same predicate into one,
    joining their text with ', ', then set xml:lang on the result.
    Single elements just get xml:lang set directly.
    """
    if not elements:
        return
    if len(elements) == 1:
        set_lang(elements[0], lang)
    else:
        combined = ", ".join(e.text or "" for e in elements)
        while len(elements) > 1:
            parent.remove(elements[-1])
            elements.pop()
        elements[0].text = combined
        set_lang(elements[0], lang)


# ---------------------------------------------------------------------------
# Main loop
# ---------------------------------------------------------------------------
for rdfFile in allRdfFiles:
    with open(rdfFile, "r", encoding="utf-8") as f:
        text = f.read()
    text = text.replace(
        'xml:base="http://www.museumsvokabular.de/museumvok/"',
        f'xml:base="{generalURI}"',
    )

    root = lxml.etree.fromstring(text.encode("utf-8"))

    # Determine scheme name from the first concept's inScheme value
    firstConcept = root.find(SKOS_CONCEPT)
    scheme = firstConcept.find(SKOS_INSCHEME).text
    schemeURI = URIRef(generalURI + scheme)
    print(f"Processing: {schemeURI}")

    uuidPool = iter(schemeUUIDDict[scheme])

    # ------------------------------------------------------------------
    # Pass 1: Build localID → new UUID URI mapping.
    #
    # Source rdf:about values are always "scheme/localID" relative fragments.
    # rdf:resource references are also always "someScheme/localID" (often with
    # the wrong scheme prefix). Keying by localID alone is sufficient.
    # ------------------------------------------------------------------
    localToNew: dict[str, str] = {}  # localID → new full UUID URI

    for element in root.iter():
        if element.tag != SKOS_CONCEPT:
            continue
        localID = element.get(RDF_ABOUT).split("/", 1)[-1].replace(" ", "_")
        newUUID = next(uuidPool)
        newURI = generalURI + scheme + "/" + newUUID
        localToNew[localID] = newURI
        element.set(RDF_ABOUT, newURI)
        notationEl = lxml.etree.SubElement(
            element, "{http://www.w3.org/2004/02/skos/core#}notation"
        )
        notationEl.text = newUUID

    cleanLocalIDs = list(localToNew.keys())

    # ------------------------------------------------------------------
    # Pass 2: Fix concept references, merge multi-value text properties,
    #         and ensure xml:lang on all literal-valued SKOS properties.
    # ------------------------------------------------------------------
    for element in root.iter():
        if element.tag != SKOS_CONCEPT:
            continue

        for subElement in list(element):
            # ---- Remap concept references (narrower/broader/related) --
            if subElement.tag in SKOS_REF_PROPS:
                ref = subElement.get(RDF_RESOURCE, "").replace(" ", "_")
                localID = ref.split("/", 1)[-1]

                if "\ufffd" in localID or "ï¿½" in localID:
                    distances = [distance(localID, k) for k in cleanLocalIDs]
                    minDist = min(distances)
                    matches = [i for i, d in enumerate(distances) if d == minDist]
                    if len(matches) > 1:
                        print(f"Multiple fuzzy matches for: {ref}")
                        for i in matches:
                            print(f"  {localToNew[cleanLocalIDs[i]]}")
                    elif len(matches) == 1:
                        resolved = localToNew[cleanLocalIDs[matches[0]]]
                        print(f"Fuzzy match: {ref}  →  {resolved}")
                        subElement.set(RDF_RESOURCE, resolved)
                    else:
                        print(f"No match for: {ref}")
                elif localID in localToNew:
                    subElement.set(RDF_RESOURCE, localToNew[localID])
                else:
                    print(f"Warning: no mapping found for reference: {ref}")

            # ---- Remove inScheme (re-added cleanly via rdflib) --------
            elif subElement.tag == SKOS_INSCHEME:
                element.remove(subElement)

        # ---- Merge multi-value properties and tag all with xml:lang ---
        for tag in SKOS_LANG_TAGS:
            merge_and_tag(element, element.findall(tag))

    # ------------------------------------------------------------------
    # Build RDF graph
    # ------------------------------------------------------------------
    g = Graph()
    g.bind("skos", SKOS)
    g.bind("dct", DCTERMS)
    g.bind("vann", VANN)
    g.bind("ex", EX)

    modifiedText = lxml.etree.tostring(root, encoding="utf-8").decode("utf-8")
    g.parse(data=modifiedText, format="xml")

    # ---- Rewrite typed literals on text properties as lang-tagged ----
    # Some source values carry rdf:XMLLiteral (or other datatypes) instead of
    # xml:lang. Since datatype and language tag are mutually exclusive in RDF,
    # we strip the datatype and re-add the value as a plain language literal.
    TEXT_PROPS = {SKOS.example, SKOS.definition, SKOS.scopeNote, SKOS.note}
    for prop in TEXT_PROPS:
        for s, _, o in list(g.triples((None, prop, None))):
            if isinstance(o, Literal) and o.language is None:
                g.remove((s, prop, o))
                g.add((s, prop, Literal(str(o), lang=LANG)))

    # ---- Strip cc:Work / cc:License nodes entirely --------------------
    for s, p, o in list(g.triples((None, RDF.type, CC.Work))):
        for triple in list(g.triples((s, None, None))):
            g.remove(triple)
    for s, p, o in list(g.triples((None, RDF.type, CC.License))):
        for triple in list(g.triples((s, None, None))):
            g.remove(triple)

    # ---- Migrate dc: and dcq: properties to dct: ---------------------
    DC_TO_DCT = {
        DC.identifier:  DCTERMS.identifier,
        DC.creator:     DCTERMS.creator,
        DC.title:       DCTERMS.title,
        DC.description: DCTERMS.description,
        DC.type:        DCTERMS.type,
        DCQ.created:    DCTERMS.created,
    }
    for old_p, new_p in DC_TO_DCT.items():
        for s, _, o in list(g.triples((None, old_p, None))):
            g.remove((s, old_p, o))
            g.add((s, new_p, o))

    # ---- ConceptScheme metadata ---------------------------------------
    g.add((schemeURI, RDF.type, SKOS.ConceptScheme))
    g.add((schemeURI, DCTERMS.title,       Literal(descriptionDict[scheme]["title"],       lang=LANG)))
    g.add((schemeURI, DCTERMS.description, Literal(descriptionDict[scheme]["description"], lang=LANG)))
    g.add((schemeURI, DCTERMS.license,     CC_LICENSE))
    g.add((schemeURI, VANN.preferredNamespaceUri, Literal(schemeURI)))

    author = descriptionDict[scheme]["author"]
    if isinstance(author, list):
        for a in author:
            g.add((schemeURI, DCTERMS.creator, Literal(a)))
    else:
        g.add((schemeURI, DCTERMS.creator, Literal(author)))

    # ---- inScheme, topConcepts, license per concept ------------------
    topConcepts = []
    for s, _, __ in g.triples((None, RDF.type, SKOS.Concept)):
        g.add((s, SKOS.inScheme, schemeURI))
        g.add((s, DCTERMS.license, CC_LICENSE))
        if not (s, SKOS.broader, None) in g:
            topConcepts.append(s)

    for topConcept in topConcepts:
        g.add((schemeURI, SKOS.hasTopConcept, topConcept))

    # ---- Concept count -----------------------------------------------
    conceptCount = str(sum(1 for _ in g.triples((None, RDF.type, SKOS.Concept))))
    g.add((schemeURI, EX.conceptCount, Literal(conceptCount)))

    # ---- Serialize ----------------------------------------------------
    outPath = f"ttl/{scheme}_modified.ttl"
    g.serialize(outPath, format="turtle", encoding="utf-8")
    print(f"  → {outPath}  ({conceptCount} concepts)")