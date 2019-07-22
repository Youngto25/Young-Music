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
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            {
              loader: 'url-loader',
              options: {
                name: 'imgs/[name].[hash].[ext]',
                publicPath: '/dist'
              }
            }
        ]
        }
    ]
  },
  plugins: [
    require('autoprefixer'),
    new webpack.HotModuleReplacementPlugin()
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}