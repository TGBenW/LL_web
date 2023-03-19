// module.exports = {
//   esversion: 6,
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ['plugin:react/recommended', 'standard'],
//   overrides: [],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: ['react'],
//   rules: {},
// };

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ['plugin:react/recommended', 'standard'],
//   parserOptions: {
//     ecmaVersion: 12, // Change 'latest' to the specific ECMAScript version, e.g., 12 for ES2021
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: ['react'],
//   rules: {},
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Turn off the rule that requires React to be in scope
    'react-hooks/rules-of-hooks': 'error', // Add the React Hooks rules
    'react-hooks/exhaustive-deps': 'warn',
    'space-before-function-paren': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
      runtime: 'automatic', // Use the new JSX runtime
    },
  },
}
