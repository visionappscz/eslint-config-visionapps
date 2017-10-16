module.exports = {
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module'
    },
    extends: [
        'airbnb'
    ],
    rules: {
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
        }],
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        'object-curly-newline': ['error', {
            'multiline': true,
            'minProperties': 2,
            'consistent': true
        }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': false }],
        'sort-keys': ['error', 'asc'],
        'no-undef-init': ['error']
    }
};
