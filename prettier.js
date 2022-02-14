const prettierSettings = require('./.prettierrc.json');

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierSettings],
  },
};
