import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
	state: () => {
		return {
			name: 'gaotao',
			age: 18
		}
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		login,
		system
	}
})
// console.log(useVuexStore, 'store')

export function setupStroe() {
	store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
	return useVuexStore()
}
export default store
