const config = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'import', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  root: true,
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'no-duplicate-imports': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx'],
    }],
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = config;
