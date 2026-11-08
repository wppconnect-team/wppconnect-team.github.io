import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { resolveMessage, normalizeLocale } from "../src/i18n/core.mjs";
const json = async (path) =>
  JSON.parse(await readFile(new URL("../" + path, import.meta.url), "utf8"));
const tokens = await json("design-system/tokens.json");
const en = await json("src/i18n/messages/en.json");
const pt = await json("src/i18n/messages/pt-BR.json");
test("English is the fallback for missing, blank and unsupported translations", () => {
  for (const locale of ["pt-BR", "es", "fr", "", undefined]) {
    assert.equal(
      resolveMessage(locale, "example", {
        en: { example: "English" },
        "pt-BR": { example: " " },
      }),
      "English",
    );
    assert.equal(
      resolveMessage(locale, "example", { en: { example: "English" } }),
      "English",
    );
  }
  assert.equal(
    resolveMessage("pt-PT", "example", {
      en: { example: "English" },
      "pt-BR": { example: "Português" },
    }),
    "Português",
  );
  assert.equal(normalizeLocale("de"), "en");
  assert.throws(
    () => resolveMessage("pt-BR", "missing", { en: {} }),
    /Missing English/,
  );
});
test("All public messages have a complete English source and Portuguese translation", () => {
  assert.deepEqual(Object.keys(pt).sort(), Object.keys(en).sort());
  for (const [key, value] of Object.entries(en)) {
    assert.ok(value.trim() && pt[key].trim(), key);
    assert.ok(!value.includes("\u2014") && !pt[key].includes("\u2014"), key);
    assert.equal(resolveMessage("es", key, { en, "pt-BR": pt }), value);
  }
});
function color(value) {
  return value
    .match(/\w\w/g)
    .map((v) => {
      const n = parseInt(v, 16) / 255;
      return n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
    })
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
}
test("Shared text, brand, error, code and button pairings meet 4.5:1 in both themes", () => {
  for (const theme of ["light", "dark"]) {
    const resolve = (name) =>
      tokens.primitive[
        tokens.semantic[theme][name].match(/primitive\.([\w-]+)/)[1]
      ].$value;
    for (const [fg, bg] of [
      ["foreground", "background"],
      ["muted-foreground", "background"],
      ["muted-foreground", "card"],
      ["brand", "background"],
      ["brand", "card"],
      ["primary-foreground", "primary"],
      ["brand-on", "brand-solid"],
      ["destructive", "background"],
      ["code-muted", "code"],
      ["code-foreground", "code"],
    ]) {
      const a = color(resolve(fg).slice(1)),
        b = color(resolve(bg).slice(1));
      assert.ok(
        (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05) >= 4.5,
        theme + " " + fg + "/" + bg,
      );
    }
  }
});
test("Framework adapters do not redefine the shared raw or semantic tokens", async () => {
  const styles =
    (await readFile(
      new URL("../src/css/custom.scss", import.meta.url),
      "utf8",
    )) +
    (await readFile(
      new URL("../src/css/content.scss", import.meta.url),
      "utf8",
    ));
  for (const name of Object.keys(tokens.semantic.light))
    assert.ok(!styles.includes("--" + name + ":"), "Override: " + name);
  assert.doesNotMatch(styles, /@import\s+url\(/);
  assert.ok(!styles.includes("filter: brightness(0)"));
  const config = await readFile(
    new URL("../docusaurus.config.js", import.meta.url),
    "utf8",
  );
  assert.ok(config.includes('defaultLocale: "en"'));
  assert.ok(config.includes('defaultMode: "light"'));
  const settings = createRequire(import.meta.url)("../docusaurus.config.js");
  assert.equal(new URL(settings.url).hostname, "wppconnect.io");
});
