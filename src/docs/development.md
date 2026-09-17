# Development

No build step, `src` is published as it is. The package supports Node 22.11 and
newer; development uses the versions in `devEngines` and
[`.nvmrc`](../../.nvmrc).

| Command              | Purpose                                              |
|----------------------|------------------------------------------------------|
| `npm run eslint`     | Lint the package with its own base config            |
| `npm run eslint:fix` | The same with autofix                                |
| `npm run inspect`    | Browse the whole exported config at `localhost:7777` |

## Exploring the config

`npm run inspect` runs [ESLint Config
Inspector](https://github.com/eslint/config-inspector) over
`inspect.config.mjs`, which exists only for this and spreads all four exported
configs in the documented order. It lists every config block, every rule, and
for a rule the block that set it last. The inspector runs through `npx`, it is
not a dependency.

To list the rules of a **project** instead, `npx eslint --print-config <file>`
prints the resolved config as JSON.

## Adding a rule

Rules live in [`src/rules`](../rules) as bare rule maps. File patterns, globals
and plugins belong to the configs in [`src/configs`](../configs). Keep the maps
alphabetical, and if the reason for a setting is not obvious, write it in a
comment and in [Rules](./rules.md).

The package lints itself with its own `configs.base.recommended`. The root
`eslint.config.mjs` turns off `import-x/no-extraneous-dependencies` (the configs
import peer and dev dependencies) and `import-x/no-useless-path-segments` (Node
ESM resolves the exact file). Neither root config is published.

## Verifying a change

A change meant to be a refactor has to prove it changed nothing:

```sh
npx eslint -c inspect.config.mjs --print-config <sample> > before.json
# change something
npx eslint -c inspect.config.mjs --print-config <sample> > after.json
diff before.json after.json
```

Use one sample per extension, at least a `.js` and a `.ts` one, because the
configs branch on the file pattern. The TypeScript ones need a `tsconfig.json`
covering the sample. Then pack the package into a project and run its lint.
