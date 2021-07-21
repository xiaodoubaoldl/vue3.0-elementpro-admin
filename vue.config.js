const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  publicPath: '/vue3.0-elementpro-admin/',
  assetsDir: 'static',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  devServer: {
    open: true,
    port: 8888,
  },
};
