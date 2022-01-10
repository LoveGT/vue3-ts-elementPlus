<template>
	<div class="dashboard">
		<div ref="echartRef" :style="{ width: '500px', height: '300px' }"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from '@/store'
import * as echarts from 'echarts'

export default defineComponent({
	name: 'dashboard',
	setup() {
		const echartRef = ref<HTMLDivElement>()
		const store = useStore()
		store.dispatch('dashboard/getDashboardAction')
		return {
			echartRef
		}
	}
})
</script>

<style scoped></style>
