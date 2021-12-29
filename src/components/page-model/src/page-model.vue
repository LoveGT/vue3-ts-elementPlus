<template>
	<div class="page-model">
		<el-dialog
			v-model="dialogVisible"
			:title="title"
			width="30%"
			destroy-on-close
			center
		>
			<hy-form v-model="formData" v-bind="modelConfig"></hy-form>
			<slot></slot>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary" @click="handleConfirm">确认</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import HyForm from '@/base-ui/form'
import { useStore } from '@/store'

export default defineComponent({
	props: {
		modelConfig: {
			type: Object,
			required: true
		},
		defaultInfo: {
			type: Object,
			default: () => ({})
		},
		otherInfo: {
			type: Object,
			default: () => ({})
		},
		title: {
			type: String,
			default: '默认标题'
		},
		pageName: {
			type: String,
			require: true
		}
	},
	components: {
		HyForm
	},
	setup(props) {
		const dialogVisible = ref(false)
		const formData = ref({})

		watch(
			() => props.defaultInfo,
			(newVal) => {
				for (const item of props.modelConfig.formItems) {
					formData.value[`${item.field}`] = newVal[`${item.field}`]
				}
			}
		)
		const store = useStore()
		const handleConfirm = () => {
			dialogVisible.value = false
			// 编辑
			if (Object.keys(props.defaultInfo).length) {
				store.dispatch('system/editPageDataAction', {
					pageName: props.pageName,
					editData: { ...formData.value, ...props.otherInfo },
					id: props.defaultInfo.id
				})
			} else {
				//新增
				store.dispatch('system/createPageDataAction', {
					pageName: props.pageName,
					newData: { ...formData.value, ...props.otherInfo }
				})
				console.log('xinzeng')
			}
		}

		return {
			dialogVisible,
			formData,
			handleConfirm
		}
	}
})
</script>

<style lang="less" scoped></style>
