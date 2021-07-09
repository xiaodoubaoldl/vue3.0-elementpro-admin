const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
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
