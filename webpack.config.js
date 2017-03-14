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
		filename: "./public/[name].js"
	},
	resolve  : {
		extensions: ["", ".js", ".ts", ".css"]
	},
	module   : {
		loaders: [
			{
				test  : /\.ts/,
				loader: "ts"
			},
			{
				test   : /\.css$/,
				exclude: /node_modules/,
				loader : "to-string-loader!css"
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		compress          : false,
		quiet             : false,
		noInfo            : false,
		headers           : {"X-Custom-Header": "yes"},
		stats             : {colors: true},
		port              : 5000,
		inline            : true,
		watch             : true,
		open              : true
	}
};