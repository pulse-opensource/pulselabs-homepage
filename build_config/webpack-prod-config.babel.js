import webpack from 'webpack'; 
import {resolve} from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let prodConfig = {
	entry: {
		main: './src/index.js'
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
				options: {
					"presets": [
						"react",
						["es2015", {"modules": false}],
						"stage-1",
						"stage-2",
						"latest"
					]
				},
				exclude: [/node_modules/]
			},
			{
				test: /\.css?$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader?modules',
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename: 'style.css', allChunks: true })
	]
};

export default prodConfig;


