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

// 统一导入el-icon图标
import { Edit } from '@element-plus/icons'
app.component(Edit.name, Edit)

setupStroe()

app.use(router)
app.use(store)

app.mount('#app')
