import { Module } from 'vuex'

import {
	getCategoryGoodsCount,
	getCategoryGoodsFavor,
	getCategoryGoodsSale,
	getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

import { IDashboard } from './types'
import { IRootState } from '../../types'

const dashboardModule: Module<IDashboard, IRootState> = {
	namespaced: true,
	state() {
		return {
			categoryGoodsCount: [],
			categoryGoodsSale: [],
			categoryGoodsFavor: [],
			addressGoodsSale: []
		}
	},
	mutations: {
		changeCategoryGoodsCount(state, list) {
			state.categoryGoodsCount = list
		}
	},
	actions: {
		async getDashboardAction({ commit }) {
			const categoryCountResult = await getCategoryGoodsCount()
			console.log(categoryCountResult, 'categoryCountResult')
			commit('changeCategoryGoodsCount', categoryCountResult.data)
		}
	}
}

export default dashboardModule
