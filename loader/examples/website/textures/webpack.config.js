const CONFIG = {
  mode: 'development',

  entry: {
    app: './app.js'
  },

  output: {
    library: 'App'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        // Transpile ES6 to ES5 with babel
        // Remove if your app does not use JSX or you don't need to support old browsers
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};

// This line enables bundling against src in this repo rather than installed module
module.exports = (env) => (env ? require('../../webpack.config.local')(CONFIG)(env) : CONFIG);
