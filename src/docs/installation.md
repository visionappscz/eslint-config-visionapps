# Installation

```sh
npm install --save-dev eslint @visionappscz/eslint-config-visionapps
```

All plugins are bundled. Two peer dependencies are installed automatically:

| Peer         | Range     | Note                                             |
|--------------|-----------|--------------------------------------------------|
| `eslint`     | `^9.22.0` | ESLint 10 is blocked by `eslint-plugin-react`    |
| `typescript` | `>=5.0.0` | Loaded by airbnb-extended even in JS projects    |

Then create `eslint.config.mjs` and spread the configs, see
[Configs](./configs.md).

## Project overrides

Put project blocks after the shared configs. Always give them a `name`, it is
what `npm run inspect` shows when tracing a rule.

```js
export default defineConfig([
  ...configs.base.recommended,
  ...configs.react.recommended,
  {
    name: 'my-project/rules',
    rules: {
      'react/require-default-props': 'off',
    },
  },
  {
    files: ['**/*.test.ts'],
    name: 'my-project/tests',
    rules: {
      '@typescript-eslint/unbound-method': 'off',
    },
  },
]);
```
