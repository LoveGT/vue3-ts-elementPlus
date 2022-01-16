<template>
	<div class="dashboard">
		<!-- <div ref="echartRef" :style="{ width: '500px', height: '300px' }"></div> -->
		<el-row :gutter="10">
			<el-col :span="7">
				<hy-card title="分类商品数量（饼图）">
					<pie-echart :pieData="categoryGoodsCount"></pie-echart>
				</hy-card>
			</el-col>
			<el-col :span="10">
				<hy-card title="不同城市商品销量"></hy-card>
			</el-col>
			<el-col :span="7">
				<hy-card title="分类商品数量（玫瑰图）"></hy-card>
			</el-col>
		</el-row>
		<el-row :gutter="10" class="content-row">
			<el-col :span="12">
				<hy-card title="分类商品销量（柱状图）"></hy-card>
			</el-col>
			<el-col :span="12">
				<hy-card title="分类商品收藏（柱状图）"></hy-card>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { PieEchart } from '@/components/page-echarts'

import HyCard from '@/base-ui/card'

export default defineComponent({
	name: 'dashboard',
	components: {
		HyCard,
		PieEchart
	},
	setup() {
		const store = useStore()
		store.dispatch('dashboard/getDashboardAction')
		const categoryGoodsCount = computed(() => {
			return store.state.dashboard.categoryGoodsCount.map((item: any) => {
				return { name: item.name, value: item.goodsCount }
			})
		})
		return {
			categoryGoodsCount
		}
	}
})
</script>

<style scoped lang="less">
.content-row {
	margin-top: 20px;
}
</style>
