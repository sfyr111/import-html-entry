const path = require('path');

module.exports = {
	// mode: 'development',
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'import-html-entry.js',
		path: path.resolve(__dirname, 'dist'),
		library:"importHTML",// 在全局变量中增加一个library变量
		libraryTarget:"umd"
	},
	module: {
		rules: [
			{
				test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
			}
		]
	}
};
