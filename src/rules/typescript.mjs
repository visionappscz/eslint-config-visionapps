/*
 * Rules applied to TypeScript files only. `perfectionist` sorts the members of
 * type declarations, which the core `sort-keys` rule cannot do.
 */
export default {
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/no-deprecated': 'error',
  'import-x/extensions': ['error', 'ignorePackages', {
    cjs: 'always',
    cts: 'never',
    js: 'never',
    jsx: 'never',
    mjs: 'always',
    mts: 'never',
    ts: 'never',
    tsx: 'never',
  }],
  'perfectionist/sort-enums': ['error', {
    ignoreCase: true,
    type: 'alphabetical',
  }],
  'perfectionist/sort-interfaces': ['error', {
    ignoreCase: true,
    type: 'alphabetical',
  }],
  'perfectionist/sort-object-types': ['error', {
    ignoreCase: true,
    type: 'alphabetical',
  }],
};
