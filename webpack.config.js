var BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    argv = require('yargs').argv;

var example = {
    path: 'examples/ex',
    ex: '1' /* default exercise */
};

if(argv.ex)
{
    example.ex = argv.ex;
}

module.exports = {
    entry: './examples/ex' + example.ex + '/main.ts',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: [ example.path + example.ex ] }
        })
    ]
};