const TransformPages = require('uni-read-pages');
const VConsolePlugin = require('vconsole-webpack-plugin');

const { webpack } = new TransformPages();
module.exports = {
  transpileDependencies: ['uview-ui'],
  configureWebpack: {
    plugins: [
      new VConsolePlugin({
        enable: process.env.NODE_ENV === 'development',
      }),
      new webpack.DefinePlugin({
        ROUTES: webpack.DefinePlugin.runtimeValue(() => {
          const tfPages = new TransformPages({
            includes: ['path', 'name', 'meta', 'aliasPath'],
          });
          return JSON.stringify(tfPages.routes);
        }, true),
      }),
    ],
  },
};
