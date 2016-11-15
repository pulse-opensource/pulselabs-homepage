import {join, resolve} from 'path';
import webpack, {ProgressPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config = {
	entry: {
		main: ['./src/index.js', './src/index.css']
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
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: [/node_module/]
			},
			{
				test:/\.css?$/,
				loaders: ['style','css']
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
