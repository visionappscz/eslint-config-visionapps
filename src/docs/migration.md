# Migration from 1.x

Version 2 is flat config only and extends `eslint-config-airbnb-extended`
instead of `eslint-config-airbnb`. Legacy `.eslintrc*` files are not supported;
stay on 1.x for projects that cannot move yet.

1. **Replace the config file.** Delete `.eslintrc*`, including nested ones, and
   write `eslint.config.mjs`, see [Configs](./configs.md). A nested `.eslintrc`
   becomes an ordinary block with a `files` pattern in the root config.

2. **Upgrade ESLint to `^9.22.0`** and remove the bundled packages from
   `devDependencies`: `eslint-config-airbnb`, `eslint-config-airbnb-typescript`,
   `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-promise`,
   `eslint-plugin-react`, `eslint-plugin-react-hooks`,
   `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`. Add
   `typescript` if the project does not have it.

3. **Rename the rules**: `import/*` to `import-x/*`, and the formatting rules to
   `@stylistic/*`, for example `max-len` to `@stylistic/max-len`. They appear in
   overrides **and** in `eslint-disable` comments, which is the part that is easy
   to miss: a comment disabling a rule that no longer exists is silently useless.

4. **Drop `--ext`**, it is gone in ESLint 9:

   ```diff
   -"eslint": "eslint --ext ts,tsx src tests"
   +"eslint": "eslint src tests"
   ```

   If the script chains invocations with `&&`, the first failure stops the rest,
   so findings in `tests` stay hidden until `src` is clean.

## Expect these findings

* **React Compiler rules** of `eslint-plugin-react-hooks` 7, such as
  `react-hooks/set-state-in-effect` and `react-hooks/refs`. They find real
  legacy patterns; fixing them properly is a refactor, so a targeted
  `eslint-disable` with a reason is a reasonable first step.
* **`react/no-unstable-nested-components`**, see [Rules](./rules.md#react).
* **`import-x/extensions`** on `.mjs` imports, which now need the extension.
* **Unused catch bindings.** ESLint 9 changed the default of `caughtErrors`, so
  `catch (err)` with an unused `err` is an error. Use `catch {}`.
