const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: "source-map",
	mode: "development",
	output: {
		path: path.join(__dirname, "/dist"), // the bundle output path
		filename: "bundle.js", // the name of the bundle
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html", // to import index.html file inside index.js
		}),
	],
	devServer: {
		port: 3030, // you can change the port
		historyApiFallback: true,
	},
	optimization: {
		minimize: false,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, // .js and .jsx files
				exclude: /node_modules/, // excluding the node_modules folder
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(sa|sc|c)ss$/, // styles files
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader", options: { url: false } },
					{ loader: "sass-loader" },
				],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
				loader: "file-loader",
				options: { limit: false },
			},
		],
	},
	resolve: {
		alias: {
			react: path.resolve("./node_modules/react"),
		},
		fallback: {
			url: false,
			fs: false,
			http: false,
			crypto: false,
		},
	},
	experiments: {
		topLevelAwait: true,
	},
};
