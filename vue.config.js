const fs = require('fs');
const webpack = require('webpack');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || 0;
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          PACKAGE_VERSION: '"' + version + '"',
        },
      }),
    ],
  },
  pwa: {
    name: '地下城與美食 非官方 排行榜',
    themeColor: '#654236',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#654236',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
  },
  publicPath:
    process.env.NODE_ENV === 'production' ? '/DungeonsDelicacy/' : '/',
  runtimeCompiler: true,
};
