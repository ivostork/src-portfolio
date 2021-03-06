const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// the path(s) that should be cleaned
let pathsToClean = [
  'dist'
]

// the clean options to use
let cleanOptions = {
  root:     path.resolve(__dirname , './'),
  verbose:  true,
}

module.exports = {
  entry: {
    app: './src/apps/app/index.jsx'
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
      chunks: ['app'],
      filename:'index.html'
    }),
    new ExtractTextPlugin('style.css')    
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/')
  },
  resolve: {
    extensions:['.js','.jsx']
  },
  module: {
    rules: [   
      {
        test: /\.jsx?/,
        include:[
          path.resolve(__dirname,'src')
        ],
        exclude: [
          path.resolve(__dirname,'node_modules')
        ],
        loader:'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {                
                sourcemap: true,
                minimize: true
              }
            }, 
            {
              loader: 'sass-loader',
              options: {
                sourcemap:true
              }            
            }
          ]
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp|woff|woff2)$/,
        use: [
          {
            loader:'file-loader',
            options:{
              name:'[name].[hash].[ext]',
              publicPath:''
            }
          }
        ],
      }
    ]
  }
};
