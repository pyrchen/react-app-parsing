const config = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:testing-library/react', 'prettier'],
  plugins: ['react', 'import', 'jsx-a11y', 'jest', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'no-duplicate-imports': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = config;
