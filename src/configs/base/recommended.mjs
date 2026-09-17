import {
  configs as airbnbConfigs,
  helpers,
  plugins,
} from 'eslint-config-airbnb-extended';
import promisePlugin from 'eslint-plugin-promise';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import baseRules from '../../rules/base.mjs';

const { allFiles } = helpers.extensions;

export default defineConfig([
  plugins.stylistic,
  plugins.importX,
  ...airbnbConfigs.base.recommended,
  {
    ...promisePlugin.configs['flat/recommended'],
    files: allFiles,
    name: 'visionapps/plugin/promise',
  },
  {
    files: allFiles,
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    name: 'visionapps/base',
    rules: baseRules,
  },
]);
