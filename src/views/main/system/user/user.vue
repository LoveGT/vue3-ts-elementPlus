<template>
	<div class="user">
		<page-search :searchFormConfig="searchFormConfig" />
		<hy-table
			:title="title"
			:listData="userList"
			:propList="propList"
			:showIndexColumn="showIndexColumn"
			:showSelectColumn="showSelectColumn"
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
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
	name: 'user',
	components: { PageSearch, HyTable },
	setup() {
		const store = useStore()
		store.dispatch('system/getPageListAction', {
			pageUrl: '/users/list',
			queryInfo: {
				offset: 0,
				size: 20
			}
		})

		const userList = computed(() => store.state.system.userList)
		const userCount = computed(() => store.state.system.userCount)
		const title = '用户列表'
		const propList = [
			{ prop: 'name', label: '用户名', minWidth: '100' },
			{ prop: 'realname', label: '真实姓名', minWidth: '100' },
			{ prop: 'cellphone', label: '联系方式', minWidth: '120' },
			{ prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
			{ prop: 'departmentId', label: '部门', minWidth: '100' },
			{ prop: 'roleId', label: '角色', minWidth: '100' },
			{
				prop: 'createAt',
				label: '创建时间',
				minWidth: '150',
				slotName: 'createAt'
			},
			{
				prop: 'updateAt',
				label: '更新时间',
				minWidth: '120',
				slotName: 'updateAt'
			},
			{
				prop: '操作',
				minWidth: '120',
				slotName: 'action'
			}
		]

		const showIndexColumn = true
		const showSelectColumn = true
		const selectionChange = (data: any) => {
			console.log(1111)
			console.log(data, 'data')
		}
		return {
			searchFormConfig,
			title,
			userList,
			userCount,
			propList,
			showIndexColumn,
			showSelectColumn,
			selectionChange
		}
	}
})
</script>

<style scoped lang="less">
.table-box {
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
