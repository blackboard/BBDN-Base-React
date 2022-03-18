module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:import/errors',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/function-component-definition': 0,
        'react/boolean-prop-naming': 0,
        'react/prop-types': 0,
        'react-hooks/exhaustive-deps': 1,
        'react/react-in-jsx-scope': 0,
        'no-unused-vars': 1,
        'react/display-name': [0],
    },
};
