# eslint-config-visionapps

VisionApps' shareable [ESLint](https://eslint.org) config. It extends
[eslint-config-airbnb-extended](https://github.com/eslint-config/airbnb-extended)
(the maintained successor of `eslint-config-airbnb`,
`eslint-config-airbnb-base` and `eslint-config-airbnb-typescript`) and
[eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
with [more strict rules](./src/docs/rules.md).

Flat config only, ESLint 9 and newer. Legacy `.eslintrc*` files are not
supported; use version 1.x for those.

## Installation

```sh
npm install --save-dev eslint @visionappscz/eslint-config-visionapps
```

All plugins are bundled. Create `eslint.config.mjs` and spread the parts the
project needs, in this order:

```js
import { configs } from '@visionappscz/eslint-config-visionapps';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...configs.base.recommended,
  ...configs.react.recommended,
  ...configs.base.typescript,
  ...configs.react.typescript,
]);
```

A JavaScript project spreads the first one, a React project the first two. The
`typescript` configs are additions to the `recommended` ones, not replacements.

## Documentation

* [Installation](./src/docs/installation.md)
* [Configs](./src/docs/configs.md)
* [Rules](./src/docs/rules.md)
* [Migration from 1.x](./src/docs/migration.md)
* [Development](./src/docs/development.md)
* [Releasing](./src/docs/releasing.md)
