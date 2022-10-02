const config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-property-sort-order-smacss',
  ],
  rules: {
    indentation: 2,

  },
  ignoreFiles: 'node_modules/**/*.css',
};

module.exports = config;