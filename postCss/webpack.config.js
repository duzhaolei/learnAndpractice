const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        // modules: true,
                        // localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }, "postcss-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            // publicPath: 'assets/',
                            outputPath: 'images/',
                        }
                    }
                ]
            }
        ]
    }
}