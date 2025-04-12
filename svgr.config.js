/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

module.exports = {
  jsx: {
    babelConfig: {
      plugins: [[path.resolve('./dynamic-ids.js')]],
    },
  },
};
