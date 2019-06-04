const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: '../front/js/main.js',
    output: {
        filename: '../scripts.min.js',
        path: path.resolve(__dirname, './')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    "presets": [
                        ["@babel/preset-env", {
                            "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                            }
                        }]
                    ]
                },
            }
        ]
    },
    resolve: {
        modules: ['../../.tools/node_modules']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery"
        })
    ]
};