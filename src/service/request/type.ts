import type { AxiosRequestConfig } from 'axios'
export interface HYRequestInterceptor {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
	requestInterceptorCatch?: (error: any) => any
	responseInterceptor?: (res: any) => any
	responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
	interceptors?: HYRequestInterceptor
	showLoading?: boolean
}
