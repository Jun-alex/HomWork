const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext]"
                }
            }
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new ImageMinimizerPlugin({
            minimizer: [
                {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", {interlaced: true}],
                            ["jpegtran", {progressive: true}],
                            ["optipng", {optimizationLevel: 5}],
                        ],
                    },
                },
                {
                    implementation: ImageMinimizerPlugin.svgoMinify,
                    options: {
                        encodeOptions: {
                            multipass: true,
                            plugins: [
                                {
                                    name: "preset-default",
                                    params: {
                                        overrides: {
                                            removeViewBox: false,
                                            addAttributesToSVGElement: {
                                                params: {
                                                    attributes: [{xmlns: "http://www.w3.org/2000/svg"}],
                                                },
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        }),
    ],
    devServer: {
        static: "./dist",
        hot: true,
        open: true,
    },
    mode: "development",
};
