// service统一出口
import HYRequest from './request'
import localCache from '@/utils/cache'

const TIME_OUT = parseInt(process.env.VUE_APP_TIME_OUT as string)

const hyRequest = new HYRequest({
	baseURL: process.env.VUE_APP_BASE_URL,
	timeout: TIME_OUT,
	interceptors: {
		requestInterceptor: (config) => {
			// 携带token的拦截
			const token = localCache.getCache('token')
			if (token) {
				config.headers.Authorization = `Bearer ${token}`
			}
			return config
		},
		requestInterceptorCatch: (err) => {
			return err
		},
		responseInterceptor: (res) => {
			return res
		},
		responseInterceptorCatch: (err) => {
			return err
		}
	}
})

export default hyRequest
