const path = require("path");

module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "node",
    devServer: {
        port: "9500",
        contentBase: ["./public"],
        open: true
    },
    resolve: {
        extensions: [".js",".jsx",".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}