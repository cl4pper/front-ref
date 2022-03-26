const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    }
};