const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output:{ path: path.resolve(__dirname, 'dist') },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|mp3)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tyreeck Codes Now?!',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}