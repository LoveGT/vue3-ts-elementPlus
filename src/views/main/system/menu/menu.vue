<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-08-06 14:01:30
 * @LastEditors: 
 * @LastEditTime: 2022-08-06 17:28:01
-->
<template>
	<div class="menu page-container">
		<page-search :searchFormConfig="searchFormConfig" />
		<page-content
			ref="pageContentRef"
			:contentConfig="contentConfig"
			pageName="menu"
			btnTitle="新增菜单"
		></page-content>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
export default defineComponent({
	name: 'menu',
	components: { PageSearch, PageContent },
	setup() {
		return {
			searchFormConfig,
			contentConfig
		}
	}
})
</script>

<style scoped></style>
