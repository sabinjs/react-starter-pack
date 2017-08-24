import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
//import config from '../webpack.config.babel';
import config from '../webpack.dev';


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: "build",
    hot: true,
    //quiet: false,
    //noInfo: false,
    //publicPath: "/assets/",
    historyApiFallback: true,
    proxy: {
      "/api/*": "http://localhost:3030"
    }

   // stats: { colors: true }
}).listen(4040, 'localhost', function(err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:4040');
});