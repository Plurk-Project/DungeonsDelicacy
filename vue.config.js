const fs = require('fs');
const webpack = require('webpack');
const packageJson = fs.readFileSync('./package.json');
const manifest = JSON.parse(fs.readFileSync('./public/manifest.json'));
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
    name: manifest.name,
    themeColor: manifest.theme_color,
    msTileColor: manifest.background_color,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: manifest.theme_color,
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
  },
  runtimeCompiler: true,
};
