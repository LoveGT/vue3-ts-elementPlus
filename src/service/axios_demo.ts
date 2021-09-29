import axios, { AxiosResponse } from 'axios'

axios
	.request({
		method: 'get',
		url: 'http://123.207.32.32:8000/home/multidata'
	})
	.then((res: AxiosResponse<any>) => {
		console.log(res, 'res')
	})
// axios全局配置项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
axios.defaults.headers = { name: 'gaoto', height: '188' }

axios
	.get('/get', {
		params: {
			name: 'gaotao',
			age: 18
		}
	})
	.then((res) => {
		console.log(res.data, ' get')
	})

axios
	.post('/post', {
		data: {
			name: 'gaotao',
			age: 18
		}
	})
	.then((res) => {
		console.log(res.data, ' post')
	})

// axios.all -> 多个请求一起返回
axios
	.all([
		axios.get('/get', { params: { name: 'gaotao', age: 28 } }),
		axios.post('/post', { data: { name: 'xiaohong', age: 24 } })
	])
	.then((res) => {
		console.log(res[0].data)
		console.log(res[1].data)
	})

// axios的拦截器
/**
 * params: fn1:请求发送成功会执行的函数,fn2：请求发送失败回执行的函数（很少用到）
 *
 */
axios.interceptors.request.use(
	(congfig) => {
		return congfig
	},
	(err) => {
		console.log('请求发送错误')
		return err
	}
)

axios.interceptors.response.use(
	(res) => {
		console.log('响应成功的拦截')
		return res
	},
	(err) => {
		console.log('响应失败的拦截')
		return err
	}
)
