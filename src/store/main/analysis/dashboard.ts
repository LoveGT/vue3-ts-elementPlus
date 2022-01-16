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
		},
		changeCategoryGoodsSale(state, list) {
			state.categoryGoodsSale = list
		},
		changeCategoryGoodsFavor(state, list) {
			state.categoryGoodsFavor = list
		},
		changeAddressGoodsSale(state, list) {
			state.addressGoodsSale = list
		}
	},
	actions: {
		async getDashboardAction({ commit }) {
			const categoryCountResult = await getCategoryGoodsCount()
			commit('changeCategoryGoodsCount', (categoryCountResult as any).data)

			const categoryGoodsSaleResult = await getCategoryGoodsSale()
			commit('changeCategoryGoodsSale', (categoryGoodsSaleResult as any).data)

			const categoryGoodsFavorResult = await getCategoryGoodsFavor()
			commit('changeCategoryGoodsFavor', (categoryGoodsFavorResult as any).data)

			const addressGoodsSaleResult = await getAddressGoodsSale()
			commit('changeAddressGoodsSale', (addressGoodsSaleResult as any).data)
		}
	}
}

export default dashboardModule
