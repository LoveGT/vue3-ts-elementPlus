<template>
	<div class="page-search">
		<hy-form v-bind="searchFormConfig" v-model="formData">
			<template #header>
				<h1 class="header">高级检索</h1>
			</template>
			<template #footer>
				<div class="handle-btns">
					<el-button
						size="small"
						type="success"
						icon="el-icon-search"
						@click="handleQuery"
						>搜索</el-button
					>
					<el-button
						size="small"
						type="warning"
						icon="el-icon-refresh"
						@click="handleReset"
						>重置</el-button
					>
				</div>
			</template>
		</hy-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
	props: {
		searchFormConfig: {
			type: Object,
			required: true
		}
	},
	components: { HyForm },
	emits: ['resetBtnClick', 'queryBtnClick'],
	setup(props, { emit }) {
		//双向绑定的属性应该是有配置文件的Field字段来决定的
		const formItems = props.searchFormConfig?.formItems ?? []
		const formOriginData: any = {}
		for (const item of formItems) {
			formOriginData[item.field] = ''
		}
		const formData = ref(formOriginData)

		// 实现重置功能 （v-model方式）
		// const handleReset = () => {
		// 	for (const key in formOriginData) {
		// 		formData.value[`${key}`] = formOriginData[key]
		// 	}
		// }
		// 实现重置功能 （不使用语法糖方式）
		const handleReset = () => {
			formData.value = formOriginData
			emit('resetBtnClick')
		}
		// 实现搜索功能
		const handleQuery = () => {
			emit('queryBtnClick', formData.value)
		}
		return {
			formData,
			handleReset,
			handleQuery
		}
	}
})
</script>

<style>
.header {
	text-align: left;
	padding: 0 0px 0px 20px;
}
.handle-btns {
	text-align: right;
	padding: 0 20px 20px 0;
}
</style>
