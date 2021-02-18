// get more information in https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file
/* eslint-disable @typescript-eslint/no-var-requires */
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const CracoAntDesignPlugin = require('craco-antd')
require('dotenv-cra').config()

module.exports = {
  webpack: {
    plugins: [
      new SimpleProgressWebpackPlugin(), // 查看打包的进度
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#ff6600',
        },
      },
    },
  ],
}
