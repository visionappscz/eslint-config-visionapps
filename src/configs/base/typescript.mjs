import {
  configs as airbnbConfigs,
  helpers,
  plugins,
} from 'eslint-config-airbnb-extended';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import typescriptRules from '../../rules/typescript.mjs';

const { tsFiles } = helpers.extensions;

export default defineConfig([
  plugins.typescriptEslint,
  ...airbnbConfigs.base.typescript,
  {
    extends: [tseslint.configs.recommendedTypeChecked],
    files: tsFiles,
    name: 'visionapps/typescript',
    plugins: {
      perfectionist,
    },
    rules: typescriptRules,
  },
]);
