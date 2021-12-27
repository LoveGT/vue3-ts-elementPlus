<template>
	<div class="goods">
		<page-content :contentConfig="contentConfig" pageName="goods">
			<template #oldPrice="scope">
				{{ '￥' + scope.row.oldPrice }}
			</template>
			<template #newPrice="scope">
				{{ '￥' + scope.row.newPrice }}
			</template>
			<template #status2="scope">
				<el-button
					size="mini"
					:type="scope.row.status ? 'success' : 'danger'"
					>{{ scope.row.status ? '上架' : '下架' }}</el-button
				>
			</template>
			<template #imgUrl="scope">
				<el-image
					style="width: 60px; height: 60px"
					fit="cover"
					:src="scope.row.imgUrl"
					:preview-src-list="[scope.row.imgUrl]"
				></el-image>
			</template>
		</page-content>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import { contentConfig } from './config/content.config'

export default defineComponent({
	name: 'goods',
	components: {
		PageContent
	},
	setup() {
		return {
			contentConfig
		}
	}
})
</script>

<style scoped></style>
