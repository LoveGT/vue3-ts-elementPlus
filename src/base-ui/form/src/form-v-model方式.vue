<template>
	<div class="hy-form">
		<slot name="header"></slot>
		<el-form :label-width="labelWidth">
			<el-row>
				<template v-for="item in formItems" :key="item.label">
					<el-col :span="8" v-bind="colLayout">
						<el-form-item
							:label="item.label"
							:rules="item.rules"
							:style="item.itemStyle"
						>
							<template
								v-if="item.type === 'input' || item.type === 'password'"
							>
								<el-input
									:placeholder="item.placeholder"
									v-bind="item.otherOptions"
									v-model="formData[`${item.field}`]"
									:show-password="item.type === 'password'"
								/>
							</template>
							<template v-else-if="item.type === 'select'">
								<el-select
									:placeholder="item.placeholder"
									v-bind="item.otherOptions"
									v-model="formData[`${item.field}`]"
									style="width: 100%"
								>
									<el-option
										v-for="option in item.options"
										:value="option.value"
										:key="option.value"
										>{{ option.title }}</el-option
									>
								</el-select>
							</template>
							<template v-else-if="item.type === 'datepicker'">
								<el-date-picker
									v-bind="item.otherOptions"
									v-model="formData[`${item.field}`]"
									style="width: 100%"
								></el-date-picker>
							</template>
						</el-form-item>
					</el-col>
				</template>
			</el-row>
		</el-form>
		<slot name="footer"></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
	props: {
		// formData: {
		// 	type: Object,
		// 	required: true
		// },
		modelValue: {
			type: Object,
			required: true
		},
		formItems: {
			type: Array as PropType<IFormItem[]>,
			default: () => []
		},
		labelWidth: {
			type: String,
			default: '100px'
		},
		itemStyle: {
			type: Object,
			default: () => ({ padding: '10px 40px' })
		},
		colLayout: {
			type: Object,
			default: () => ({
				xl: 6, // >1920px 4个
				lg: 8,
				md: 12,
				sm: 24,
				xs: 24
			})
		}
	},

	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const formData = ref({ ...props.modelValue })
		watch(formData, (newValue) => emit('update:modelValue', newValue), {
			deep: true
		})
		return {
			formData
		}
	}
})
</script>

<style lang="less" scoped>
.hy-form {
	padding-top: 22px;
}
</style>
