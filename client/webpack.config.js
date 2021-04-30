const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (env) => {
	return {
		mode: env,
		// devtool: "source-map",
		entry: "./src/index.tsx",
		resolve: { extensions: [".js", ".jsx", ".tsx", ".ts"] },
		module: {
			rules: [
				{ exclude: /node_modules/, test: /\.(js|jsx|ts|tsx)$/, loader: "babel-loader" },
				{ exclude: /node_modules/, test: /\.css$/i, use: ["style-loader", "css-loader", "postcss-loader"] }
			]
		},
		output: { filename: "bundle.js", path: path.join(__dirname, "..", "build") },
		devServer: {
			hot: true,
			port: 8080,
			contentBase: path.join(__dirname, "..", "build")
		},
		plugins: [new HtmlWebPackPlugin({ template: "./public/index.html" }), new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]
	};
};
