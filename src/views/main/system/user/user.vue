<template>
	<div class="user">
		<hy-form></hy-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HyForm, { IFormItem } from '@/base-ui/form'
import { rules } from '@/views/login/config/account-config'

export default defineComponent({
	name: 'user',
	components: { HyForm },
	setup() {
		const formItems: IFormItem[] = [
			{
				label: '姓名',
				rules: [],
				placeholder: '请输入姓名'
			},
			{
				label: '密码',
				rules: [],
				placeholder: '请输入密码'
			},
			{
				label: '喜欢的运动',
				rules: [],
				placeholder: '请选择喜欢的运动'
			},
			{
				label: '创建时间',
				rules: [],
				placeholder: '请选择创建时间范围'
			}
		]
		return {
			formItems
		}
	}
})
</script>

<style scoped></style>
