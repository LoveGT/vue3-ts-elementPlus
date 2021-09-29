const path = require('path')
module.exports = {
	//1、 配置方式一：cli提供的属性
	outputDir: './build',
	publicPath: './',
	//2、 配置方式二：和webpack属性完全一致，最后会进行合并
	// configureWebpack: {
	// 	resolve: {
	// 		alias: {
	// 			components: '@/components'
	// 		}
	// 	}
	// }
	// 3、 配置方式三：和webpack属性完全一致，最后会进行合并
	// configureWebpack: (config) => {
	// 	config.resolve.alias = {
	// 		'@': path.resolve(__dirname, 'src'),
	// 		components: '@/components'
	// 	}
	// }
	// 4、 配置方式四：
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', path.resolve(__dirname, 'src'))
			.set('components', '@components')
	}
}
