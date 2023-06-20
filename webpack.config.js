const path = require("path");
var BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	devtool: "source-map",
	mode: "development",
	entry: ["./src"],
	performance: {
		// hints: false,
		maxEntrypointSize: 5120000,
		maxAssetSize: 5120000,
	},
	// entry: ["./src", "./public/unbxdStyle.css"],
	output: {
		path: path.join(__dirname, "/public/dist"), // the bundle output path
		filename: "bundle.js", // the name of the bundle
		publicPath: "/",
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: `[name].css` }),
		new BundleAnalyzerPlugin({
			analyzerMode: "server",
			generateStatsFile: true,
			statsOptions: { source: false },
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
		minimizer: [new TerserPlugin({})],
		usedExports: true,
		minimize: true,
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
		fallback: {
			url: require.resolve("url/"),
			fs: false,
			http: false,
			crypto: false,
		},
	},
	experiments: {
		topLevelAwait: true,
	},
};
