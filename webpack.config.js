const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './client/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   mode: 'development',
   module: {
      rules: [
         {
            test: /\.jsx?/,
            exclude : /(node_modules)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env','@babel/preset-react']
               }}
         },
         {
            test: /\.s[ac]ss$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, '/index.html' ),
         filename: 'index.html'
      })
   ],
   devServer: {
      proxy: {
         '/api': 'http://localhost:3000'
      },
   }
};