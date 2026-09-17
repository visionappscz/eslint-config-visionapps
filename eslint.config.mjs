import { defineConfig } from 'eslint/config';

import { configs } from './src/index.mjs';

/*
 * The package itself is a plain Node ESM project, so only the base config
 * applies here. Use `npm run inspect` to explore the whole exported config,
 * including the React and TypeScript parts.
 */
export default defineConfig([
  ...configs.base.recommended,
  {
    name: 'visionapps/self',
    rules: {
      // The config files import ESLint and its plugins, which are peer or dev dependencies
      'import-x/no-extraneous-dependencies': 'off',
      // Node ESM resolves the exact file, so the explicit file name is not a useless segment
      'import-x/no-useless-path-segments': 'off',
    },
  },
]);
