module.exports = function (api) {
	api.cache.forever()
	const presets = [
		'@babel/preset-typescript',
		'@babel/preset-react',
		[
			'@babel/preset-env',
			{
				targets: {
					chrome: 100,
				},
			},
		],
	]

	const plugins = ['@babel/plugin-transform-runtime']

	return { presets, plugins }
}
