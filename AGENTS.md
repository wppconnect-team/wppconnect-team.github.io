# WPPConnect website interface rules

- Read `design-system/MASTER.md` before changing interfaces.
- `design-system/tokens.json` is the shared source for this site and Cloud.
  Update the Cloud vendored copy with its `design:sync` command when changing it.
- Use semantic tokens, original full logos and quiet light surfaces by default.
- All new UI supports English and Portuguese. English is the source and fallback
  for missing translations and unsupported locales. Keep internal links localized.
- Never translate protocol values, identifiers, URLs or user content.
- Preserve documentation, generated API reference and version registry behavior.
- Do not use Unicode U+2014 in new code, documentation or visible copy.
- Run `npm run design:check`, typecheck and the bilingual production build.
- Check both themes, keyboard navigation and 320/375/768/1440 px layouts.
