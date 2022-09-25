const config = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
  ],
  plugins: ['react', 'import'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = config;