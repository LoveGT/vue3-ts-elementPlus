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
			border
			style="width: 100%"
			@selection-change="handleSelectChange"
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
				<el-table-column v-bind="propItem" align="center">
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
					:current-page="currentPage"
					:page-sizes="[100, 200, 300, 400]"
					:page-size="100"
					layout="total, sizes, prev, pager, next, jumper"
					:total="400"
				>
				</el-pagination>
			</slot>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	emits: ['selectionChange'],
	props: {
		title: {
			type: String,
			default: ''
		},
		listData: {
			type: Array,
			required: true
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
		}
	},
	setup(props, { emit }) {
		console.log(props, 'props')
		const handleSelectChange = (value: any) => {
			console.log(value)
			emit('selectionChange', value)
		}

		const handleSizeChange = (val: any) => {
			console.log(`${val} items per page`)
		}
		const handleCurrentChange = (val: any) => {
			console.log(`current page: ${val}`)
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
