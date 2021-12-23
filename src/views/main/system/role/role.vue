<template>
	<div class="role">
		<page-search :searchFormConfig="searchFormConfig"></page-search>
		<page-content :contentConfig="contentConfig" pageName="role"></page-content>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentConfig } from './config/content.config'

export default defineComponent({
	name: 'role',
	components: {
		PageSearch,
		PageContent
	},
	setup() {
		return {
			searchFormConfig,
			contentConfig
		}
	}
})
</script>

<style scoped></style>
