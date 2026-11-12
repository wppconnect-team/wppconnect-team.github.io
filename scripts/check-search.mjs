import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const build = new URL("../build/", import.meta.url);
const origin = "https://wppconnect.io";
const translations = [
  "docs/choosing-the-best-project-of-wppconnect-team/",
  "docs/tutorial/basics/basic-functions/",
];

for (const prefix of ["", "pt-BR/"]) {
  const xml = await readFile(new URL(prefix + "sitemap.xml", build), "utf8");
  const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g), ([, url]) => url);
  assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap entries");
  for (const guide of translations) assert.ok(urls.includes(origin + "/" + prefix + guide));
  for (const url of urls) {
    const { origin: host, pathname } = new URL(url);
    assert.equal(host, origin);
    assert.ok(pathname.startsWith("/" + prefix) && pathname.endsWith("/"), url);
    const html = await readFile(new URL(pathname.slice(1) + "index.html", build), "utf8");
    const tags = html.split("</head>", 1)[0].match(/<link\b[^>]*\brel="canonical"[^>]*>/g) ?? [];
    assert.equal(tags.length, 1, url);
    assert.ok(tags[0].includes('href="' + url + '"'), url);
  }
}
