const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const jsMinimizerPlugin = require('terser-webpack-plugin');
const devMode = process.env.NODE_ENV === 'development';

const plugins = [
    new HTMLWebpackPlugin({
        template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
];

const getOptimizationConfit = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if (!devMode) {
        config.minimizer = [
            new jsMinimizerPlugin(),
            new optimizeCssWebpackPlugin(),
        ];
    }

    return config;
};

if (!devMode)
    plugins.push(
        new miniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    );

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: '/index.js',
        analytics: '/analytics.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    devServer: {
        port: 4200,
        hot: devMode,
    },
    resolve: {
        extensions: ['.js', '.png', '.csv', '.xml', '.json', '.css', '.scss'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },
    optimization: getOptimizationConfit(),
    plugins,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    !devMode
                        ? {
                              loader: miniCssExtractPlugin.loader,
                              options: {
                                  publicPath: (resourcePath, context) => {
                                      return (
                                          path.relative(
                                              path.dirname(resourcePath),
                                              context,
                                          ) + '/'
                                      );
                                  },
                              },
                          }
                        : 'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader'],
            },
            {
                test: /\.xml$/,
                use: 'file-loader',
            },
            {
                test: /\.csv$/,
                use: 'csv-loader',
            },
        ],
    },
};
