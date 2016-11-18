import webpack from 'webpack'; 
import {resolve} from 'path';

let devConfig = {
	entry: {
		main: [
			'react-hot-loader/patch','./src/index.js'
		]
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
					],
					"plugins": [
						"react-hot-loader/babel"
					]
				},
				exclude: [/node_modules/]
			},
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin()
	]
}

export default devConfig;
