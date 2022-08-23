import * as path from 'path';
import * as webpack from 'webpack';
import * as CopyPlugin from 'copy-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const MODE: webpack.Configuration['mode'] = 'development';

const config: webpack.Configuration = {
    mode: MODE,
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['src', 'node_modules']
    },
    plugins: [
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.join(__dirname, 'public'),
        //             to: '.'
        //         }
        //     ]
        // }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 4688,
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-typescript", "solid"],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ]
    }
};

export default config;