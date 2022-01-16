import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboard } from './main/analysis/types'

export interface IRootState {
	name: string
	age: number
	entireDepartment: any[]
	entireRole: any[]
	entireMenu: any[]
}

export interface IRootWithModule {
	login: ILoginState
	system: ISystemState
	dashboard: IDashboard
}

export type IStoreType = IRootState & IRootWithModule
