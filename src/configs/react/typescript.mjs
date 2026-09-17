import { configs as airbnbConfigs } from 'eslint-config-airbnb-extended';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...airbnbConfigs.react.typescript,
]);
