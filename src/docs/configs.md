# Configs

| Config                      | Applies to             | Purpose                                   |
|-----------------------------|------------------------|-------------------------------------------|
| `configs.base.recommended`  | all files              | Core rules, imports, promises, code style |
| `configs.react.recommended` | all files              | React, React Hooks, JSX accessibility     |
| `configs.base.typescript`   | `.ts`, `.tsx`, `.d.ts` | TypeScript parser and type-aware rules    |
| `configs.react.typescript`  | `.ts`, `.tsx`, `.d.ts` | React adjustments for TypeScript          |

A JavaScript project spreads the first one, a React project the first two, a
React and TypeScript project all four:

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

Type-aware rules use the
[project service](https://typescript-eslint.io/packages/parser/#projectservice),
so a `tsconfig.json` covering the linted files must exist.

## The `typescript` configs are additions

They are not TypeScript variants of the `recommended` ones. The `recommended`
configs apply to every extension, TypeScript included, which is why
`react-hooks/*` or `sort-keys` work in `.tsx` files on their own.

`configs.react.typescript` holds exactly two things: `.tsx` added to
`react/jsx-filename-extension`, and the import resolver settings for `.ts`,
`.tsx` and the `paths` of `tsconfig.json`.

## Order matters

The last block that matches a file wins, so the order above is part of the
contract.

* Leaving out `configs.base.recommended` **fails loudly** — it registers the
  `@stylistic` and `import-x` plugins, and ESLint stops with
  `could not find plugin "@stylistic"`.
* Spreading `configs.base.typescript` first **fails silently** — the base
  `import-x/extensions` wins and `.ts` imports start requiring a file
  extension. If a rule behaves oddly, check the order with `npm run inspect`.

## Globals

The base config adds the Node globals, the React config the browser ones, both
to all files. A React project therefore has `process` and `window` everywhere,
which is deliberate: build tooling, tests and application code are mixed in our
repositories.

A browser project **without** React gets no browser globals and has to add them:

```js
{
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  name: 'my-project/globals',
}
```
