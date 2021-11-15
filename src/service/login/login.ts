import hyRequest from '../index'

import { IAccount, ILoginResult } from './types'
import { IDataType } from '../types'

enum LoginAPI {
	AccountLogin = '/login',
	LoginUserInfo = '/users/',
	UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
	return hyRequest.post<IDataType<ILoginResult>>({
		url: LoginAPI.AccountLogin,
		data: account
	})
}

export function requestUserInfoById(id: number) {
	return hyRequest.get<IDataType>({
		url: LoginAPI.LoginUserInfo + id,
		showLoading: false
	})
}
export function requestUserMenuByRoleId(id: number) {
	return hyRequest.get<IDataType>({
		url: LoginAPI.UserMenus + id + '/menu',
		showLoading: false
	})
}
