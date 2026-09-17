import { defineConfig } from 'eslint/config';

import { configs } from './src/index.mjs';

/*
 * Every part of the exported config in the order projects are expected to
 * compose them. Not used for linting, it is the input of `npm run inspect`.
 */
export default defineConfig([
  ...configs.base.recommended,
  ...configs.react.recommended,
  ...configs.base.typescript,
  ...configs.react.typescript,
]);
