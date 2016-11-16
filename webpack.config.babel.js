import {join, resolve} from 'path';
import webpack, {ProgressPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config = {
	entry: {
		main: './src/index'
	},
	output: {
		path: resolve(__dirname, './dist'),
		filename: '[name].chunk.js'
	},
	resolve: {
		alias: {
			"react": "preact-compat",
			"react-dom": "preact-compat"
		}
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: [/node_module/]
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

export default config;
