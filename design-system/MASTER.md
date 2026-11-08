# WPPConnect shared design system

This contract is shared by https://wppconnect.io and https://cloud.wppconnect.io.
The canonical source is this repository's `design-system/tokens.json`.
Cloud vendors the exact same JSON and generated CSS. Runtime pages never load
mutable remote styles. `manifest.json` records the version and normalized SHA256.

## Change workflow

1. Edit tokens here. Run `npm run design:tokens` and `npm run design:check`.
2. Review both themes and translations; merge the website change.
3. In Cloud run `pnpm design:sync`, then `pnpm design:check` and
   `pnpm design:upstream`. Review, merge and publish that matching revision.
4. Cloud CI checks the complete canonical token contract, including component
   dimensions and semantics. Its scheduled drift check reports missed updates.

Never hand edit generated CSS. Framework adapters belong in application CSS,
and must not override the contract's raw colors, semantic colors or dimensions.

## Identity and components

- Original full WPPConnect logos retain proportions, colors and clear space.
  Use the supplied light/dark variants; never recolor with CSS filters.
- Geist for body/headings, Geist Mono for code. Fonts are served locally.
- Light is the default. Dark remains an explicit persistent preference.
- Opaque neutral canvases, subtle 1 px borders, 8 px radii and a 4 px spacing base.
- Primary buttons are neutral. Brand green accents use accessible semantic
  foregrounds. Small text contrast is at least 4.5:1 in either theme.
- Marketing content max width 1200 px; documentation keeps its reading width.
- Controls use shared 40 px height and at least 44 px touch targets.
- No glows, background noise, parallax, forced smooth scrolling or hover tilt.
  Focus rings remain visible; reduced motion is respected.
- Show loading, empty, error and success states. Never invent usage data.

## Languages

English is the default/source/fallback. English and Brazilian Portuguese are
supported. The website uses Docusaurus locale routing (`/` and `/pt-BR/`) and
localized internal links. Existing Docusaurus catalogs cover theme navigation,
docs and blog. New public pages use `src/i18n/messages/*.json` with the tested
resolver in `src/i18n/core.mjs`. Missing, empty and unsupported translations fall
back to English. Adding a locale requires its catalog, Docusaurus configuration,
navigation translations and a successful localized build.

Use locale-aware dates and numbers. Technical identifiers, API payloads, URLs,
credentials and user content stay unchanged. Cloud uses its own product message
catalogs with the same English-fallback policy; the USD plan is not converted.

Component references: `/design-system` on both sites. Website documentation and
Cloud account/billing behavior remain separate from design-system changes.
