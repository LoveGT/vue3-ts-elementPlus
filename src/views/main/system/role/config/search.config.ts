import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
	labelWidth: '120px',
	itemStyle: { padding: '5px 20px' },
	colLayout: {
		span: 8
	},
	formItems: [
		{
			field: 'id',
			type: 'input',
			label: 'id',
			rules: [],
			placeholder: '请输入编号'
		},
		{
			field: 'name',
			type: 'input',
			label: '角色名',
			rules: [],
			placeholder: '请输入角色名'
		},
		{
			field: 'intro',
			type: 'input',
			label: '权限介绍',
			rules: [],
			placeholder: '请输入权限介绍'
		},
		{
			field: 'createTime',
			type: 'datepicker',
			label: '创建时间',
			rules: [],
			otherOptions: {
				startPlaceholder: '开始时间',
				endPlaceholder: '结束时间',
				type: 'daterange'
			}
		}
	]
}
