<template>
	<div class="line-echart">
		<base-echart :options="options"></base-echart>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/echart'

const props = withDefaults(
	defineProps<{
		title?: string
		xLabels: string[]
		values: any[]
	}>(),
	{
		title: ''
	}
)
const options = computed(() => {
	return {
		title: {
			text: props.title
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: props.xLabels
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '分类效率',
				type: 'line',
				stack: 'Total',
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: props.values
			}
		]
	}
})
</script>

<style></style>
