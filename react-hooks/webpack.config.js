const path = require('path');

module.exports = {
	// original file to be transpiled
	entry: path.resolve(__dirname, 'src', 'index.js'),
	// destiny of transpiled file
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
	// directory watched by webpack-dev-server when any update comes
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		historyApiFallback: true,
	},
	// config. rules to transpiling project
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
 loader: 'style-loader' 
},
					{
 loader: 'css-loader' 
},
					{
            loader: 'sass-loader',
            options: {
              data: '@import "~@styles/global.scss";'
            }
          }
				]
			},
			{
				test: /\.(jpeg|jpg|png|gif|woff|woff2|eot|ttf)$/,
				use: [
					{
 loader: 'file-loader' 
},
					{
 loader: 'url-loader' 
}
				]
      },
      {
        test: /\.svg$/,
        use: [
          {
 loader: '@svgr/webpack' 
},
          {
 loader: 'url-loader' 
}
        ]
      }
		]
	}
};
