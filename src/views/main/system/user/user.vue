<template>
	<div class="user">
		<page-search
			:searchFormConfig="searchFormConfig"
			@resetBtnClick="handleReset"
			@queryBtnClick="handleQuery"
		/>
		<page-content
			ref="pageContentRef"
			:contentConfig="contentConfig"
			pageName="users"
			@addClick="handleAdd"
			@editClick="handleEdit"
		></page-content>
		<page-model ref="pageModelRef" :modelConfig="modelConfig"></page-model>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'

import { searchFormConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { modelConfig } from './config/model.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
	name: 'users',
	components: { PageSearch, PageContent, PageModel },
	setup() {
		const [pageContentRef, handleReset, handleQuery] = usePageSearch()

		const pageModelRef = ref<InstanceType<typeof PageModel>>()
		const handleAdd = () => {
			pageModelRef.value.dialogVisible = true
		}
		const handleEdit = (row: any) => {
			pageModelRef.value.dialogVisible = true
		}
		return {
			searchFormConfig,
			contentConfig,
			modelConfig,
			pageContentRef,
			handleReset,
			handleQuery,
			pageModelRef,
			handleAdd,
			handleEdit
		}
	}
})
</script>

<style scoped lang="less"></style>
