<template>
	<div class="login-panel">
		<h2 class="title">后台管理系统</h2>

		<el-tabs type="border-card" stretch v-model="currentTab">
			<el-tab-pane name="account">
				<template #label>
					<span><i class="el-icon-user-solid"></i> 账号登录</span>
				</template>
				<!-- <h2>账号登录1</h2> -->
				<login-account ref="accountRef" />
			</el-tab-pane>
			<el-tab-pane name="phone">
				<template #label>
					<span><i class="el-icon-mobile-phone"></i> 手机登录</span>
				</template>
				<!-- <h2>手机登录1</h2> -->
				<login-phone ref="phoneRef" />
			</el-tab-pane>
		</el-tabs>
		<div class="account-contrl">
			<el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
			<el-link type="primary">忘记密码</el-link>
		</div>
		<el-button @click="handleLoginClick" class="login-btn" type="primary"
			>立即登录</el-button
		>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
	setup() {
		const isKeepPassword = ref(false)
		const accountRef = ref<InstanceType<typeof LoginAccount>>()
		const phoneRef = ref<InstanceType<typeof LoginPhone>>()
		const currentTab = ref<string>('account')

		const handleLoginClick = () => {
			if (currentTab.value === 'account') {
				accountRef.value?.loginAction(isKeepPassword.value)
			} else {
				phoneRef.value?.loginAction(isKeepPassword.value)
			}
		}
		return {
			isKeepPassword,
			accountRef,
			phoneRef,
			currentTab,
			handleLoginClick
		}
	},
	components: {
		LoginAccount,
		LoginPhone
	}
})
</script>

<style scoped lang="less">
.login-panel {
	margin-bottom: 150px;
	width: 320px;
	.title {
		text-align: center;
	}
	.account-contrl {
		margin-top: 5px;
		display: flex;
		justify-content: space-between;
	}
	.login-btn {
		width: 100%;
		margin-top: 5px;
	}
}
</style>
