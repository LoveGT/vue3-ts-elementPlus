<template>
	<div class="page-search">
		<hy-form v-bind="searchFormConfig" v-model="formData">
			<template #header>
				<h1 class="header">高级检索</h1>
			</template>
			<template #footer>
				<div class="handle-btns">
					<el-button size="small" type="success" icon="el-icon-search"
						>搜索</el-button
					>
					<el-button size="small" type="warning" icon="el-icon-refresh"
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
	setup() {
		const formData = ref({
			id: '',
			name: '',
			password: '',
			sport: '',
			createTime: ''
		})
		return {
			formData
		}
	}
})
</script>

<style></style>
