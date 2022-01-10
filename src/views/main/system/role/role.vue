<template>
	<div class="role">
		<page-search :searchFormConfig="searchFormConfig"></page-search>
		<page-content
			:contentConfig="contentConfig"
			pageName="role"
			btnTitle="新增角色"
			@addClick="handleAdd"
			@editClick="handleEdit"
		></page-content>
		<page-model
			ref="pageModelRef"
			:modelConfig="modelConfig"
			:defaultInfo="defaultInfo"
			:otherInfo="otherInfo"
			pageName="role"
			:title="`${title}角色`"
		>
			<div class="el-tree-box">
				<label>菜单权限</label>
				<el-tree
					ref="elTreeRef"
					:data="menus"
					show-checkbox
					node-key="id"
					:props="{ children: 'children', label: 'name' }"
					@check="handleCheckChange"
				>
				</el-tree>
			</div>
		</page-model>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/utils/map-menus'

import { searchFormConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { modelConfig } from './config/model.config'

import { usePageModel } from '@/hooks/usePageModel'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'
import { ElTree } from 'element-plus'

export default defineComponent({
	name: 'role',
	components: {
		PageSearch,
		PageContent,
		PageModel
	},
	setup() {
		// pageModel相关的hook逻辑
		const addCallback = () => {
			const passwordItem = modelConfig.formItems.find(
				(item) => item.field === 'password'
			)
			if (passwordItem) {
				passwordItem.isHidden = false
			}
		}
		const elTreeRef = ref<InstanceType<typeof ElTree>>()
		const editCallback = (row: any) => {
			const leafKeys = menuMapLeafKeys(row.menuList)
			nextTick(() => {
				elTreeRef.value?.setCheckedKeys(leafKeys, false)
			})
		}
		const [pageModelRef, defaultInfo, title, handleAdd, handleEdit] =
			usePageModel(undefined, editCallback)

		// 获取el-tree的数据
		const store = useStore()
		const menus = computed(() => store.state.entireMenu)

		const otherInfo = ref({})
		const handleCheckChange = (data: any, checkData: any) => {
			const { checkedKeys, halfCheckedKeys } = checkData //获取选中的和非选中的
			const menuList = [...checkedKeys, ...halfCheckedKeys]
			otherInfo.value = { menuList }
		}
		return {
			searchFormConfig,
			contentConfig,
			modelConfig,
			pageModelRef,
			defaultInfo,
			title,
			menus,
			elTreeRef,
			otherInfo,
			handleAdd,
			handleEdit,
			handleCheckChange
		}
	}
})
</script>

<style scoped lang="less">
.el-tree-box {
	display: flex;
	label {
		width: 100px;
		box-sizing: border-box;
		padding-right: 12px;
		text-align: right;
	}
}
</style>
