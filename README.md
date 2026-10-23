# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

Use Node.js 24 or newer and npm. `package-lock.json` is the dependency lockfile used by CI and Renovate.

```
$ npm ci
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Type checking

```
$ npm run typecheck
```

CI checks TypeScript before building the site. It also runs `npm run test:dependencies` to check the HTTP and WebSocket consumers, and `npm run test:dev` to start the development server and request its main routes.

### Dependency maintenance

Renovate monitors package and GitHub Actions updates. Its dashboard closes automatically when no package updates remain. Lockfile maintenance is handled by the `update-lock` workflow on pushes to `main`, Mondays at 03:00 UTC, and manual dispatch. It refreshes `package-lock.json` within the declared version ranges, installs with `npm ci`, and runs type checking, dependency integrations, the development smoke test and both production builds before committing the updated lockfile.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
