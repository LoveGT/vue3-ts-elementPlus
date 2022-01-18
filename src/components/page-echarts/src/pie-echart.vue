<template>
	<div class="pie-echart">
		<base-echart :options="options"></base-echart>
	</div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '../types'

type RadiusType = (number | string)[] | number | string
const props = withDefaults(
	defineProps<{
		pieData: IDataType[]
		pieChartType?: string
		roseType?: string | boolean
		pieRadius?: RadiusType
	}>(),
	{
		pieChartType: 'pie',
		roseType: '',
		pieRadius: () => ['45%', '75%']
	}
)

const options = computed(() => {
	return {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'horizontal',
			left: 'left'
		},
		series: [
			{
				name: '分类数据',
				type: props.pieChartType,
				radius: props.pieRadius,
				data: props.pieData,
				roseType: props.roseType,
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	}
})
</script>

<style scoped></style>
