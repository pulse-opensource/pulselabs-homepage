import {join, resolve} from 'path';
import webpack, {ProgressPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
			},
			{
				test: /\.css?$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader?modules',
				}),
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename: 'style.css', allChunks: true }),
		new ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],

	devServer: {
		historyApiFallback: true,
	}
};

export default config;
