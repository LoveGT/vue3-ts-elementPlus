<template>
	<div class="nav-header">
		<i
			class="fold-menu"
			:class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
			@click="handleFoldClick"
		></i>
		<div class="content">
			<hy-breadcrumb :breadcrumbs="breadcrumbs" />
			<user-info></user-info>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'

import { pathMapToBreadcrumbs } from '@/utils/map-menus'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
	components: { UserInfo, HyBreadcrumb },
	emits: ['foldChange'],
	setup(props, { emit }) {
		const isFold = ref(false)
		const handleFoldClick = () => {
			isFold.value = !isFold.value
			emit('foldChange', isFold.value)
		}
		// 面包屑数据
		const store = useStore()

		const breadcrumbs = computed(() => {
			const userMenus = store.state.login.userMenus
			const route = useRoute()
			const currentPath = route.path
			return pathMapToBreadcrumbs(userMenus, currentPath)
		})

		return {
			isFold,
			breadcrumbs,
			handleFoldClick
		}
	}
})
</script>

<style lang="less" scoped>
.nav-header {
	width: 100%;
	display: flex;
	border: 1px solid red;
	.fold-menu {
		font-size: 30px;
		cursor: pointer;
	}
	.content {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
	}
}
</style>
