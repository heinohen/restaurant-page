const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The dark Restarrrr',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
    mode: "production",
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }

        ],
    },
}