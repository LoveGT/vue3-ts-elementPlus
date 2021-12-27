import { useStore } from '@/store'
export function usePermission(pageName: string, handleName: string) {
	const store = useStore()
	const permissions = store.state.login.permissions
	const verifyPermission = `system:${pageName}:${handleName}`
	console.log(verifyPermission, 'ver')
	return !!permissions.find((item) => item === verifyPermission) //等价于
	// return Boolean(permissions.find((item) => item === verifyPermission))
}
