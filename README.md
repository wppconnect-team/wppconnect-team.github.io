**English** | [Português (Brasil)](./README.pt-BR.md)

<p align="center">
  <a href="https://wppconnect.io/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://wppconnect-team.github.io/brand/wppconnect-dark.png" />
      <img src="https://wppconnect-team.github.io/brand/wppconnect-light.png" alt="WPPConnect" width="220" height="121" />
    </picture>
  </a>
</p>

# WPPConnect documentation website

Maintain the WPPConnect website, guides and project documentation.

A project in the WPPConnect ecosystem, maintained by WPPConnect Team.

[Getting started](#getting-started) | [Documentation](#documentation) | [Contributing](#contributing) | [Support WPPConnect](#support-the-project)

[![CI](https://github.com/wppconnect-team/wppconnect-team.github.io/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/wppconnect-team/wppconnect-team.github.io/actions/workflows/test.yml) [![Documentation](https://img.shields.io/badge/docs-WPPConnect-blue)](https://wppconnect.io/) [![Open Collective](https://img.shields.io/badge/Open%20Collective-WPPConnect-blue)](https://opencollective.com/wppconnect)

## Overview

For readers looking for project guides and contributors editing the public website. The site uses Docusaurus 3 and is published at [wppconnect.io](https://wppconnect.io/).

## Features

- Tutorials, ecosystem project guides, blog and WhatsApp version browsing.
- Localized content, typed React pages and shared brand assets.

## Getting started

Read the published [tutorial](https://wppconnect.io/docs/tutorial/intro). To edit locally, use **Node.js >=26.13.0** and npm with the committed `package-lock.json`:

```sh
git clone https://github.com/wppconnect-team/wppconnect-team.github.io.git
cd wppconnect-team.github.io
npm ci
npm run start
```

Open the local URL printed by Docusaurus. Changes to content are reloaded during development. `npm run build` generates static output in `build`.

## Configuration

Edit [docusaurus.config.js](docusaurus.config.js), content under [docs](docs/) and translations under [i18n](i18n/). Keep both README languages synchronized with changes to runtimes, commands and funding. Renovate and the existing `update-lock` workflow maintain dependencies; its validation includes type checks, HTTP/WebSocket dependency checks, dev smoke tests and localized production builds. Deployment remains governed by the existing GitHub Pages workflow and repository permissions.

## Documentation

- [Published documentation](https://wppconnect.io/)
- [Shared brand assets and rules](./static/brand/README.md)
- [README standard](https://github.com/wppconnect-team/.github)
- [Retained technical details and acknowledgments](documentation/readme-reference.md)

## WPPConnect ecosystem

| Project | Purpose | When to use it |
| --- | --- | --- |
| [WPPConnect](https://github.com/wppconnect-team/wppconnect) | Control WhatsApp Web from Node.js applications. | Embed automation in a Node.js application. |
| [WPPConnect/WA-JS](https://github.com/wppconnect-team/wa-js) | Expose WhatsApp Web functions through the browser-side `WPP` API. | Run browser-side code in WhatsApp Web. |
| [WPPConnect Server](https://github.com/wppconnect-team/wppconnect-server) | Run a REST API for WhatsApp sessions, messages and webhooks. | Expose session and messaging operations over HTTP. |
| [WPP4Delphi](https://github.com/wppconnect-team/WPP4Delphi) | Integrate WhatsApp Web into Delphi and Lazarus applications. | Integrate with Delphi or Lazarus desktop code. |

## Support the project

WPPConnect is maintained by an open-source community. Your support helps fund maintenance, infrastructure, documentation, and the people working on the ecosystem.

If WPPConnect helps your project or business, consider making a one-time contribution or becoming a recurring supporter.

**[Support WPPConnect on Open Collective](https://opencollective.com/wppconnect)**

Contributions are voluntary. See the official page for current financial information. You can also help with code, tests, documentation, translations and well-described issue reports.

Additional official beneficiaries in [.github/FUNDING.yml](.github/FUNDING.yml): [joaosouz4dev](https://github.com/sponsors/joaosouz4dev), [manfe](https://github.com/sponsors/manfe).

## Contributing

Contributions of code, tests, examples, documentation and translations are welcome. For larger changes, discuss the approach in an issue first. Include the project/runtime versions, a minimal reproduction and sanitized logs when reporting a problem. Update both `README.md` and `README.pt-BR.md` in the same change when installation, configuration, features, examples, licensing or funding changes.

After installing the development dependencies, use the repository checks relevant to your change:

```sh
npm run typecheck
npm run test:dependencies
npm run test:dev
npm run build
```

Account-dependent examples and tests require separate validation with an authorized test account. Never attach credentials or session files to an issue.

## Community and support

Use [repository issues](https://github.com/wppconnect-team/wppconnect-team.github.io/issues) for reproducible bugs and feature proposals. For usage questions, join the community through the official channels:

- [Discord](https://discord.gg/JU5JGGKGNG)
- [Telegram](https://t.me/wppconnect)
- [YouTube](https://www.youtube.com/c/wppconnect)

This project is independent and is not affiliated with or endorsed by WhatsApp or Meta. Follow applicable terms and obtain authorization for account and messaging operations.

## License

No repository-wide license file or license declaration was found in the reviewed source. Maintainers must confirm the terms before redistribution. This documentation does not select or grant a license. Existing third-party legal files remain applicable to their components.
