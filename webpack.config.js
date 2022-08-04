"use strict";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (env) {
    const nodeEnv = env.NODE_ENV;
    const isEnvProduction = nodeEnv === "production" ? true : false;

    return {
        mode: nodeEnv,
        bail: isEnvProduction,
        devtool: false,
        entry: "index.js",
        optimization: {
            minimize: isEnvProduction,
            runtimeChunk: {
                name: (entryPoint) => `runtime-${entryPoint.name}`
            }
        },
        resolve: {
            modules: [__dirname, "src", "node_modules"],
            extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: require.resolve("babel-loader"),
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        compact: isEnvProduction
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        template: "./src/index.html"
                    },
                    isEnvProduction && {
                        minify: {
                            removeComments: true,
                            collapseWhitespace: true,
                            removeRedundantAttributes: true,
                            useShortDoctype: true,
                            removeEmptyAttributes: true,
                            removeStyleLinkTypeAttributes: true,
                            keepClosingSlash: true,
                            minifyJS: true,
                            minifyCSS: true,
                            minifyURLs: true
                        }
                    }
                )
            ),
            new MiniCssExtractPlugin()
        ].filter(Boolean),
        devServer: {
            port: 5000,
            open: true,
            historyApiFallback: true,
            hot: true
        }
    };
};
