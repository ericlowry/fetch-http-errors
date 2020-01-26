const resolve = require('@rollup/plugin-node-resolve');

module.exports = {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'httpErrors'
  },
  plugins: [resolve()]
};
