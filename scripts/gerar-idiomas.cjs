// Gera /en/index.html e /es/index.html a partir do index.html (português).
// Roda sozinho no envio para a HostGator (.github/workflows/deploy.yml). Precisa do pacote jsdom.
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "index.html"), "utf8");

for (const lang of ["en", "es"]) {
  const dom = new JSDOM(src, {
    url: `https://www.buziosflat.com/${lang}/`,
    runScripts: "dangerously",
    beforeParse(w) { w.PRERENDER = lang; }
  });
  const d = dom.window.document;
  if (d.documentElement.lang !== lang || !d.querySelector('link[rel="canonical"]').href.endsWith(`/${lang}/`)) {
    throw new Error(`Falha ao gerar a versão ${lang}`);
  }
  d.documentElement.setAttribute("data-page", lang);
  fs.mkdirSync(path.join(root, lang), { recursive: true });
  fs.writeFileSync(path.join(root, lang, "index.html"), "<!doctype html>\n" + d.documentElement.outerHTML + "\n");
  dom.window.close();
  console.log(`ok: ${lang}/index.html (${d.title})`);
}
