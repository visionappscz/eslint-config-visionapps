module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        'airbnb',
        'plugin:promise/recommended',
    ],
    plugins: [
        'react-hooks'
    ],
    rules: {
        'import/order': ['error', {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
        }],
        'max-len': ['error', {
          code: 120,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        }],
        'object-curly-newline': ['error', {
            multiline: true,
            minProperties: 2,
            consistent: true
        }],
        'object-curly-spacing': ['error', 'always'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-undef-init': ['error'],
        'promise/catch-or-return': ['off'],
        'promise/no-nesting': ['off'],
        'react/destructuring-assignment': ['off'],
        'react/jsx-props-no-spreading': ['off'],
        'react-hooks/exhaustive-deps': ['error'],
        'react-hooks/rules-of-hooks': ['error'],
        'sort-keys': ['error', 'asc']
    }
};
