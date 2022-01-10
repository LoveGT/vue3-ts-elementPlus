<template>
	<div class="dashboard">
		<div ref="echartRef"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
	name: 'dashboard',
	setup() {
		const echartRef = ref<HTMLElement>()
		onMounted(() => {
			const echartInstance = echarts.init(echartRef.value)
			echartInstance.setOption({})
		})

		return {
			echartRef,
			echartInstance
		}
	}
})
</script>

<style scoped></style>
