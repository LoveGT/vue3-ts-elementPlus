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
		></page-content>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
	name: 'users',
	components: { PageSearch, PageContent },
	setup() {
		const [pageContentRef, handleReset, handleQuery] = usePageSearch()

		return {
			searchFormConfig,
			contentConfig,
			pageContentRef,
			handleReset,
			handleQuery
		}
	}
})
</script>

<style scoped lang="less"></style>
