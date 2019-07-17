const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    require('autoprefixer'),
    new webpack.HotModuleReplacementPlugin()
  ]
}