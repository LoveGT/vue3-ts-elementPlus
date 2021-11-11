import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

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
				if (!firstMenu) {
					firstMenu = menu
				}
			} else {
				_recurseGetRoute(menu.children)
			}
		}
	}

	_recurseGetRoute(userMenus)
	return routes
}
// export function pathMapToBreadcrumbs(userMenus: any[], currentPath: string) {
// 	const breadcrumbs: IBreadcrumb[] = []
// 	for (const menu of userMenus) {
// 		if (menu.type === 1) {
// 			const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
// 			if (findMenu) {
// 				breadcrumbs.push({ name: menu.name, path: menu.url })
// 				breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
// 				return findMenu
// 			}
// 		} else if (menu.type === 2 && menu.url === currentPath) {
// 			return menu
// 		}
// 	}
// }

// export function pathMapToMenu(userMenus: any[], currentPath: string): any {
// 	for (const menu of userMenus) {
// 		if (menu.type === 1) {
// 			const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
// 			if (findMenu) {
// 				console.log(findMenu, 'findMenu')
// 				return findMenu
// 			}
// 		} else if (menu.type === 2 && menu.url === currentPath) {
// 			return menu
// 		}
// 	}
// }
// 面包削获取
export function pathMapToBreadcrumbs(userMenus: any[], currentPath: string) {
	const breadcrumbs: IBreadcrumb[] = []
	pathMapToMenu(userMenus, currentPath, breadcrumbs)
	return breadcrumbs
}

// 菜单数据获取
export function pathMapToMenu(
	userMenus: any[],
	currentPath: string,
	breadcrumbs?: IBreadcrumb[]
): any {
	for (const menu of userMenus) {
		if (menu.type === 1) {
			const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
			if (findMenu) {
				breadcrumbs?.push({ name: menu.name })
				breadcrumbs?.push({ name: findMenu.name })
				return findMenu
			}
		} else if (menu.type === 2 && menu.url === currentPath) {
			return menu
		}
	}
}

export { firstMenu }
