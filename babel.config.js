module.exports = {
	plugins: [
		[
			'import',
			{
				libraryName: 'element-plus',
				customStyleName: (name) => {
					// name.slice(3)
					return `element-plus/lib/theme-chalk/${name}.css`
				}
			}
		]
	],
	presets: ['@vue/cli-plugin-babel/preset']
}
