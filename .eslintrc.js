module.exports = {
  env: {
    browser: true,
  },
  rules: {
    'max-len': 0,
    'no-param-reassign': 0,
    'import/extensions': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'],
      },
    ],
    'object-curly-newline': 0,
  },
};
