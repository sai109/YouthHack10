const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
	const isProduction = env === 'production';
	const devMode = env !== 'production';

	return {
		node: {
			fs: 'empty'
		},
		entry: './src/app.js',
		output: {
			path: path.resolve(__dirname, './public'),
			filename: './dist/bundle.js'
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: './dist/style.css'
			})
		],
		module: {
			rules: [
				{
					test: /\.jsx*/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.(sc|c)ss/,
					use: [
						devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				}
			]
		},
		devtool: isProduction ? 'sourcemap' : 'inline-source-map',
		devServer: {
			historyApiFallback: true,
			contentBase: path.join(__dirname, 'public'),
			port: 3000
		}
	};
};
