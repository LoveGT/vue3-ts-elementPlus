<template>
	<div class="user page-container">
		<page-search
			:searchFormConfig="searchFormConfig"
			@resetBtnClick="handleReset"
			@queryBtnClick="handleQuery"
		/>
		<page-content
			ref="pageContentRef"
			:contentConfig="contentConfig"
			pageName="users"
			btnTitle="新增用户"
			@addClick="handleAdd"
			@editClick="handleEdit"
		></page-content>
		<page-model
			ref="pageModelRef"
			:defaultInfo="defaultInfo"
			pageName="users"
			:title="`${title}用户`"
			:modelConfig="modelConfigCpd"
		></page-model>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import { searchFormConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { modelConfig } from './config/model.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModel } from '@/hooks/usePageModel'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'

export default defineComponent({
	name: 'users',
	components: { PageSearch, PageContent, PageModel },
	setup() {
		const [pageContentRef, handleReset, handleQuery] = usePageSearch()

		// pageModel相关的hook逻辑
		const addCallback = () => {
			const passwordItem = modelConfig.formItems.find(
				(item) => item.field === 'password'
			)
			if (passwordItem) {
				passwordItem.isHidden = false
			}
		}
		const editCallback = () => {
			const passwordItem = modelConfig.formItems.find(
				(item) => item.field === 'password'
			)
			if (passwordItem) {
				passwordItem.isHidden = true
			}
		}

		// 动态添加部门和角色
		const store = useStore()
		const modelConfigCpd = computed(() => {
			const departmentItem = modelConfig.formItems.find(
				(item) => item.field === 'departmentId'
			)
			departmentItem!.options = store.state.entireDepartment.map((item) => {
				return { title: item.name, value: item.id, label: item.name }
			})

			const roleItem = modelConfig.formItems.find(
				(item) => item.field === 'roleId'
			)
			roleItem!.options = store.state.entireRole.map((item) => {
				return { title: item.name, value: item.id, label: item.name }
			})
			return modelConfig
		})
		const [pageModelRef, defaultInfo, title, handleAdd, handleEdit] =
			usePageModel(addCallback, editCallback)
		return {
			searchFormConfig,
			contentConfig,
			modelConfigCpd,
			pageContentRef,
			handleReset,
			handleQuery,
			pageModelRef,
			defaultInfo,
			title,
			handleAdd,
			handleEdit
		}
	}
})
</script>

<style scoped lang="less"></style>
