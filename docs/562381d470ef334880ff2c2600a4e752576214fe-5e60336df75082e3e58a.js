"use strict"
;(self.webpackChunkskohub_vocabs = self.webpackChunkskohub_vocabs || []).push([
  [991],
  {
    2579: function (e, n, t) {
      t.r(n)
      var l = t(6841),
        i = t(4194),
        r = t(4641),
        a = t(8948),
        o = t(5409),
        c = t(3071),
        u = t(2814),
        s = t(6540),
        d = t(8852)
      n.default = (e) => {
        let {
          pageContext: { node: n, collections: t, customDomain: h },
        } = e
        const { config: p, conceptSchemes: f } = (0, a.W)(),
          { data: g } = (0, o.t)(),
          { 0: A, 1: y } = (0, s.useState)(""),
          m =
            (null == n ? void 0 : n.definition) ||
            (null == n ? void 0 : n.description) ||
            (null == n ? void 0 : n.dcdescription),
          k =
            (null == n ? void 0 : n.prefLabel) ||
            (null == n ? void 0 : n.title) ||
            (null == n ? void 0 : n.dctitle)
        return (
          (0, s.useEffect)(() => {
            y(g.selectedLanguage)
          }, [null == g ? void 0 : g.selectedLanguage]),
          (0, d.Y)(
            "div",
            { id: (0, c.getDomId)(n.id) },
            (0, d.Y)(
              "h1",
              { style: { color: p.colors.skoHubAction } },
              n.deprecated ? "Deprecated" : ""
            ),
            (0, d.Y)(
              "h1",
              null,
              n.notation && (0, d.Y)("span", null, n.notation.join(","), " "),
              k && (0, c.i18n)(A)(k)
            ),
            (0, d.Y)(u.A, { id: n.id }),
            (0, d.Y)(r.A, { to: (0, c.getFilePath)(n.id, "json", h) }),
            n.isReplacedBy &&
              n.isReplacedBy.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "Is replaced by"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.isReplacedBy.map((e) =>
                    (0, d.Y)(
                      "li",
                      { key: e.id },
                      (0, d.Y)(
                        i.Link,
                        { to: (0, c.getFilePath)(e.id, "html", h) },
                        e.id
                      )
                    )
                  )
                )
              ),
            m &&
              (0, d.Y)(
                "div",
                { className: "markdown" },
                (0, d.Y)("h3", null, "Definition"),
                (0, d.Y)(
                  l.Ay,
                  null,
                  (0, c.i18n)(A)(m) ||
                    `*No definition in language "${A}" provided.*`
                )
              ),
            n.note &&
              "" !== (0, c.i18n)(A)(n.note) &&
              (0, d.Y)(
                "div",
                { className: "markdown" },
                (0, d.Y)("h3", { id: "note" }, "Note"),
                (0, d.Y)(
                  "ul",
                  { "aria-labelledby": "note" },
                  (0, c.i18n)(A)(n.note).map((e, n) =>
                    (0, d.Y)("li", { key: n }, (0, d.Y)(l.Ay, null, e))
                  )
                )
              ),
            n.changeNote &&
              "" !== (0, c.i18n)(A)(n.changeNote) &&
              (0, d.Y)(
                "div",
                { className: "markdown" },
                (0, d.Y)("h3", { id: "changenote" }, "ChangeNote"),
                (0, d.Y)(
                  "ul",
                  { "aria-labelledby": "changenote" },
                  (0, c.i18n)(A)(n.changeNote).map((e, n) =>
                    (0, d.Y)("li", { key: n }, (0, d.Y)(l.Ay, null, e))
                  )
                )
              ),
            n.editorialNote &&
              "" !== (0, c.i18n)(A)(n.editorialNote) &&
              (0, d.Y)(
                "div",
                { className: "markdown" },
                (0, d.Y)("h3", { id: "editorialnote" }, "EditorialNote"),
                (0, d.Y)(
                  "ul",
                  { "aria-labelledby": "editorialnote" },
                  (0, c.i18n)(A)(n.editorialNote).map((e, n) =>
                    (0, d.Y)("li", { key: n }, (0, d.Y)(l.Ay, null, e))
                  )
                )
              ),
            n.historyNote &&
              "" !== (0, c.i18n)(A)(n.historyNote) &&
              (0, d.Y)(
                "div",
                { className: "markdown" },
                (0, d.Y)("h3", { id: "historynote" }, "HistoryNote"),
                (0, d.Y)(
                  "ul",
                  { "aria-labelledby": "historynote" },
                  (0, c.i18n)(A)(n.historyNote).map((e, n) =>
                    (0, d.Y)("li", { key: n }, (0, d.Y)(l.Ay, null, e))
                  )
                )
              ),
            n.scopeNote &&
              "" !== (0, c.i18n)(A)(n.scopeNote) &&
              (0, d.Y)(
                "div",
                { className: "markdown" },
                (0, d.Y)("h3", { id: "scopenote" }, "ScopeNote"),
                (0, d.Y)(
                  "ul",
                  { "aria-labelledby": "scopenote" },
                  (0, c.i18n)(A)(n.scopeNote).map((e, n) =>
                    (0, d.Y)("li", { key: n }, (0, d.Y)(l.Ay, null, e))
                  )
                )
              ),
            n.altLabel &&
              "" !== (0, c.i18n)(A)(n.altLabel) &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", { id: "alt-label" }, "Alt Label"),
                (0, d.Y)(
                  "ul",
                  { "aria-labelledby": "alt-label" },
                  (0, c.i18n)(A)(n.altLabel).map((e, n) =>
                    (0, d.Y)("li", { key: n }, e)
                  )
                )
              ),
            n.hiddenLabel &&
              "" !== (0, c.i18n)(A)(n.hiddenLabel) &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", { id: "hidden-label" }, "Hidden Label"),
                (0, d.Y)(
                  "ul",
                  { "aria-labelledby": "hidden-label" },
                  (0, c.i18n)(A)(n.hiddenLabel).map((e, n) =>
                    (0, d.Y)("li", { key: n }, e)
                  )
                )
              ),
            n.example &&
              (0, d.Y)(
                "div",
                { className: "markdown" },
                (0, d.Y)("h3", null, "Example"),
                (0, d.Y)(
                  l.Ay,
                  null,
                  (0, c.i18n)(A)(n.example) ||
                    `*No example in language "${A}" provided.*`
                )
              ),
            n.related &&
              n.related.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "Related"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.related.map((e) =>
                    (0, d.Y)(
                      "li",
                      { key: e.id },
                      (0, d.Y)(
                        i.Link,
                        { to: (0, c.getFilePath)(e.id, "html", h) },
                        (0, c.i18n)(A)(e.prefLabel) || e.id
                      )
                    )
                  )
                )
              ),
            n.narrowMatch &&
              n.narrowMatch.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "Narrow Match"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.narrowMatch.map((e) =>
                    (0, d.Y)(
                      "li",
                      { key: e.id },
                      (0, d.Y)(
                        "a",
                        { target: "_blank", rel: "noreferrer", href: e.id },
                        e.id
                      )
                    )
                  )
                )
              ),
            n.broadMatch &&
              n.broadMatch.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "Broad Match"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.broadMatch.map((e) =>
                    (0, d.Y)(
                      "li",
                      { key: e.id },
                      (0, d.Y)(
                        "a",
                        { target: "_blank", rel: "noreferrer", href: e.id },
                        e.id
                      )
                    )
                  )
                )
              ),
            n.exactMatch &&
              n.exactMatch.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "Exact Match"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.exactMatch.map((e) =>
                    (0, d.Y)(
                      "li",
                      { key: e.id },
                      (0, d.Y)(
                        "a",
                        { target: "_blank", rel: "noreferrer", href: e.id },
                        e.id
                      )
                    )
                  )
                )
              ),
            n.closeMatch &&
              n.closeMatch.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "Close Match"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.closeMatch.map((e) =>
                    (0, d.Y)(
                      "li",
                      { key: e.id },
                      (0, d.Y)(
                        "a",
                        { target: "_blank", rel: "noreferrer", href: e.id },
                        e.id
                      )
                    )
                  )
                )
              ),
            n.relatedMatch &&
              n.relatedMatch.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "Related Match"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.relatedMatch.map((e) =>
                    (0, d.Y)(
                      "li",
                      { key: e.id },
                      (0, d.Y)(
                        "a",
                        { target: "_blank", rel: "noreferrer", href: e.id },
                        e.id
                      )
                    )
                  )
                )
              ),
            n.seeAlso &&
              n.seeAlso.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "See Also"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.seeAlso.map((e, n) => (0, d.Y)("li", { key: n }, e))
                )
              ),
            t &&
              t.length > 0 &&
              (0, d.Y)(
                "div",
                { className: "collections" },
                (0, d.Y)("h3", null, "in Collections"),
                (0, d.Y)(
                  "ul",
                  null,
                  t.map((e) =>
                    (0, d.Y)(
                      "li",
                      { key: e.id },
                      (0, d.Y)(
                        i.Link,
                        { to: (0, c.getFilePath)(e.id, "html", h) },
                        (0, c.i18n)(A)(e.prefLabel) ||
                          `*No label in language "${A}" provided.*`
                      )
                    )
                  )
                )
              ),
            n.inSchemeAll &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", { id: "in-scheme" }, "In Scheme"),
                (0, d.Y)(
                  "ul",
                  { "aria-labelledby": "in-scheme" },
                  n.inSchemeAll.map((e) =>
                    (0, d.Y)(
                      "li",
                      { key: e.id },
                      Object.keys(f).includes(e.id)
                        ? (0, d.Y)(
                            i.Link,
                            { to: (0, c.getFilePath)(e.id, "html", h) },
                            e.id
                          )
                        : (0, d.Y)("a", { href: e.id }, e.id)
                    )
                  )
                )
              ),
            n.source &&
              n.source.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "Source"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.source.map((e, n) => (0, d.Y)("li", { key: n }, e))
                )
              ),
            n.creator &&
              n.creator.length > 0 &&
              (0, d.Y)(
                "div",
                null,
                (0, d.Y)("h3", null, "Creator"),
                (0, d.Y)(
                  "ul",
                  null,
                  n.creator.map((e, n) => (0, d.Y)("li", { key: n }, e))
                )
              )
          )
        )
      }
    },
    2814: function (e, n, t) {
      t.d(n, {
        A: function () {
          return a
        },
      })
      var l = t(6540),
        i = t(8852)
      var r = () =>
        (0, i.Y)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-copy",
            viewBox: "0 0 16 16",
          },
          (0, i.Y)("path", {
            fillRule: "evenodd",
            d: "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z",
          })
        )
      var a = (e) => {
        let { id: n } = e
        const { 0: t, 1: a } = (0, l.useState)(!1)
        return (0, i.Y)(
          "div",
          { className: "conceptURI" },
          (0, i.Y)("h2", null, n),
          (0, i.Y)(
            "div",
            { className: "tooltip" },
            (0, i.Y)(
              "span",
              { className: "tooltiptext" },
              t ? "Copied!" : "Copy URI"
            ),
            (0, i.Y)(
              "button",
              {
                onClick: () =>
                  (async function () {
                    await navigator.clipboard.writeText(n),
                      a(!0),
                      setTimeout(() => {
                        a(!1)
                      }, 2e3)
                  })(),
                type: "button",
              },
              (0, i.Y)(r, null)
            )
          )
        )
      }
    },
    4641: function (e, n, t) {
      t.d(n, {
        A: function () {
          return r
        },
      })
      var l = t(4194),
        i = (t(6540), t(8852))
      var r = (e) => {
        let { to: n } = e
        return (0, i.Y)(
          "a",
          { className: "json-png", href: (0, l.withPrefix)(n) },
          (0, i.Y)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURQAAAAAAAAAAAAAAAAAAAAYgSgA7fgAAAAAAAAAAAAxHnAAAAA5InRBJngAAAA9JnQAAAAxHnBZOoAxHnA1HnQxInAAAAAAAAA9KnQxHmwtHnAAAAAAAAAAAAAxInQAAAAAAAI+q0T5vsUBvsT9usQAAAAxHnGuQwzxrsCJXpbvM48Grj+gAAAAldFJOUwD8KKcgCwWOzTu+hOaqE2y51nqQIDRxS/spXZj1XkjhffWTuKNxkQQJAAAA8ElEQVQoz61SyXbDIAyUAxiM8b7Fjp2lrSDt/39gRTB5Xa7hwJNmkDQDALx2ZaM8xPggxyzGJ0zUM8lUgjKEaXIRO9q/VQLEZQ0ZR7bj883ZAoBhGbrGUmidtbYHifw3keojEemTmPBKIA3QprG2ArhikCJxEu/ONMcqBa0fJ3MPK2Si/fq09uyndLQJhkqCStYNPgi3A2FL4Xtsa6IASobZ4KcaYrrGe0T20LvhCOeunRdtCnenkhGnP3ILR0aW/z5guFuvNxIcT/EGyYeZ6VIDIVBFQlRdDyQ0DWlNsnnkOBmr97jM65/vUefla//BN72+Edu2WjTOAAAAAElFTkSuQmCC",
            alt: "JSON",
          })
        )
      }
    },
    6841: function (e, n, t) {
      var l = t(6540)
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n]
                  for (var l in t)
                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
                }
                return e
              }),
          i.apply(this, arguments)
        )
      }
      const r = ["children", "options"],
        a = [
          "allowFullScreen",
          "allowTransparency",
          "autoComplete",
          "autoFocus",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "charSet",
          "classId",
          "colSpan",
          "contentEditable",
          "contextMenu",
          "crossOrigin",
          "encType",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "frameBorder",
          "hrefLang",
          "inputMode",
          "keyParams",
          "keyType",
          "marginHeight",
          "marginWidth",
          "maxLength",
          "mediaGroup",
          "minLength",
          "noValidate",
          "radioGroup",
          "readOnly",
          "rowSpan",
          "spellCheck",
          "srcDoc",
          "srcLang",
          "srcSet",
          "tabIndex",
          "useMap",
        ].reduce((e, n) => ((e[n.toLowerCase()] = n), e), {
          class: "className",
          for: "htmlFor",
        }),
        o = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" },
        c = ["style", "script", "pre"],
        u = ["src", "href", "data", "formAction", "srcDoc", "action"],
        s =
          /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        d = /\n{2,}$/,
        h = /^(\s*>[\s\S]*?)(?=\n\n|$)/,
        p = /^ *> ?/gm,
        f = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/,
        g = /^ {2,}\n/,
        A = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/,
        y =
          /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,
        m = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        k = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/,
        Y = /^(?:\n *)*\n/,
        v = /\r\n?/g,
        x = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
        b = /^\[\^([^\]]+)]/,
        N = /\f/g,
        C = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
        w = /^\s*?\[(x|\s)\]/,
        L = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        M = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        O = /^([^\n]+)\n *(=|-)\2{2,} *\n/,
        S =
          /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
        E = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        R = /^<!--[\s\S]*?(?:-->)/,
        T = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        $ =
          /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        B = /^\{.*\}$/,
        H = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        I = /^<([^ >]+[:@\/][^ >]+)>/,
        z = /-([a-z])?/gi,
        U = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,
        j = /^[^\n]+(?:  \n|\n{2,})/,
        Q = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        _ = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        P = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        D = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        F = /\t/g,
        Z = /(^ *\||\| *$)/g,
        G = /^ *:-+: *$/,
        J = /^ *:-+ *$/,
        K = /^ *-+: *$/,
        q = (e) => `(?=[\\s\\S]+?\\1${e ? "\\1" : ""})`,
        V =
          "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)",
        W = RegExp(`^([*_])\\1${q(1)}${V}\\1\\1(?!\\1)`),
        X = RegExp(`^([*_])${q(0)}${V}\\1(?!\\1)`),
        ee = RegExp(`^(==)${q(0)}${V}\\1`),
        ne = RegExp(`^(~~)${q(0)}${V}\\1`),
        te = /^(:[a-zA-Z0-9-_]+:)/,
        le = /^\\([^0-9A-Za-z\s])/,
        ie = /\\([^0-9A-Za-z\s])/g,
        re = /^[\s\S](?:(?!  \n|[0-9]\.|http)[^=*_~\-\n:<`\\\[!])*/,
        ae = /^\n+/,
        oe = /^([ \t]*)/,
        ce = /(?:^|\n)( *)$/,
        ue = "(?:\\d+\\.)",
        se = "(?:[*+-])"
      function de(e) {
        return "( *)(" + (1 === e ? ue : se) + ") +"
      }
      const he = de(1),
        pe = de(2)
      function fe(e) {
        return RegExp("^" + (1 === e ? he : pe))
      }
      const ge = fe(1),
        Ae = fe(2)
      function ye(e) {
        return RegExp(
          "^" +
            (1 === e ? he : pe) +
            "[^\\n]*(?:\\n(?!\\1" +
            (1 === e ? ue : se) +
            " )[^\\n]*)*(\\n|$)",
          "gm"
        )
      }
      const me = ye(1),
        ke = ye(2)
      function Ye(e) {
        const n = 1 === e ? ue : se
        return RegExp(
          "^( *)(" +
            n +
            ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
            n +
            " (?!" +
            n +
            " ))\\n*|\\s*\\n*$)"
        )
      }
      const ve = Ye(1),
        xe = Ye(2)
      function be(e, n) {
        const t = 1 === n,
          l = t ? ve : xe,
          i = t ? me : ke,
          r = t ? ge : Ae
        return {
          t: (e) => r.test(e),
          o: Be(function (e, n) {
            const t = ce.exec(n.prevCapture)
            return t && (n.list || (!n.inline && !n.simple))
              ? l.exec((e = t[1] + e))
              : null
          }),
          i: 1,
          u(e, n, l) {
            const a = t ? +e[2] : void 0,
              o = e[0].replace(d, "\n").match(i)
            let c = !1
            return {
              items: o.map(function (e, t) {
                const i = r.exec(e)[0].length,
                  a = RegExp("^ {1," + i + "}", "gm"),
                  u = e.replace(a, "").replace(r, ""),
                  s = t === o.length - 1,
                  d = -1 !== u.indexOf("\n\n") || (s && c)
                c = d
                const h = l.inline,
                  p = l.list
                let f
                ;(l.list = !0),
                  d
                    ? ((l.inline = !1), (f = Le(u) + "\n\n"))
                    : ((l.inline = !0), (f = Le(u)))
                const g = n(f, l)
                return (l.inline = h), (l.list = p), g
              }),
              ordered: t,
              start: a,
            }
          },
          l: (n, t, l) =>
            e(
              n.ordered ? "ol" : "ul",
              { key: l.key, start: "20" === n.type ? n.start : void 0 },
              n.items.map(function (n, i) {
                return e("li", { key: i }, t(n, l))
              })
            ),
        }
      }
      const Ne = RegExp(
          "^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"
        ),
        Ce = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/
      function we(e) {
        return "string" == typeof e
      }
      function Le(e) {
        let n = e.length
        for (; n > 0 && e[n - 1] <= " "; ) n--
        return e.slice(0, n)
      }
      function Me(e, n) {
        return e.startsWith(n)
      }
      function Oe(e, n, t) {
        if (Array.isArray(t)) {
          for (let n = 0; n < t.length; n++) if (Me(e, t[n])) return !0
          return !1
        }
        return t(e, n)
      }
      function Se(e) {
        return e
          .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
          .replace(/[çÇ]/g, "c")
          .replace(/[ðÐ]/g, "d")
          .replace(/[ÈÉÊËéèêë]/g, "e")
          .replace(/[ÏïÎîÍíÌì]/g, "i")
          .replace(/[Ññ]/g, "n")
          .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
          .replace(/[ÜüÛûÚúÙù]/g, "u")
          .replace(/[ŸÿÝý]/g, "y")
          .replace(/[^a-z0-9- ]/gi, "")
          .replace(/ /gi, "-")
          .toLowerCase()
      }
      function Ee(e) {
        return K.test(e)
          ? "right"
          : G.test(e)
          ? "center"
          : J.test(e)
          ? "left"
          : null
      }
      function Re(e, n, t, l) {
        const i = t.inTable
        t.inTable = !0
        let r = [[]],
          a = ""
        function o() {
          if (!a) return
          const e = r[r.length - 1]
          e.push.apply(e, n(a, t)), (a = "")
        }
        return (
          e
            .trim()
            .split(/(`[^`]*`|\\\||\|)/)
            .filter(Boolean)
            .forEach((e, n, t) => {
              "|" === e.trim() && (o(), l)
                ? 0 !== n && n !== t.length - 1 && r.push([])
                : (a += e)
            }),
          o(),
          (t.inTable = i),
          r
        )
      }
      function Te(e, n, t) {
        t.inline = !0
        const l = e[2] ? e[2].replace(Z, "").split("|").map(Ee) : [],
          i = e[3]
            ? (function (e, n, t) {
                return e
                  .trim()
                  .split("\n")
                  .map(function (e) {
                    return Re(e, n, t, !0)
                  })
              })(e[3], n, t)
            : [],
          r = Re(e[1], n, t, !!i.length)
        return (
          (t.inline = !1),
          i.length
            ? { align: l, cells: i, header: r, type: "25" }
            : { children: r, type: "21" }
        )
      }
      function $e(e, n) {
        return null == e.align[n] ? {} : { textAlign: e.align[n] }
      }
      function Be(e) {
        return (e.inline = 1), e
      }
      function He(e) {
        return Be(function (n, t) {
          return t.inline ? e.exec(n) : null
        })
      }
      function Ie(e) {
        return Be(function (n, t) {
          return t.inline || t.simple ? e.exec(n) : null
        })
      }
      function ze(e) {
        return function (n, t) {
          return t.inline || t.simple ? null : e.exec(n)
        }
      }
      function Ue(e) {
        return Be(function (n) {
          return e.exec(n)
        })
      }
      const je = /(javascript|vbscript|data(?!:image)):/i
      function Qe(e) {
        try {
          const n = decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "")
          if (je.test(n)) return null
        } catch (e) {
          return null
        }
        return e
      }
      function _e(e) {
        return e ? e.replace(ie, "$1") : e
      }
      function Pe(e, n, t) {
        const l = t.inline || !1,
          i = t.simple || !1
        ;(t.inline = !0), (t.simple = !0)
        const r = e(n, t)
        return (t.inline = l), (t.simple = i), r
      }
      function De(e, n, t) {
        const l = t.inline || !1,
          i = t.simple || !1
        ;(t.inline = !1), (t.simple = !0)
        const r = e(n, t)
        return (t.inline = l), (t.simple = i), r
      }
      function Fe(e, n, t) {
        const l = t.inline || !1
        t.inline = !1
        const i = e(n, t)
        return (t.inline = l), i
      }
      const Ze = (e, n, t) => ({ children: Pe(n, e[2], t) })
      function Ge() {
        return {}
      }
      function Je() {
        return null
      }
      function Ke(...e) {
        return e.filter(Boolean).join(" ")
      }
      function qe(e, n, t) {
        let l = e
        const i = n.split(".")
        for (; i.length && ((l = l[i[0]]), void 0 !== l); ) i.shift()
        return l || t
      }
      function Ve(e = "", n = {}) {
        ;(n.overrides = n.overrides || {}),
          (n.namedCodesToUnicode = n.namedCodesToUnicode
            ? i({}, o, n.namedCodesToUnicode)
            : o)
        const t = n.slugify || Se,
          r = n.sanitizer || Qe,
          d = n.createElement || l.createElement,
          Z = [h, y, m, n.enforceAtxHeadings ? M : L, O, U, ve, xe],
          G = [...Z, j, S, R, $]
        function J(e, n) {
          for (let t = 0; t < e.length; t++) if (e[t].test(n)) return !0
          return !1
        }
        function K(e, t, ...l) {
          const r = qe(n.overrides, e + ".props", {})
          return d(
            (function (e, n) {
              const t = qe(n, e)
              return t
                ? "function" == typeof t ||
                  ("object" == typeof t && "render" in t)
                  ? t
                  : qe(n, e + ".component", e)
                : e
            })(e, n.overrides),
            i({}, t, r, {
              className:
                Ke(null == t ? void 0 : t.className, r.className) || void 0,
            }),
            ...l
          )
        }
        function q(e) {
          e = e.replace(C, "")
          let t = !1
          n.forceInline ? (t = !0) : n.forceBlock || (t = !1 === D.test(e))
          const l = de(
            se(t ? e : Le(e).replace(ae, "") + "\n\n", { inline: t })
          )
          for (; we(l[l.length - 1]) && !l[l.length - 1].trim(); ) l.pop()
          if (null === n.wrapper) return l
          const i = n.wrapper || (t ? "span" : "div")
          let r
          if (l.length > 1 || n.forceWrapper) r = l
          else {
            if (1 === l.length)
              return (
                (r = l[0]),
                "string" == typeof r ? K("span", { key: "outer" }, r) : r
              )
            r = null
          }
          return d(i, { key: "outer" }, r)
        }
        function V(e, n) {
          if (!n || !n.trim()) return null
          const t = n.match(s)
          return t
            ? t.reduce(function (n, t) {
                const l = t.indexOf("=")
                if (-1 !== l) {
                  const i = (function (e) {
                      return (
                        -1 !== e.indexOf("-") &&
                          null === e.match(T) &&
                          (e = e.replace(z, function (e, n) {
                            return n.toUpperCase()
                          })),
                        e
                      )
                    })(t.slice(0, l)).trim(),
                    o = (function (e) {
                      const n = e[0]
                      return ('"' === n || "'" === n) &&
                        e.length >= 2 &&
                        e[e.length - 1] === n
                        ? e.slice(1, -1)
                        : e
                    })(t.slice(l + 1).trim()),
                    c = a[i] || i
                  if ("ref" === c) return n
                  const s = (n[c] = (function (e, n, t, l) {
                    return "style" === n
                      ? (function (e) {
                          const n = []
                          let t = "",
                            l = !1,
                            i = !1,
                            r = ""
                          if (!e) return n
                          for (let o = 0; o < e.length; o++) {
                            const a = e[o]
                            if (
                              (('"' !== a && "'" !== a) ||
                                l ||
                                (i
                                  ? a === r && ((i = !1), (r = ""))
                                  : ((i = !0), (r = a))),
                              "(" === a && t.endsWith("url")
                                ? (l = !0)
                                : ")" === a && l && (l = !1),
                              ";" !== a || i || l)
                            )
                              t += a
                            else {
                              const e = t.trim()
                              if (e) {
                                const t = e.indexOf(":")
                                if (t > 0) {
                                  const l = e.slice(0, t).trim(),
                                    i = e.slice(t + 1).trim()
                                  n.push([l, i])
                                }
                              }
                              t = ""
                            }
                          }
                          const a = t.trim()
                          if (a) {
                            const e = a.indexOf(":")
                            if (e > 0) {
                              const t = a.slice(0, e).trim(),
                                l = a.slice(e + 1).trim()
                              n.push([t, l])
                            }
                          }
                          return n
                        })(t).reduce(function (n, [t, i]) {
                          return (
                            (n[
                              t.replace(/(-[a-z])/g, (e) => e[1].toUpperCase())
                            ] = l(i, e, t)),
                            n
                          )
                        }, {})
                      : -1 !== u.indexOf(n)
                      ? l(_e(t), e, n)
                      : (t.match(B) && (t = _e(t.slice(1, t.length - 1))),
                        "true" === t || ("false" !== t && t))
                  })(e, i, o, r))
                  "string" == typeof s &&
                    (S.test(s) || $.test(s)) &&
                    (n[c] = q(s.trim()))
                } else "style" !== t && (n[a[t] || t] = !0)
                return n
              }, {})
            : null
        }
        const ie = [],
          ce = {},
          ue = {
            0: {
              t: [">"],
              o: ze(h),
              i: 1,
              u(e, n, t) {
                const [, l, i] = e[0].replace(p, "").match(f)
                return { alert: l, children: n(i, t) }
              },
              l(e, n, l) {
                const i = { key: l.key }
                return (
                  e.alert &&
                    ((i.className =
                      "markdown-alert-" + t(e.alert.toLowerCase(), Se)),
                    e.children.unshift({
                      attrs: {},
                      children: [{ type: "27", text: e.alert }],
                      noInnerParse: !0,
                      type: "11",
                      tag: "header",
                    })),
                  K("blockquote", i, n(e.children, l))
                )
              },
            },
            1: {
              t: ["  "],
              o: Ue(g),
              i: 1,
              u: Ge,
              l: (e, n, t) => K("br", { key: t.key }),
            },
            2: {
              t: ["--", "__", "**", "- ", "* ", "_ "],
              o: ze(A),
              i: 1,
              u: Ge,
              l: (e, n, t) => K("hr", { key: t.key }),
            },
            3: {
              t: ["    "],
              o: ze(m),
              i: 0,
              u: (e) => ({
                lang: void 0,
                text: _e(Le(e[0].replace(/^ {4}/gm, ""))),
              }),
              l: (e, n, t) =>
                K(
                  "pre",
                  { key: t.key },
                  K(
                    "code",
                    i({}, e.attrs, {
                      className: e.lang ? "lang-" + e.lang : "",
                    }),
                    e.text
                  )
                ),
            },
            4: {
              t: ["```", "~~~"],
              o: ze(y),
              i: 0,
              u: (e) => ({
                attrs: V("code", e[3] || ""),
                lang: e[2] || void 0,
                text: e[4],
                type: "3",
              }),
            },
            5: {
              t: ["`"],
              o: Ie(k),
              i: 3,
              u: (e) => ({ text: _e(e[2]) }),
              l: (e, n, t) => K("code", { key: t.key }, e.text),
            },
            6: {
              t: ["[^"],
              o: ze(x),
              i: 0,
              u: (e) => (ie.push({ footnote: e[2], identifier: e[1] }), {}),
              l: Je,
            },
            7: {
              t: ["[^"],
              o: He(b),
              i: 1,
              u: (e) => ({ target: "#" + t(e[1], Se), text: e[1] }),
              l: (e, n, t) =>
                K(
                  "a",
                  { key: t.key, href: r(e.target, "a", "href") },
                  K("sup", { key: t.key }, e.text)
                ),
            },
            8: {
              t: ["[ ]", "[x]"],
              o: He(w),
              i: 1,
              u: (e) => ({ completed: "x" === e[1].toLowerCase() }),
              l: (e, n, t) =>
                K("input", {
                  checked: e.completed,
                  key: t.key,
                  readOnly: !0,
                  type: "checkbox",
                }),
            },
            9: {
              t: ["#"],
              o: ze(n.enforceAtxHeadings ? M : L),
              i: 1,
              u: (e, n, l) => ({
                children: Pe(n, e[2], l),
                id: t(e[2], Se),
                level: e[1].length,
              }),
              l: (e, n, t) =>
                K("h" + e.level, { id: e.id, key: t.key }, n(e.children, t)),
            },
            10: {
              t: (e) => {
                const n = e.indexOf("\n")
                return (
                  n > 0 &&
                  n < e.length - 1 &&
                  ("=" === e[n + 1] || "-" === e[n + 1])
                )
              },
              o: ze(O),
              i: 1,
              u: (e, n, t) => ({
                children: Pe(n, e[1], t),
                level: "=" === e[2] ? 1 : 2,
                type: "9",
              }),
            },
            11: {
              t: ["<"],
              o: Ue(S),
              i: 1,
              u(e, n, t) {
                const [, l] = e[3].match(oe),
                  i = RegExp("^" + l, "gm"),
                  r = e[3].replace(i, ""),
                  a = J(G, r) ? Fe : Pe,
                  o = e[1].toLowerCase(),
                  u = -1 !== c.indexOf(o),
                  s = (u ? o : e[1]).trim(),
                  d = { attrs: V(s, e[2]), noInnerParse: u, tag: s }
                if (((t.inAnchor = t.inAnchor || "a" === o), u)) d.text = e[3]
                else {
                  const e = t.inHTML
                  ;(t.inHTML = !0), (d.children = a(n, r, t)), (t.inHTML = e)
                }
                return (t.inAnchor = !1), d
              },
              l: (e, n, t) =>
                K(
                  e.tag,
                  i({ key: t.key }, e.attrs),
                  e.text || (e.children ? n(e.children, t) : "")
                ),
            },
            13: {
              t: ["<"],
              o: Ue($),
              i: 1,
              u(e) {
                const n = e[1].trim()
                return { attrs: V(n, e[2] || ""), tag: n }
              },
              l: (e, n, t) => K(e.tag, i({}, e.attrs, { key: t.key })),
            },
            12: { t: ["\x3c!--"], o: Ue(R), i: 1, u: () => ({}), l: Je },
            14: {
              t: ["!["],
              o: Ie(Ce),
              i: 1,
              u: (e) => ({ alt: _e(e[1]), target: _e(e[2]), title: _e(e[3]) }),
              l: (e, n, t) =>
                K("img", {
                  key: t.key,
                  alt: e.alt || void 0,
                  title: e.title || void 0,
                  src: r(e.target, "img", "src"),
                }),
            },
            15: {
              t: ["["],
              o: He(Ne),
              i: 3,
              u: (e, n, t) => ({
                children: De(n, e[1], t),
                target: _e(e[2]),
                title: _e(e[3]),
              }),
              l: (e, n, t) =>
                K(
                  "a",
                  {
                    key: t.key,
                    href: r(e.target, "a", "href"),
                    title: e.title,
                  },
                  n(e.children, t)
                ),
            },
            16: {
              t: ["<"],
              o: He(I),
              i: 0,
              u(e) {
                let n = e[1],
                  t = !1
                return (
                  -1 !== n.indexOf("@") &&
                    -1 === n.indexOf("//") &&
                    ((t = !0), (n = n.replace("mailto:", ""))),
                  {
                    children: [{ text: n, type: "27" }],
                    target: t ? "mailto:" + n : n,
                    type: "15",
                  }
                )
              },
            },
            17: {
              t: (e, t) =>
                !t.inAnchor &&
                !n.disableAutoLink &&
                (Me(e, "http://") || Me(e, "https://")),
              o: He(H),
              i: 0,
              u: (e) => ({
                children: [{ text: e[1], type: "27" }],
                target: e[1],
                title: void 0,
                type: "15",
              }),
            },
            20: be(K, 1),
            33: be(K, 2),
            19: { t: ["\n"], o: ze(Y), i: 3, u: Ge, l: () => "\n" },
            21: {
              o: Be(function (e, n) {
                if (
                  n.inline ||
                  n.simple ||
                  (n.inHTML &&
                    -1 === e.indexOf("\n\n") &&
                    -1 === n.prevCapture.indexOf("\n\n"))
                )
                  return null
                let t = "",
                  l = 0
                for (;;) {
                  const n = e.indexOf("\n", l),
                    i = e.slice(l, -1 === n ? void 0 : n + 1)
                  if (J(Z, i)) break
                  if (((t += i), -1 === n || !i.trim())) break
                  l = n + 1
                }
                const i = Le(t)
                return "" === i ? null : [t, , i]
              }),
              i: 3,
              u: Ze,
              l: (e, n, t) => K("p", { key: t.key }, n(e.children, t)),
            },
            22: {
              t: ["["],
              o: He(Q),
              i: 0,
              u: (e) => ((ce[e[1]] = { target: e[2], title: e[4] }), {}),
              l: Je,
            },
            23: {
              t: ["!["],
              o: Ie(_),
              i: 0,
              u: (e) => ({ alt: e[1] ? _e(e[1]) : void 0, ref: e[2] }),
              l: (e, n, t) =>
                ce[e.ref]
                  ? K("img", {
                      key: t.key,
                      alt: e.alt,
                      src: r(ce[e.ref].target, "img", "src"),
                      title: ce[e.ref].title,
                    })
                  : null,
            },
            24: {
              t: (e) => "[" === e[0] && -1 === e.indexOf("]("),
              o: He(P),
              i: 0,
              u: (e, n, t) => ({
                children: n(e[1], t),
                fallbackChildren: e[0],
                ref: e[2],
              }),
              l: (e, n, t) =>
                ce[e.ref]
                  ? K(
                      "a",
                      {
                        key: t.key,
                        href: r(ce[e.ref].target, "a", "href"),
                        title: ce[e.ref].title,
                      },
                      n(e.children, t)
                    )
                  : K("span", { key: t.key }, e.fallbackChildren),
            },
            25: {
              t: ["|"],
              o: ze(U),
              i: 1,
              u: Te,
              l(e, n, t) {
                const l = e
                return K(
                  "table",
                  { key: t.key },
                  K(
                    "thead",
                    null,
                    K(
                      "tr",
                      null,
                      l.header.map(function (e, i) {
                        return K("th", { key: i, style: $e(l, i) }, n(e, t))
                      })
                    )
                  ),
                  K(
                    "tbody",
                    null,
                    l.cells.map(function (e, i) {
                      return K(
                        "tr",
                        { key: i },
                        e.map(function (e, i) {
                          return K("td", { key: i, style: $e(l, i) }, n(e, t))
                        })
                      )
                    })
                  )
                )
              },
            },
            27: {
              o: Be(function (e, n) {
                let t
                return Me(e, ":") && (t = te.exec(e)), t || re.exec(e)
              }),
              i: 4,
              u(e) {
                const t = e[0]
                return {
                  text:
                    -1 === t.indexOf("&")
                      ? t
                      : t.replace(E, (e, t) => n.namedCodesToUnicode[t] || e),
                }
              },
              l: (e) => e.text,
            },
            28: {
              t: ["**", "__"],
              o: Ie(W),
              i: 2,
              u: (e, n, t) => ({ children: n(e[2], t) }),
              l: (e, n, t) => K("strong", { key: t.key }, n(e.children, t)),
            },
            29: {
              t: (e) => {
                const n = e[0]
                return ("*" === n || "_" === n) && e[1] !== n
              },
              o: Ie(X),
              i: 3,
              u: (e, n, t) => ({ children: n(e[2], t) }),
              l: (e, n, t) => K("em", { key: t.key }, n(e.children, t)),
            },
            30: {
              t: ["\\"],
              o: Ie(le),
              i: 1,
              u: (e) => ({ text: e[1], type: "27" }),
            },
            31: {
              t: ["=="],
              o: Ie(ee),
              i: 3,
              u: Ze,
              l: (e, n, t) => K("mark", { key: t.key }, n(e.children, t)),
            },
            32: {
              t: ["~~"],
              o: Ie(ne),
              i: 3,
              u: Ze,
              l: (e, n, t) => K("del", { key: t.key }, n(e.children, t)),
            },
          }
        !0 === n.disableParsingRawHTML && (delete ue[11], delete ue[13])
        const se = (function (e) {
            var n = Object.keys(e)
            function t(l, i) {
              var r = []
              if (((i.prevCapture = i.prevCapture || ""), l.trim()))
                for (; l; )
                  for (var a = 0; a < n.length; ) {
                    var o = n[a],
                      c = e[o]
                    if (!c.t || Oe(l, i, c.t)) {
                      var u = c.o(l, i)
                      if (u && u[0]) {
                        l = l.substring(u[0].length)
                        var s = c.u(u, t, i)
                        ;(i.prevCapture += u[0]),
                          s.type || (s.type = o),
                          r.push(s)
                        break
                      }
                      a++
                    } else a++
                  }
              return (i.prevCapture = ""), r
            }
            return (
              n.sort(function (n, t) {
                return e[n].i - e[t].i || (n < t ? -1 : 1)
              }),
              function (e, n) {
                return t(
                  (function (e) {
                    return e.replace(v, "\n").replace(N, "").replace(F, "    ")
                  })(e),
                  n
                )
              }
            )
          })(ue),
          de = (function (e, n) {
            return function t(l, i = {}) {
              if (Array.isArray(l)) {
                const e = i.key,
                  n = []
                let r = !1
                for (let a = 0; a < l.length; a++) {
                  i.key = a
                  const e = t(l[a], i),
                    o = we(e)
                  o && r ? (n[n.length - 1] += e) : null !== e && n.push(e),
                    (r = o)
                }
                return (i.key = e), n
              }
              return (function (t, l, i) {
                const r = e[t.type].l
                return n ? n(() => r(t, l, i), t, l, i) : r(t, l, i)
              })(l, t, i)
            }
          })(ue, n.renderRule),
          he = q(e)
        return ie.length
          ? K(
              "div",
              null,
              he,
              K(
                "footer",
                { key: "footer" },
                ie.map(function (e) {
                  return K(
                    "div",
                    { id: t(e.identifier, Se), key: e.identifier },
                    e.identifier,
                    de(se(e.footnote, { inline: !0 }))
                  )
                })
              )
            )
          : he
      }
      n.Ay = (e) => {
        let { children: n, options: t } = e,
          i = (function (e, n) {
            if (null == e) return {}
            var t,
              l,
              i = {},
              r = Object.keys(e)
            for (l = 0; l < r.length; l++)
              n.indexOf((t = r[l])) >= 0 || (i[t] = e[t])
            return i
          })(e, r)
        return l.cloneElement(Ve(null == n ? "" : n, t), i)
      }
    },
  },
])
//# sourceMappingURL=562381d470ef334880ff2c2600a4e752576214fe-5e60336df75082e3e58a.js.map
