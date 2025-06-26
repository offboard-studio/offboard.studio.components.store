var path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    target: "node",
    devtool: 'inline-source-map',
    mode: 'development', // or 'development' if you are in dev mode
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.js', '.json']
    },
    stats: {
        warnings: false
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, 'tsconfig.json')  // Add this line to explicitly reference tsconfig.json
                },
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                // { from: 'src/index.html', to: 'index.html' }, // Adjust the source path as needed
                // { from: 'src/swagger.json', to: 'swagger.json' }, // Adjust the source path as needed
                { from: 'node_modules/swagger-ui-dist/swagger-ui.css', to: 'swagger-ui.css' },
                { from: 'node_modules/swagger-ui-dist/swagger-ui-bundle.js', to: 'swagger-ui-bundle.js' },
                { from: 'node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js', to: 'swagger-ui-standalone-preset.js' },
                { from: 'node_modules/swagger-ui-dist/favicon-16x16.png', to: 'favicon-16x16.png' },
                { from: 'node_modules/swagger-ui-dist/favicon-32x32.png', to: 'favicon-32x32.png' }
            ]
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'node_modules/swagger-ui-dist/swagger-ui.css',
                    to: 'docs/swagger-ui.css',
                },
                {
                    from: 'node_modules/swagger-ui-dist/swagger-ui-bundle.js',
                    to: 'docs/swagger-ui-bundle.js',
                },
                {
                    from: 'node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js',
                    to: 'docs/swagger-ui-standalone-preset.js',
                },
                {
                    from: 'node_modules/swagger-ui-dist/favicon-16x16.png',
                    to: 'docs/favicon-16x16.png',
                },
                {
                    from: 'node_modules/swagger-ui-dist/favicon-32x32.png',
                    to: 'docs/favicon-32x32.png',
                },
            ]
        })

    ]
}