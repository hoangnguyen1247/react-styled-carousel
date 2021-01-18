const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const {
  babelInclude,
  addExternalBabelPlugin,
  addBabelPlugin,
} = require('customize-cra');

module.exports = function override(config) {
  // config.plugins.push(
  //   new BundleAnalyzerPlugin({
  //     openAnalyzer: false,
  //     analyzerMode: 'static',
  //   })
  // );

  babelInclude([
    path.resolve('./src'),
    path.resolve('./node_modules/react-styled-carousel'),
  ])(config);

  addBabelPlugin('@babel/plugin-transform-modules-commonjs')(config);
  // addExternalBabelPlugin('@babel/plugin-proposal-optional-chaining')(config);

  return config;
};
