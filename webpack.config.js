const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	// output: {
	// 	globalObject: 'this'
	// },
	entry: {
		'main': ['./src/main.ts'],
		'main.min': ['./src/main.ts']
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [],
	resolve: {
		extensions: ['.ts', '.js']
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				include: /\.min\.js$/,
				chunkFilter: (chunk) => {
					// Exclude uglification for the `vendor` chunk
					if (chunk.name === 'vendor') {
						return false;
					}

					return true;
				},
			}),
		],
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'initial'
				}
			}
		}
	},
	watchOptions: {
		ignored: [
			'node_modules'
		]
	}
};
