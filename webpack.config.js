const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
	const {mode} = argv;
	return {
		entry: path.resolve(__dirname, "src/index.ts"),
		target: "web",
		mode,
		module: {
			rules: [
				{
					test: /^.+\.([tj])s$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								"@babel/preset-typescript",
								["@babel/preset-env", {
									targets: {
										browsers: ["last 2 versions"],
									}
								}],
							]
						}
					}
				}
			]
		},
		resolve: {
			extensions: [".ts", ".js"]
		},
		output: {
			filename: "index.js",
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new CleanWebpackPlugin()
		]
	};
};