import webpack from 'webpack';  
import path from 'path';

module.exports = {
 //devtool:'source-map',
 devtool: 'cheap-module-source-map',
 entry: [
   'webpack-dev-server/client?http://localhost:4040',
   'webpack/hot/only-dev-server',
   './src/index.tsx'
   ],

/*
* The combination of path and filename tells Webpack what name to give to
* the final bundled JavaScript file and where to store this file.
*/
 output: {
   path: __dirname + "/build",
   filename: "bundle.js"
 },

/*
* resolve lets Webpack now in advance what file extensions you plan on
* "require"ing into the web application, and allows you to drop them
* in your code.
*/
resolve: {
  //extensions: ["", ".ts", ".tsx", ".js"]

  // Look for modules in .ts(x) files first, then .js
  extensions: [".ts",".tsx", ".js"],

  // add 'src' to the modules, so that when you import files you can do so with 'src' as the relative route
  modules: ['src', 'node_modules']
},

 devServer: {
   //contentBase: path.join(__dirname, "build"),
   compress: true,
   //port: 3000
 },
 module: {
  /*
  * Each loader needs an associated Regex test that goes through each
  * of the files you've included (or in this case, all files but the
  * ones in the excluded directories) and finds all files that pass
  * the test. Then it will apply the loader to that file. I haven't
  * installed ts-loader yet, but will do that shortly.
  */

  loaders: [
    // .ts(x) files should first pass through the Typescript loader, and then through babel
    {
      test: /\.tsx?$/,
      loaders: ['react-hot-loader', 'babel-loader', 'ts-loader'],
      include: path.resolve('src')
      //loader: "ts-loader",
      //exclude: /node_modules/
    },
    // {
    //   test: /\.js$/,
    //   loader: "babel-loader",
    //   exclude: /node_modules/
    // },
    {
      test: /\.css$/,
      loaders: [ 'style-loader', 'css-loader' ]
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('development')
      }
  })
  ]
};