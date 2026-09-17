/*
 * Overrides of the React, React Hooks and JSX accessibility rules of
 * `eslint-config-airbnb-extended`.
 */
export default {
  'jsx-a11y/label-has-associated-control': ['error', {
    assert: 'either',
    controlComponents: [],
    depth: 25,
    labelAttributes: [],
    labelComponents: [],
  }],
  /*
   * Already set by `eslint-config-airbnb-extended`. Pinned here on purpose:
   * these are the two rules we are least willing to lose to an upstream change.
   */
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react/destructuring-assignment': 'off',
  'react/function-component-definition': ['error', {
    namedComponents: 'arrow-function',
    unnamedComponents: 'arrow-function',
  }],
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': ['error', {
    callbacksLast: false,
    ignoreCase: true,
    locale: 'en',
    noSortAlphabetically: false,
    reservedFirst: false,
    shorthandFirst: false,
    shorthandLast: false,
  }],
  // Render-prop callbacks passed as props are a common pattern and are not remounted,
  // unlike components defined during render and used as JSX elements
  'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
};
