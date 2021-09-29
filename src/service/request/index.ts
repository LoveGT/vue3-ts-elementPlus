import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { HYRequestInterceptor, HYRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const defaultLoading = true
// axios -> 是axios实例
class HYRequest {
	instance: AxiosInstance
	interceptors?: HYRequestInterceptor
	showLoading: boolean
	loading?: ILoadingInstance

	constructor(config: HYRequestConfig) {
		this.instance = axios.create(config)
		this.showLoading = config.showLoading ?? defaultLoading
		this.interceptors = config.interceptors

		// 从config中取出的拦截期是对应的实例的拦截器
		this.instance.interceptors.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorCatch
		)

		this.instance.interceptors.response.use(
			this.interceptors?.responseInterceptor,
			this.interceptors?.responseInterceptorCatch
		)

		//添加所有实例 都有的拦截器
		this.instance.interceptors.request.use(
			(config) => {
				if (this.showLoading) {
					this.loading = ElLoading.service({
						lock: true,
						text: '正在请求数据。。。',
						background: 'rgba(0,0,0,.5)'
					})
				}
				return config
			},
			(err) => {
				return err
			}
		)

		this.instance.interceptors.response.use(
			(res) => {
				this.loading?.close()
				const data = res.data
				if (data.retrunCode === '-1001') {
					console.log('请求失败~')
				} else {
					return data
				}
			},
			(err) => {
				this.loading?.close()
				if (err.response.status === 404) {
					console.log('404错误~')
				}
				return err
			}
		)
	}

	requst<T>(config: HYRequestConfig): Promise<T> {
		return new Promise((resolve, reject) => {
			// 1.单个请求的请求config的处理
			if (config.interceptors?.requestInterceptor) {
				config = config.interceptors.requestInterceptor(config)
			}

			//2.判断是否需要显示loading
			if (config.showLoading === false) {
				this.showLoading = config.showLoading
			}

			this.instance
				.request<any, T>(config)
				.then((res) => {
					// 1.单个请求对数据的处理
					if (config.interceptors?.responseInterceptor) {
						res = config.interceptors.responseInterceptor(res)
					}
					console.log(res)
					// 2.请求完成后将我们的showLoading设置为初始值，这样不会影响到别的请求
					this.showLoading = defaultLoading
					// 3.将结果resolve返回出去
					resolve(res)
				})
				.catch((err) => {
					//3. 请求完成后将我们的showLoading设置为初始值,这样不会影响到别的请求
					this.showLoading = defaultLoading
					reject(err)
					return err
				})
		})
	}
	get<T>(config: HYRequestConfig): Promise<T> {
		return this.requst<T>({ ...config, method: 'GET' })
	}
	post<T>(config: HYRequestConfig): Promise<T> {
		return this.requst<T>({ ...config, method: 'POST' })
	}
	delete<T>(config: HYRequestConfig): Promise<T> {
		return this.requst<T>({ ...config, method: 'DELETE' })
	}
	patch<T>(config: HYRequestConfig): Promise<T> {
		return this.requst<T>({ ...config, method: 'PATCH' })
	}
	put<T>(config: HYRequestConfig): Promise<T> {
		return this.requst<T>({ ...config, method: 'PUT' })
	}
}

export default HYRequest
