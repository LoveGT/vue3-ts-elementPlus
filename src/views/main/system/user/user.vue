<template>
	<div class="user">
		<page-search :searchFormConfig="searchFormConfig" />
		<div class="content"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
	name: 'user',
	components: { PageSearch },
	setup() {
		return {
			searchFormConfig
		}
	}
})
</script>

<style scoped lang="less">
.header {
	color: red;
	text-align: left;
	padding: 0 0px 0px 20px;
}
.handle-btns {
	text-align: right;
	padding: 0 20px 20px 0;
}
</style>
