"use strict"
;(self.webpackChunkskohub_vocabs = self.webpackChunkskohub_vocabs || []).push([
  [293],
  {
    9639: function (e, a, t) {
      t.r(a)
      var n = t(4506),
        l = t(6540),
        c = t(4194),
        s = t(3071),
        u = t(5409),
        g = t(8386),
        i = t(8948),
        o = t(6696),
        d = t(2125),
        r = t(8852)
      a.default = (e) => {
        let { location: a } = e
        const { 0: t, 1: p } = (0, l.useState)([]),
          { 0: h, 1: f } = (0, l.useState)(""),
          { 0: L, 1: m } = (0, l.useState)(""),
          { data: v, updateState: b } = (0, u.t)(),
          { config: S } = (0, i.W)(),
          k = S.customDomain
        ;(0, l.useEffect)(() => {
          !(async function () {
            const e = await fetch("index.json"),
              a = await e.json()
            p(a)
            const t = Array.from(
              new Set((0, n.A)(a.flatMap((e) => e.languages)))
            )
            b({ ...v, languages: t, indexPage: !0 })
          })()
        }, []),
          (0, l.useEffect)(() => {
            const e = (0, s.getLanguageFromUrl)(a)
            if (e && !v.selectedLanguage) {
              const a = (0, g.g)({
                availableLanguages: v.languages,
                selectedLanguage: e,
              })
              f(a),
                b({
                  ...v,
                  selectedLanguage: a,
                  indexPage: !0,
                  currentScheme: {},
                })
            } else {
              const e = (0, g.g)({
                availableLanguages: v.languages,
                selectedLanguage:
                  (null == v ? void 0 : v.selectedLanguage) || null,
              })
              f(e),
                b({
                  ...v,
                  selectedLanguage: e,
                  indexPage: !0,
                  currentScheme: {},
                })
            }
          }, [
            null == v ? void 0 : v.languages,
            null == v ? void 0 : v.selectedLanguage,
          ])
        const x = (e) => {
          const a =
            (0, s.i18n)(h)(
              (null == e ? void 0 : e.title) ||
                (null == e ? void 0 : e.prefLabel) ||
                (null == e ? void 0 : e.dc_title)
            ) || e.id
          return a || e.id
        }
        return (0, r.Y)(
          o.A,
          { language: h },
          (0, r.Y)(d.A, {
            title: "Concept Schemes",
            keywords: ["conceptSchemes"],
          }),
          (0, r.Y)(
            "div",
            { className: "centerPage block" },
            t.length > 4 &&
              (0, r.Y)(
                "div",
                { style: { marginBottom: "20px" } },
                (0, r.Y)("input", {
                  type: "text",
                  placeholder: "Search concept schemes...",
                  value: L,
                  onChange: (e) => m(e.target.value),
                  style: {
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  },
                })
              ),
            (0, r.Y)(
              "ul",
              null,
              t
                .filter((e) => x(e).toLowerCase().includes(L.toLowerCase()))
                .sort((e, a) => {
                  const t =
                      (0, s.i18n)(h)(e.prefLabel || e.title || e.dc_title) ||
                      e.id,
                    n =
                      (0, s.i18n)(h)(a.prefLabel || a.title || a.dc_title) ||
                      a.id
                  return t.localeCompare(n)
                })
                .map((e) =>
                  (0, r.Y)(
                    "li",
                    { key: e.id },
                    (0, r.Y)(
                      c.Link,
                      {
                        onClick: () =>
                          b({
                            ...v,
                            conceptSchemeLanguages: (0, n.A)(e.languages),
                            currentScheme: e,
                            selectedLanguage: e.languages.includes(h)
                              ? h
                              : e.languages[0],
                          }),
                        to: (0, s.getFilePath)(e.id, "html", k),
                      },
                      x(e)
                    )
                  )
                )
            )
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-721d7c7df0df9dbc5de5.js.map
