const path = require("path");
var BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: false,
	mode: "production",
	entry: ["./src"],
	watch: false,
	performance: {
		maxEntrypointSize: 5120000,
		maxAssetSize: 5120000,
	},
	output: {
		path: path.join(__dirname, "/public/dist"), // the bundle output path
		filename: "bundle.js", // the name of the bundle
		publicPath: "/",
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: `[name].css` }),
		// new BundleAnalyzerPlugin({
		// 	analyzerMode: "server",
		// 	generateStatsFile: true,
		// 	statsOptions: { source: false },
		// }),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve("./public/manifest.json"),
					to: path.resolve("./public/dist"),
				},
				{
					from: path.resolve("./public/netcore-unbxd-logo.png"),
					to: path.resolve("./public/dist"),
				},
			],
		}),
		new HtmlWebpackPlugin({
			template: "public/index.html", // to import index.html file inside index.js
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
				test: /\.scss$|\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								includePaths: ["public/css"],
							},
						},
					},
				],
			},
			{
				test: /\.(html)$/,
				use: {
					loader: "html-loader",
				},
			},
			// {
			// 	test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
			// 	loader: "url-loader",
			// 	options: { limit: false },
			// },
		],
	},
	resolve: {
		alias: {
			react: path.resolve("./node_modules/react"),
		},
		// fallback: {
		// 	url: require.resolve("url/"),
		// 	fs: false,
		// 	http: false,
		// 	crypto: false,
		// },
	},
	experiments: {
		topLevelAwait: true,
	},
};
