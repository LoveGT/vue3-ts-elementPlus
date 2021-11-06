<template>
	<div class="user">
		<div class="search">
			<hy-form
				:formItems="formItems"
				:labelWidth="labelWidth"
				:itemStyle="itemStyle"
			></hy-form>
		</div>
		<div class="content"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
	name: 'user',
	components: { HyForm },
	setup() {
		const formItems: IFormItem[] = [
			{
				type: 'input',
				label: 'id',
				rules: [],
				placeholder: '请输入编号'
			},
			{
				type: 'input',
				label: '姓名',
				rules: [],
				placeholder: '请输入姓名'
			},
			{
				type: 'password',
				label: '密码',
				rules: [],
				placeholder: '请输入密码'
			},
			{
				type: 'select',
				label: '喜欢的运动',
				rules: [],
				placeholder: '请选择喜欢的运动',
				options: [
					{ title: '篮球', value: 'basketball' },
					{ title: '足球', value: 'football' }
				]
			},
			{
				type: 'datepicker',
				label: '创建时间',
				rules: [],
				otherOptions: {
					startPlaceholder: '开始时间',
					endPlaceholder: '结束时间',
					type: 'daterange'
				}
			}
		]

		const labelWidth = '120px'
		const itemStyle = { padding: '5px 20px' }
		return {
			formItems,
			labelWidth,
			itemStyle
		}
	}
})
</script>

<style scoped></style>
