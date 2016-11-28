import {join, resolve} from 'path';
import webpack, {ProgressPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackMerge from 'webpack-merge';

export default env => {
	let config = {
		entry: {
			main: './src/index.js'
		},
		output: {
			path: resolve(__dirname, './dist'),
			filename: '[name].chunk.js'
		},
		module: {
			rules: [
				{
					test:/\.css?$/,
					loaders: [
						'style-loader',
						{loader: 'css-loader', options: {modules: true}},
						'postcss-loader'
					]
				}
			]
		},
		plugins: [
			new ProgressPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html'
			})
		]
	};

	const ENV = env;

	if (ENV === "development") {
		config = webpackMerge(config, require('./build_config/webpack-dev-config.babel.js'));
	}

	if (ENV === "production") {
		config = webpackMerge(config, require('./build_config/webpack-prod-config.babel.js'));
	}

	return config;
}
