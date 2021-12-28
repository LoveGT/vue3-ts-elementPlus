import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import { ElMessage, ElMessageBox } from 'element-plus'

import {
	deletePageData,
	getPageListData,
	createPageData,
	editPageData
} from '@/service/main/system/system'

const systemMoudle: Module<ISystemState, IRootState> = {
	namespaced: true,
	state() {
		return {
			usersList: [],
			usersCount: 0,
			roleList: [],
			roleCount: 0,
			goodsList: [],
			goodsCount: 0,
			menuList: [],
			menuCount: 0
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
		},
		changeGoodsList(state, goodsList: any[]) {
			state.goodsList = goodsList
		},
		changeGoodsCount(state, goodsCount: number) {
			state.goodsCount = goodsCount
		},
		changeMenuList(state, menuList: any[]) {
			state.menuList = menuList
		},
		changeMenuCount(state, menuCount: number) {
			state.menuCount = menuCount
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
			ElMessage({
				message: '查询成功',
				type: 'success',
				center: true
			})
		},
		async deletePageDataAction({ dispatch }, payload: any) {
			// pageName
			// id
			const { pageName, id } = payload
			const pageUrl = `/${pageName}/${id}/`

			ElMessageBox.confirm('是否删除数据？', '警告', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
				center: true
			})
				.then(async () => {
					// 调用删除网络请求
					await deletePageData(pageUrl)
					//获取删除后的最新数据
					dispatch('getPageListAction', {
						pageName,
						queryInfo: {
							offset: 0,
							size: 10
						}
					})
				})
				.catch(() => {
					ElMessage.info('取消删除')
				})
		},
		//新增数据
		async createPageDataAction({ dispatch }, payload: any) {
			const { pageName, newData } = payload
			const pageUrl = `/${pageName}`

			await createPageData(pageUrl, newData)

			// 2.请求最新的数据
			dispatch('getPageListAction', {
				pageName,
				queryInfo: {
					offset: 0,
					size: 10
				}
			})
			ElMessage.success('新增数据成功')
		},
		// 更新数据
		async editPageDataAction({ dispatch }, payload: any) {
			const { pageName, editData, id } = payload
			const pageUrl = `/${pageName}/${id}`
			await editPageData(pageUrl, editData)

			// 2.请求最新的数据
			dispatch('getPageListAction', {
				pageName,
				queryInfo: {
					offset: 0,
					size: 10
				}
			})

			ElMessage.success('更新数据成功')
		}
	}
}

export default systemMoudle
