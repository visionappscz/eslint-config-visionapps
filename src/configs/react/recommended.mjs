import {
  configs as airbnbConfigs,
  helpers,
  plugins,
} from 'eslint-config-airbnb-extended';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import reactRules from '../../rules/react.mjs';

const { allFiles } = helpers.extensions;

export default defineConfig([
  plugins.react,
  plugins.reactHooks,
  plugins.reactA11y,
  ...airbnbConfigs.react.recommended,
  {
    files: allFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    name: 'visionapps/react',
    rules: reactRules,
  },
]);
