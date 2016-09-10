var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './app/app.js',
	output: { path: __dirname, filename: 'bundle.js' },

	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node-modules/,
				query: {
					presets: ['es2015', 'react'],
					plugins: 'react-html-attrs'
				}
			}
		]
	}
}