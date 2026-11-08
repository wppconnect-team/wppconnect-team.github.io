import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
const dir = new URL("../design-system/", import.meta.url);
const tokens = JSON.parse(await readFile(new URL("tokens.json", dir), "utf8"));
export const digest = createHash("sha256")
  .update(JSON.stringify(tokens))
  .digest("hex");
const resolve = (value) =>
  value.replace(/\{primitive\.([\w-]+)\}/g, (_, name) => {
    if (!tokens.primitive[name]) throw new Error("Unknown primitive " + name);
    return "var(--wpp-" + name + ")";
  });
const declarations = (object) =>
  Object.entries(object)
    .map(([name, value]) => "  --" + name + ": " + resolve(value) + ";")
    .join("\n");
const css =
  "/* Generated from the shared WPPConnect tokens. Do not edit. */\n:root {\n" +
  Object.entries(tokens.primitive)
    .map(([name, value]) => "  --wpp-" + name + ": " + value.$value + ";")
    .join("\n") +
  "\n}\n:root {\n" +
  declarations(tokens.semantic.light) +
  "\n" +
  declarations(tokens.component) +
  '\n}\n.dark, :root[data-theme="dark"] {\n' +
  declarations(tokens.semantic.dark) +
  "\n}\n";
const manifest =
  JSON.stringify(
    {
      version: tokens.version,
      sha256: digest,
      source: tokens.source.repository + "/blob/main/design-system/tokens.json",
    },
    null,
    2,
  ) + "\n";
for (const [path, expected] of [
  ["tokens.css", css],
  ["manifest.json", manifest],
]) {
  if (process.argv.includes("--check")) {
    if (
      (await readFile(new URL(path, dir), "utf8")).replace(/\r\n/g, "\n") !==
      expected
    )
      throw new Error(path + " is stale. Regenerate design tokens.");
  } else await writeFile(new URL(path, dir), expected);
}
console.log("WPPConnect design system v" + tokens.version + ": " + digest);
