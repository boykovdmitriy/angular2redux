/**
 * Created by Boikov on 3/13/2017.
 */
var webpack = require("webpack"),
    path    = require("path");

module.exports = {
	devtool  : "source-map",
	entry    : {
		"app": "./client/boot.ts"
	},
	output   : {
		filename: "[name].js",
		path    : path.resolve(__dirname, './public')
	},
	resolve  : {
		extensions: [".js", ".ts", ".css"]
	},
	module   : {
		loaders: [
			{
				test  : /\.ts/,
				loader: "ts-loader"
			},
			{
				test   : /\.css$/,
				exclude: /node_modules/,
				loader : "to-string-loader!css-loader"
			}
		]
	},
	devServer: {
		contentBase       : path.join(__dirname, "public"),
		historyApiFallback: true,
		compress          : false,
		quiet             : false,
		headers           : {"X-Custom-Header": "yes"},
		stats             : {colors: true},
		port              : 5000,
		inline            : true,
		lazy              : true
	}
};