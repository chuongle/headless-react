const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: './public',
		filename: 'bundle.js',
		sourceMapFilename: "bundle.map"
	},
	devtool: '#source-map',
	devServer: {
		inline: true,
		contentBase: './src',
		port: 3000
	},
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},
	plugins: [
    new Dotenv({
      path: './.env'
    })
  ]
}