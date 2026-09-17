# Rules

What this package adds on top of `eslint-config-airbnb-extended`. The maps live
in [`src/rules`](../rules). For the complete set of active rules, including the
inherited ones, run `npm run inspect`.

## Base

[`src/rules/base.mjs`](../rules/base.mjs), applies to every file.

| Rule                                 | Setting                               |
|--------------------------------------|---------------------------------------|
| `@stylistic/brace-style`             | `1tbs`, no single line braces         |
| `@stylistic/max-len`                 | 120 characters                        |
| `@stylistic/no-multiple-empty-lines` | at most one                           |
| `@stylistic/object-curly-newline`    | consistent, break from two properties |
| `@stylistic/object-curly-spacing`    | always                                |
| `curly`                              | braces around every block             |
| `sort-keys`                          | ascending                             |
| `no-console`                         | error                                 |
| `no-undef-init`                      | error                                 |
| `import-x/order`                     | builtin, external, internal, parent, sibling, index |
| `import-x/no-rename-default`         | off                                   |
| `import-x/prefer-default-export`     | off                                   |
| `promise/catch-or-return`            | off                                   |
| `promise/no-nesting`                 | off                                   |

`max-len` ignores URLs, strings, template literals, regular expressions and
trailing comments.

`no-console` is an error, not a warning, because a warning is something nobody
looks at.

The two `promise` rules and `import-x/prefer-default-export` fire on patterns
that are perfectly readable; the noise trained people to disable the whole
plugin. `import-x/no-rename-default` is off because renaming a default import
is common and harmless, for example `import en from './translations/en'`.

`import-x/extensions` is the least obvious one:

```js
['error', 'ignorePackages', { cjs: 'always', js: 'never', jsx: 'never', mjs: 'always' }]
```

Bundled `.js` and `.jsx` sources are imported without an extension because the
bundler resolves them. Node ESM resolves nothing, so `.mjs` and `.cjs` imports
must carry it. A package that is itself a Node ESM project therefore uses `.mjs`
files throughout, this one included.

## React

[`src/rules/react.mjs`](../rules/react.mjs), applies to every file, not only to
`.jsx` and `.tsx`.

| Rule                                  | Setting                                    |
|---------------------------------------|--------------------------------------------|
| `react/no-unstable-nested-components`  | error, `allowAsProps: true`               |
| `react/function-component-definition`  | arrow functions                           |
| `react/jsx-sort-props`                 | alphabetical, case insensitive            |
| `react/destructuring-assignment`       | off                                       |
| `react/jsx-props-no-spreading`         | off                                       |
| `jsx-a11y/label-has-associated-control`| `assert: 'either'`, `depth: 25`           |
| `react-hooks/exhaustive-deps`          | error (pinned)                            |
| `react-hooks/rules-of-hooks`           | error (pinned)                            |

**`allowAsProps: true` matters a lot.** Without it the rule fires on every
render prop, a callback passed as a prop and called by the parent. Those are not
remounted; one of our projects reported 274 of them. With the option the rule
still catches what it is for: a component defined during render and used as a
JSX element, which does remount and lose its state.

`destructuring-assignment` and `jsx-props-no-spreading` are off because both
fight patterns our component libraries are built on, in particular forwarding
the rest of the props to the underlying element.

The two `react-hooks` rules are already set by airbnb-extended. They are pinned
here because they are the ones we are least willing to lose to an upstream
change.

## TypeScript

[`src/rules/typescript.mjs`](../rules/typescript.mjs), applies to `.ts`, `.tsx`
and `.d.ts` only. The one area that brings its own plugin.

| Rule                                             | Effect                       |
|--------------------------------------------------|------------------------------|
| `@typescript-eslint/consistent-type-definitions`  | `type` over `interface`      |
| `@typescript-eslint/consistent-type-imports`      | `import type` for types      |
| `@typescript-eslint/consistent-type-exports`      | `export type` for types      |
| `@typescript-eslint/no-deprecated`                | reports deprecated API usage |
| `perfectionist/sort-enums`                        | sorts enum members           |
| `perfectionist/sort-interfaces`                   | sorts interface members      |
| `perfectionist/sort-object-types`                 | sorts type literal members   |

`sort-keys` only understands object literals. Type declarations are different
syntax nodes and neither ESLint core nor `typescript-eslint` sorts them
alphabetically, `@typescript-eslint/member-ordering` sorts by kind of member.
That is what `eslint-plugin-perfectionist` is here for.

`import-x/extensions` is repeated with the TypeScript extensions added, all of
them `never`, because TypeScript resolves `./foo` to `foo.ts` itself.
