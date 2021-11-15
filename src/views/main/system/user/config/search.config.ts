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
			label: '姓名',
			rules: [],
			placeholder: '请输入姓名'
		},
		{
			field: 'password',
			type: 'password',
			label: '密码',
			rules: [],
			placeholder: '请输入密码'
		},
		{
			field: 'sport',
			type: 'select',
			label: '喜欢的运动',
			rules: [],
			placeholder: '请选择喜欢的运动',
			options: [
				{ title: '篮球', value: 'basketball' },
				{ title: '足球', value: 'football' }
			]
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