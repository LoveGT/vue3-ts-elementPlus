import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'

const systemMoudle: Module<ISystemState, IRootState> = {
	namespaced: true,
	state() {
		return {
			usersList: [],
			usersCount: 0,
			roleList: [],
			roleCount: 0
		}
	},
	mutations: {
		changeUsersList(state, userList: any[]) {
			state.usersList = userList
		},
		changeUsersCount(state, userCount: number) {
			state.usersCount = userCount
		},
		changeRoleList(state, roleList: any[]) {
			state.roleList = roleList
		},
		changeRoleCount(state, roleCount: number) {
			state.roleCount = roleCount
		}
	},
	getters: {
		pageListData(state) {
			return (pageName: string) => {
				return (state as any)[`${pageName}List`]
				// switch (pageName) {
				//   case 'users':
				//     return state.usersList
				//   case 'role':
				//     return state.roleList
				// }
			}
		},
		getListCount(state) {
			return (pageName: string) => {
				return (state as any)[`${pageName}Count`]
			}
		}
	},
	actions: {
		async getPageListAction({ commit }, payload: any) {
			const pageName = payload.pageName
			// 接口不规范的写法
			// let pageUrl = ''
			// switch (pageName) {
			// 	case 'users':
			// 		pageUrl = '/users/list'
			// 		break
			// 	case 'role':
			// 		pageUrl = '/role/list'
			// 		break
			// 	default:
			// 		break
			// }

			// 动态拼接
			const pageUrl = `/${pageName}/list`

			// 1.发送页面的请求
			const pageResult = await getPageListData(pageUrl, payload.queryInfo)
			// 2.将数据存储到state中
			const { list, totalCount } = pageResult.data
			// for (let i = 0; i < 100; i++) {
			// 	list.push({ name: 'gt' + i, id: i })
			// }
			const formatPageName =
				pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
			commit(`change${formatPageName}List`, list)
			commit(`change${formatPageName}Count`, totalCount)
		}
	}
}

export default systemMoudle
