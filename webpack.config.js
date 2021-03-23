const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
//const IgnorePlugin = require('IgnorePlugin');

const NODE_ENV = 'development';//process.env.NODE_ENV || 'development';
const production = NODE_ENV !== 'development';

const plugins = [];
console.log('NODE_ENV',console.log('NODE_ENV'));
plugins.push(new webpack.DefinePlugin(
    {'process.env.NODE_ENV':JSON.stringify(NODE_ENV)}));
/*
 if (NODE_ENV === 'development') {
 plugins.push(new BundleAnalyzerPlugin({
 generateStatsFile: true,
 analyzerMode: 'static',
 }));
 }
 */
// plugins.push(new ExtractTextPlugin({
//     filename: 'css/styles.css',
// }));

plugins.push(new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: ['dist'],
    verbose:true}));
//plugins.push(new CleanWebpackPlugin());

plugins.push(new CopyWebpackPlugin([
    { from: path.join(__dirname, './views/index.ejs'), to: path.join(__dirname, '/dist/index.ejs') },
]));


plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

module.exports = {
    entry: {
        // context:
        messenger: path.join(__dirname, '/client.jsx'),
    },
    output: {
        path: path.join(__dirname, '/dist/js/'),
        filename: production ? './prod/app.js' : './debug/app.js',
    },
    mode: production ? 'production' : 'development',
    optimization: {
        noEmitOnErrors: true,
        minimizer: [new TerserPlugin({terserOptions: {
            extractComments: 'all',
            compress: {
                drop_console: true
            },

        }}),],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: [
                /react-material-datetime-picker/, /src/,/client.jsx/,
            ],
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env',
                    '@babel/preset-react'],
            },
        },  {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
            include: /images/,
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]',
            },
        },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins,

    watch: true,//NODE_ENV === 'development',
    watchOptions: {

        aggregateTimeout: 1000,
    },
    devtool: !production ? 'source-map' : '',
};
