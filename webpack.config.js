const path = require('path');
const webpack = require('webpack');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin')
module.exports={
  entry:{
    entry:'./src/entry.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    // new uglify()
    new htmlPlugin({
      minify:{
        removeAttributeQuotes:true
      },
      hash: true,
      template:'./src/index.html'
    })
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:'192.168.0.105',
    compress: true,
    port:1717
  }
};
