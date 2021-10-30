<template>
	<div class="login-account">
		<el-form :model="phone" :rules="rules" ref="formRef" label-width="70px">
			<el-form-item label="手机号" prop="number">
				<el-input v-model="phone.number" placeholder="请输入手机号"></el-input>
			</el-form-item>
			<el-form-item label="验证码" prop="varify">
				<div class="get-code">
					<el-input
						v-model="phone.varify"
						placeholder="请输入验证码"
						show-password
					>
					</el-input>
					<el-button size="mini" type="success">获取验证码</el-button>
				</div>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
	setup() {
		const store = useStore()
		const phone = reactive({
			number: '',
			varify: ''
		})
		const loginAction = (isKeepPassword: boolean) => {
			console.log('phone登录正在开始')
			console.log(isKeepPassword, 'keepPaword')
			store.dispatch('login/phoneLoginAction', { ...phone })
		}

		return {
			phone,
			loginAction
		}
	}
})
</script>

<style scoped lang="less">
.get-code {
	display: flex;
	.el-button {
		margin-left: 5px;
	}
}
</style>
