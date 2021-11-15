<template>
	<div class="user">
		<page-search :searchFormConfig="searchFormConfig" />
		<hy-table :listData="userList" :propList="propList">
			<template #status="scope">
				<el-button
					size="mini"
					:type="scope.row.enable ? 'success' : 'danger'"
					>{{ scope.row.enable ? '启用' : '禁用' }}</el-button
				>
			</template>
			<template #createAt="scope">
				{{ scope.row.createAt }}
			</template>
			<template #updateAt="scope">
				{{ scope.row.updateAt }}
			</template>
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
			}
		]
		return {
			searchFormConfig,
			userList,
			userCount,
			propList
		}
	}
})
</script>

<style scoped lang="less">
.table-box {
	padding: 20px;
	border-top: 20px solid #f5f5f5;
}
</style>
