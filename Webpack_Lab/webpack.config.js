const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // mode: 'development',
  // devServer: {
  //   static: {
  //     directory: path.resolve(__dirname, './dist'),
  //   },
  //   historyApiFallback: true,
  //   open: true,
  //   compress: true,
  //   hot: true,
  //   port: 8080,
  // },
  entry: {
    main: path.resolve(__dirname, './src/script.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Lab',
      product_name: 'Lego',
      product_title: 'Lego เพื่อเด็กเล็ก สร้างเสริมประสบการณ์ดีๆให้กับเด็กๆ',
      price: '฿38',
      status: 'ขายแล้ว 50 ชิ้น',
      template: path.resolve(__dirname, './src/shopingCard.html'),
      filename: 'index.html', //Outputfile
    }),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:svg)$/i,
        type: 'asset/inline',
      },
    ],
  },
};
