<template>
	<div class="hy-form">
		<el-form ref="form" :model="form" label-width="120px">
			<el-row>
				<el-col :span="8">
					<el-form-item label="Activity name">
						<el-input v-model="form.name" placeholder="your name"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
	props: {
		formItems: {
			type: Array as PropType<IFormItem[]>,
			default: () => []
		}
	},
	setup() {
		return {}
	}
})
</script>

<style></style>
