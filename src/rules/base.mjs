/*
 * Overrides of `eslint-config-airbnb-extended` and `eslint-plugin-promise`
 * applied to every file, regardless of the language.
 */
export default {
  '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
  '@stylistic/max-len': ['error', {
    code: 120,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreTrailingComments: true,
    ignoreUrls: true,
  }],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
  '@stylistic/object-curly-newline': ['error', {
    consistent: true,
    minProperties: 2,
    multiline: true,
  }],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  curly: ['error', 'all'],
  // Node ESM requires explicit file extensions, unlike bundled `.js` and `.jsx` sources
  'import-x/extensions': ['error', 'ignorePackages', {
    cjs: 'always',
    js: 'never',
    jsx: 'never',
    mjs: 'always',
  }],
  // Renaming a default import is common and harmless, e.g. `import en from './translations/en'`
  'import-x/no-rename-default': 'off',
  'import-x/order': ['error', {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
  }],
  'import-x/prefer-default-export': 'off',
  'no-console': 'error',
  'no-undef-init': 'error',
  'promise/catch-or-return': 'off',
  'promise/no-nesting': 'off',
  'sort-keys': ['error', 'asc'],
};
