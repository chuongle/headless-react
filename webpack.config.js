module.exports = {
	entry: './src/index.jsx',
	output: {
		path: './src',
		filename: 'bundle.js'
	},
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
	}
}