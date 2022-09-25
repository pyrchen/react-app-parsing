const config = {
  extends: ['stylelint-config-standard', 'stylelint-order-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    indentation: ['tab'],
  },
};

module.exports = config;