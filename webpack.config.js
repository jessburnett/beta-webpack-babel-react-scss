module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    mode: "development",
    devServer: {
        contentBase:  __dirname + "/public",
        port: 3000,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js/
            },
            {
                test: /\.s?css/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            gifsicle: {
                                interlanced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            }
                        }
                    }
                ]
            }
        ]
    }
}