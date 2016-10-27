var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './app/app.jsx',
	output: { path: __dirname, filename: 'bundle.js' },

	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node-modules/,
				query: {
					presets: ['es2015', 'react', 'stage-2'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy']
				}
			}
		]
	}
}
