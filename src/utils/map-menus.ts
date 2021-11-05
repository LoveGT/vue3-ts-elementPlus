import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
	const routes: RouteRecordRaw[] = []

	//1. 先去加载默认所有的routes
	const allRoutes: RouteRecordRaw[] = []
	const routerFiles = require.context('../router/main', true, /\.ts/)
	// console.log(routerFiles, 'routerFiles')
	routerFiles.keys().forEach((key) => {
		// console.log(key, 'key')
		// key  => ./system/user/user.ts key
		const route = require('../router/main' + key.split('.')[1])
		allRoutes.push(route.default)
	})
	// console.log(allRoutes, 'all')

	//2. 根据菜单获取需要添加的routes
	// userMenus:
	// type === 1 -> children -> type === 1
	// type === 2 -> url -> route

	// 定义内部函数并递归调用
	const _recurseGetRoute = (menus: any[]) => {
		for (const menu of menus) {
			if (menu.type === 2) {
				const route = allRoutes.find((route) => route.path === menu.url)
				if (route) routes.push(route)
			} else {
				_recurseGetRoute(menu.children)
			}
		}
	}

	_recurseGetRoute(userMenus)
	console.log(routes, 'mapmpa')
	return routes
}
