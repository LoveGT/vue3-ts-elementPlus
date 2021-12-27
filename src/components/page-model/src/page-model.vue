<template>
	<div class="page-model">
		<el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
			<hy-form v-model="formData" v-bind="modelConfig"></hy-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">Cancel</el-button>
					<el-button type="primary" @click="dialogVisible = false"
						>Confirm</el-button
					>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
	props: {
		modelConfig: {
			type: Object,
			required: true
		}
	},
	components: {
		HyForm
	},
	setup() {
		const dialogVisible = ref(true)
		const formData = {}

		return {
			dialogVisible,
			formData
		}
	}
})
</script>

<style lang="less" scoped></style>
