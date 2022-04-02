const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'@styles': path.resolve(__dirname, 'src/styles'),
		},
	},
	devServer: {
		static: path.resolve(__dirname, 'build'),
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: require.resolve('babel-loader'),
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader', options: { additionalData: '@import "~@styles/global.scss";' } },
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: 'file-loader',
			},
		],
	},
};
