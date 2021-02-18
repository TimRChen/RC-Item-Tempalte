// get more information in https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file
/* eslint-disable @typescript-eslint/no-var-requires */
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const CracoAntDesignPlugin = require('craco-antd')
require('dotenv-cra').config()
const path = require('path')

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@components': pathResolve('src/components'),
      '@views': pathResolve('src/views'),
    },
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
