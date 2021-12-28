<template>
	<div class="hy-form">
		<slot name="header"></slot>
		<el-form :label-width="labelWidth">
			<el-row>
				<template v-for="item in formItems" :key="item.label">
					<el-col :span="8" v-bind="colLayout">
						<el-form-item
							v-if="!item.isHidden"
							:label="item.label"
							:rules="item.rules"
							:style="itemStyle"
						>
							<template
								v-if="item.type === 'input' || item.type === 'password'"
							>
								<el-input
									:placeholder="item.placeholder"
									v-bind="item.otherOptions"
									clearable
									:show-password="item.type === 'password'"
									:model-value="modelValue[`${item.field}`]"
									@update:modelValue="handleValueChange($event, item.field)"
								/>
							</template>
							<template v-else-if="item.type === 'select'">
								<el-select
									:placeholder="item.placeholder"
									v-bind="item.otherOptions"
									clearable
									:model-value="modelValue[`${item.field}`]"
									@update:modelValue="handleValueChange($event, item.field)"
									style="width: 100%"
								>
									<el-option
										v-for="option in item.options"
										:value="option.value"
										:key="option.value"
										:label="option.label"
										>{{ option.title }}</el-option
									>
								</el-select>
							</template>
							<template v-else-if="item.type === 'datepicker'">
								<el-date-picker
									v-bind="item.otherOptions"
									clearable
									:model-value="modelValue[`${item.field}`]"
									@update:modelValue="handleValueChange($event, item.field)"
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
import { defineComponent, PropType } from 'vue'
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
		// 非v-model的方式实现
		const handleValueChange = (value: any, filed: string) => {
			emit('update:modelValue', { ...props.modelValue, [filed]: value })
		}
		return {
			handleValueChange
		}
	}
})
</script>

<style lang="less" scoped>
.hy-form {
	padding-top: 22px;
}
</style>
