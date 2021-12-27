<template>
	<div class="page-content">
		<hy-table
			:listData="dataList"
			v-bind="contentConfig"
			:listCount="listCount"
			v-model:page="pageInfo"
			@selectionChange="selectionChange"
		>
			<template #headerHandler>
				<el-button type="primary" size="mini" v-if="isCreate"
					>新增用户</el-button
				>
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
					<el-button
						v-if="isUpdate"
						type="primary"
						size="mini"
						icon="el-icon-edit"
						>编辑</el-button
					>
					<el-button
						v-if="isDelete"
						type="warning"
						size="mini"
						icon="el-icon-delete"
						>删除</el-button
					>
				</div>
			</template>
			<template
				v-for="item in otherPropSlots"
				:key="item.prop"
				#[item.slotName]="scope"
			>
				<template v-if="item.slotName">
					<slot :name="item.slotName" :row="scope.row"></slot>
				</template>
			</template>
			<!-- <template #footer> 11111 </template> -->
		</hy-table>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref, watch } from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/usePermissions'

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
		const pageInfo = ref({
			currentPage: 1,
			pageSize: 10
		})
		// 0. 获取操作权限
		const isCreate = usePermission(props.pageName, 'create')
		console.log(isCreate)
		const isUpdate = usePermission(props.pageName, 'update')
		const isDelete = usePermission(props.pageName, 'delete')
		const isQuery = usePermission(props.pageName, 'query')
		console.log(isQuery, 'qG')
		console.log(isUpdate, 'u')
		const getPageData = (queryInfo: any = {}) => {
			// if (!isQuery) return
			store.dispatch('system/getPageListAction', {
				pageName: props.pageName,
				queryInfo: {
					offset: pageInfo.value.currentPage,
					size: pageInfo.value.pageSize,
					...queryInfo
				}
			})
		}

		onMounted(() => {
			getPageData() //可以直接在setup
		})
		watch(pageInfo, () => {
			getPageData()
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
		//获取其他的动态插槽名
		const otherPropSlots = props.contentConfig.propList.filter((item: any) => {
			if (item.slotName === 'status') return false
			if (item.slotName === 'createAt') return false
			if (item.slotName === 'updateAt') return false
			if (item.slotName === 'action') return false
			return true
		})

		return {
			dataList,
			listCount,
			pageInfo,
			otherPropSlots,
			isCreate,
			isUpdate,
			isDelete,
			isQuery,
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
