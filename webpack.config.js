const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
module.exports={
  entry:{
    entry:'./src/entry.js',
    entry2: './src/entry2.js'
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
    new uglify()
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:'192.168.0.105',
    compress: true,
    port:1717
  }
};
