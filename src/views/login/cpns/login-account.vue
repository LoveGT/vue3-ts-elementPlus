<template>
	<div class="login-account">
		<el-form :model="account" :rules="rules" ref="formRef" label-width="70px">
			<el-form-item label="用户名" prop="name">
				<el-input v-model="account.name" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input
					v-model="account.password"
					placeholder="请输入密码"
					show-password
				>
				</el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { ElForm } from 'element-plus'

import localCache from '@/utils/cache'

import { rules } from '../config/account-config'
export default defineComponent({
	setup() {
		const store = useStore()

		const account = reactive({
			name: localCache.getCache('name') ?? '',
			password: localCache.getCache('password') ?? ''
		})
		const formRef = ref<InstanceType<typeof ElForm>>()

		const loginAction = (isKeepPassword: boolean) => {
			formRef.value?.validate((valid) => {
				if (valid) {
					console.log('account开始登录')
					// 1.判断是否需要记住密码
					if (isKeepPassword) {
						// 1.1 本地缓存
						localCache.setCache('name', account.name)
						localCache.setCache('password', account.password)
					} else {
						localCache.deleteCache('name')
						localCache.deleteCache('password')
					}

					// 2.进行登录验证
					store.dispatch('login/accountLoginAction', { ...account })
				}
			})
		}
		// 编写好规则
		return {
			account,
			rules,
			formRef,
			loginAction
		}
	}
})
</script>

<style scoped></style>
