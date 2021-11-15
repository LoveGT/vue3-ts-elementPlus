import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'

const systemMoudle: Module<ISystemState, IRootState> = {
	namespaced: true,
	state() {
		return {
			userList: [],
			userCount: 0
		}
	},
	mutations: {
		changeUserList(state, userList: any[]) {
			state.userList = userList
		},
		changeUserCount(state, userCount: number) {
			state.userCount = userCount
		}
	},
	actions: {
		async getPageListAction({ commit }, payload: any) {
			// 1.发送页面的请求
			const pageResult = await getPageListData(
				payload.pageUrl,
				payload.queryInfo
			)
			const { list, totalCount } = pageResult.data
			commit('changeUserList', list)
			commit('changeUserCount', totalCount)
		}
	}
}

export default systemMoudle
