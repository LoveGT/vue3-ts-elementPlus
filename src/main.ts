import { createApp } from 'vue'

import { globalRegister } from './global'
// import './service/axios_demo'

import 'normalize.css'
import './assets/css/index.less'

// import hyRequest from './service'
// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'

import router from './router'
import store from './store'

import { setupStroe } from './store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)

app.use(router)
app.use(store)

setupStroe()
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(typeof process.env.VUE_APP_TIME_OUT)

// hyRequest.requst({
// 	url: '/home/multidata',
// 	method: 'GET',
// 	interceptors: {
// 		requestInterceptor: (config) => {
// 			console.log('单独请求的congfig')
// 			return config
// 		},
// 		responseInterceptor: (res) => {
// 			console.log('单独响应的response')
// 			return res
// 		}
// 	}
// // })
// interface DataType {
// 	data: any
// 	returnCode: string
// 	success: boolean
// }

// hyRequest
// 	.get<DataType>({
// 		url: '/home/multidata',
// 		showLoading: false
// 	})
// 	.then((res) => {
// 		console.log(res.data)
// 		console.log(res.success)
// 		console.log(res.returnCode)
// 	})
