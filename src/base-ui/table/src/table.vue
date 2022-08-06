<template>
	<div class="hy-table">
		<div class="header">
			<slot name="header">
				<div class="title">{{ title }}</div>
				<div class="handler">
					<slot name="headerHandler"></slot>
				</div>
			</slot>
		</div>
		<el-table
			:data="listData"
			v-bind="childrenProps"
			height="100%"
			@selection-change="handleSelectChange"
			border
			style="width: 100%"
		>
			<el-table-column
				v-if="showSelectColumn"
				type="selection"
				align="center"
				width="60"
			></el-table-column>
			<el-table-column
				v-if="showIndexColumn"
				type="index"
				label="序号"
				align="center"
				width="60"
			></el-table-column>
			<template v-for="propItem in propList" :key="propItem.prop">
				<el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
					<template #default="scope">
						<slot :name="propItem.slotName" :row="scope.row">
							{{ scope.row[propItem.prop] }}
						</slot>
					</template>
				</el-table-column>
			</template>
		</el-table>
		<div class="footer">
			<slot name="footer">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="page.currentPage"
					:page-sizes="[10, 20, 30, 400]"
					:page-size="page.pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					:total="listCount"
				>
				</el-pagination>
			</slot>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	emits: ['selectionChange', 'update:page'],
	props: {
		title: {
			type: String,
			default: ''
		},
		listData: {
			type: Array,
			required: true
		},
		listCount: {
			type: Number,
			default: 0
		},
		propList: {
			type: Array,
			required: true
		},
		showIndexColumn: {
			type: Boolean,
			default: false
		},
		showSelectColumn: {
			type: Boolean,
			default: false
		},
		page: {
			type: Object,
			default: () => ({ currentPage: 1, pageSize: 10 })
		},
		childrenProps: {
			type: Object,
			default: () => ({})
		}
	},
	setup(props, { emit }) {
		const handleSelectChange = (value: any) => {
			emit('selectionChange', value)
		}

		const handleSizeChange = (pageSize: number) => {
			emit('update:page', { ...props.page, pageSize })
		}
		const handleCurrentChange = (currentPage: number) => {
			emit('update:page', { ...props.page, currentPage })
		}
		return {
			currentPage: ref(1),
			handleSelectChange,
			handleSizeChange,
			handleCurrentChange
		}
	}
})
</script>

<style lang="less" scoped>
.header {
	display: flex;
	justify-content: space-between;
	.title {
		margin-left: 20px;
		color: #2c2929;
	}
	.handler {
		margin-right: 20px;
	}
}
</style>
