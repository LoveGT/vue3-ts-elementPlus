import { Module } from 'vuex'
import router from '@/router'

import {
	accountLoginRequest,
	requestUserInfoById,
	requestUserMenuByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

import { IAccount } from '@/service/login/types'
import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
	namespaced: true,
	state() {
		return {
			token: '',
			userInfo: '',
			userMenus: [],
			permissions: []
		}
	},
	getters: {},
	mutations: {
		changeToken(state, token: string) {
			state.token = token
		},
		changeUserInfo(state, userInfo) {
			state.userInfo = userInfo
		},
		changeUserMenus(state, userMenus) {
			state.userMenus = userMenus

			// userMenus => routes
			const routes = mapMenusToRoutes(userMenus)

			// 将routes => router.man.children
			routes.forEach((route) => router.addRoute('main', route))

			// 获取用户菜单的权限
			const permissions = mapMenusToPermissions(userMenus)
			state.permissions = permissions
		}
	},
	actions: {
		async accountLoginAction({ commit }, payload: IAccount) {
			//1.实现登录逻辑
			const loginResult = await accountLoginRequest(payload)
			// console.log(loginResult, 'loginresult')
			const { id, token } = loginResult.data
			commit('changeToken', token)
			localCache.setCache('token', token)

			// 2. 请求用户信息
			const userInfoResult = await requestUserInfoById(id)
			const userInfo = userInfoResult.data
			commit('changeUserInfo', userInfo)
			localCache.setCache('userInfo', userInfo)
			console.log(userInfo, 'userInfo-store')

			//3.请求用户菜单
			const userMenusResult = await requestUserMenuByRoleId(userInfo.role.id)
			console.log(userMenusResult, 'result-stroe')
			const userMenus = userMenusResult.data
			console.log(userMenus, 'userMenus-store')
			commit('changeUserMenus', userMenus)
			localCache.setCache('userMenus', userMenus)

			//4. 跳到首页
			router.push('/main')
		},
		// 解决刷新vuex的数据消失问题、
		loadLocalLogin({ commit }) {
			const token = localCache.getCache('token')
			if (token) {
				commit('changeToken', token)
			}
			const userInfo = localCache.getCache('userInfo')
			if (userInfo) {
				commit('changeUserInfo', userInfo)
			}
			const userMenus = localCache.getCache('userMenus')
			if (userMenus) {
				commit('changeUserMenus', userMenus)
			}
		},
		phoneLoginAction({ commit }, payload: any) {
			console.log('执行phoneLoginAction', payload)
		}
	}
}
export default loginModule
