const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '~': './src',
        '@': './src'
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  ])
);
