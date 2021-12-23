<template>
	<div class="page-content">
		<hy-table
			:listData="dataList"
			v-bind="contentConfig"
			:listCount="listCount"
			@selectionChange="selectionChange"
		>
			<template #headerHandler>
				<el-button type="primary" size="mini">新增用户</el-button>
				<el-button icon="el-icon-refresh" size="mini"></el-button>
			</template>
			<template #status="scope">
				<el-button
					size="mini"
					:type="scope.row.enable ? 'success' : 'danger'"
					>{{ scope.row.enable ? '启用' : '禁用' }}</el-button
				>
			</template>
			<template #createAt="scope">
				{{ $filters.formatTime(scope.row.createAt, 'YYYYMMDD') }}
			</template>
			<template #updateAt="scope">
				<span>{{
					$filters.formatTimestamp(scope.row.updateAt, 'YYYYMMDD')
				}}</span>
			</template>
			<template #action>
				<div class="handle-btns">
					<el-button type="primary" size="mini" icon="el-icon-edit"
						>编辑</el-button
					>
					<el-button type="warning" size="mini" icon="el-icon-delete"
						>删除</el-button
					>
				</div>
			</template>
			<!-- <template #footer> 11111 </template> -->
		</hy-table>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from '@/store'

import HyTable from '@/base-ui/table'

export default defineComponent({
	props: {
		contentConfig: {
			type: Object,
			required: true
		},
		pageName: {
			type: String,
			required: true
		}
	},
	components: {
		HyTable
	},
	setup(props) {
		const store = useStore()

		const getPageData = (queryInfo: any = {}) => {
			store.dispatch('system/getPageListAction', {
				pageName: props.pageName,
				queryInfo: {
					offset: 0,
					size: 20,
					...queryInfo
				}
			})
		}

		onMounted(() => {
			getPageData() //可以直接在setup
		})
		// action的方式
		// const dataList = computed(() => store.state.system[`${props.pageName}List`])
		// getters的方式
		const dataList = computed(() =>
			store.getters[`system/pageListData`](props.pageName)
		)
		const listCount = computed(() =>
			store.getters[`system/getListCount`](props.pageName)
		)
		return {
			dataList,
			listCount,
			getPageData
			// userCount
		}
	}
})
</script>

<style soped lang="less">
.page-content {
	padding: 20px;
	border-top: 20px solid #f5f5f5;
}
.handle-btns {
	display: flex;
	justify-content: center;
	align-items: center;
	.el-button {
		padding: 4px;
	}
}
</style>
