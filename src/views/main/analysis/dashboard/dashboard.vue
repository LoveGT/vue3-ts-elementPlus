<template>
	<div class="dashboard">
		<!-- <div ref="echartRef" :style="{ width: '500px', height: '300px' }"></div> -->
		<el-row :gutter="10">
			<el-col :span="7">
				<hy-card title="分类商品数量（饼图）">
					<pie-echart
						:pieData="categoryGoodsCount"
						:pieRadius="['25%', '35%']"
					></pie-echart>
				</hy-card>
			</el-col>
			<el-col :span="10">
				<hy-card title="不同城市商品销量">
					<map-echart :mapData="addressGoodsSale"></map-echart>
				</hy-card>
			</el-col>
			<el-col :span="7">
				<hy-card title="分类商品数量（玫瑰图）">
					<pie-echart
						:pieData="categoryGoodsCount"
						:pieRadius="['5%', '55%']"
						roseType="radius"
					></pie-echart>
				</hy-card>
			</el-col>
		</el-row>
		<el-row :gutter="10" class="content-row">
			<el-col :span="12">
				<hy-card title="分类商品销量（折线图）">
					<line-echart v-bind="categoryGoodsSale"></line-echart>
				</hy-card>
			</el-col>
			<el-col :span="12">
				<hy-card title="分类商品收藏（柱状图）">
					<bar-echart v-bind="categoryGoodsFavor"></bar-echart>
				</hy-card>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import {
	PieEchart,
	LineEchart,
	BarEchart,
	MapEchart
} from '@/components/page-echarts'

import HyCard from '@/base-ui/card'

export default defineComponent({
	name: 'dashboard',
	components: {
		HyCard,
		PieEchart,
		LineEchart,
		BarEchart,
		MapEchart
	},
	setup() {
		const store = useStore()
		store.dispatch('dashboard/getDashboardAction')
		const categoryGoodsCount = computed(() => {
			return store.state.dashboard.categoryGoodsCount.map((item: any) => {
				return { name: item.name, value: item.goodsCount }
			})
		})
		const categoryGoodsSale = computed(() => {
			const xLabels: string[] = []
			const values: any[] = []

			const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
			for (const item of categoryGoodsSale) {
				xLabels.push(item.name)
				values.push(item.goodsCount)
			}

			return { xLabels, values }
		})
		const categoryGoodsFavor = computed(() => {
			const xLabels: string[] = []
			const values: any[] = []

			const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
			for (const item of categoryGoodsFavor) {
				xLabels.push(item.name)
				values.push(item.goodsFavor)
			}

			return { xLabels, values }
		})

		const addressGoodsSale = computed(() => {
			return store.state.dashboard.addressGoodsSale.map((item: any) => {
				return { name: item.address, value: item.count }
			})
		})
		return {
			categoryGoodsCount,
			categoryGoodsSale,
			categoryGoodsFavor,
			addressGoodsSale
		}
	}
})
</script>

<style scoped lang="less">
.content-row {
	margin-top: 20px;
}
</style>
