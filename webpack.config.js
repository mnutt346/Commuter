module.exports = {
  entry: "./src/app.jsx",
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
    publicPath: "/dist/"
  },
  devServer: {
    publicPath: "/dist/",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: __dirname + "./node_modules/react-flexbox-grid"
      },
      {
        test: /(\.scss|\.css)$/,
        loader: "style!css?modules!sass",
        include: __dirname + "./node_modules/react-flexbox-grid",
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader"
      }
    ]
  }
};
