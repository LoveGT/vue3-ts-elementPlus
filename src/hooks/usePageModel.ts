import { ref } from 'vue'
import PageModel from '@/components/page-model'

type CallbackFns = () => void

export function usePageModel(addCb: CallbackFns, editCb: CallbackFns) {
	const pageModelRef = ref<InstanceType<typeof PageModel>>()
	const defaultInfo = ref({})
	const title = ref('')

	const handleAdd = () => {
		defaultInfo.value = {}
		title.value = '新增'
		if (pageModelRef.value) {
			pageModelRef.value.dialogVisible = true
		}
		addCb && addCb()
	}
	const handleEdit = (row: any) => {
		if (pageModelRef.value) {
			pageModelRef.value.dialogVisible = true
			defaultInfo.value = { ...row }
			title.value = '编辑'
		}
		editCb && editCb()
	}
	return [pageModelRef, defaultInfo, title, handleAdd, handleEdit]
}
