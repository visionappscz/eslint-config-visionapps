module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:promise/recommended',
    ],
    plugins: [
        'react-hooks'
    ],
    rules: {
        'import/order': ['error', {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
        }],
        'jsx-a11y/label-has-associated-control': ['error', {
            labelComponents: [],
            labelAttributes: [],
            controlComponents: [],
            assert: 'either',
            depth: 25
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
        'react/no-unstable-nested-components': ['off'],
        'react/function-component-definition': ['error', {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }],
        'react/jsx-sort-props': ['error', {
          ignoreCase: true,
          callbacksLast: false,
          locale: 'en',
          shorthandFirst: false,
          shorthandLast: false,
          noSortAlphabetically: false,
          reservedFirst: false,
        }],
        'sort-keys': ['error', 'asc']
    }
};
