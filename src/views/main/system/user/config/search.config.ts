import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
	labelWidth: '120px',
	itemStyle: { padding: '5px 20px', margin: '0' },
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
			label: '用户名',
			rules: [],
			placeholder: '请输入用户名'
		},
		{
			field: 'realname',
			type: 'input',
			label: '真实姓名',
			rules: [],
			placeholder: '请输入姓名'
		},
		{
			field: 'cellphone',
			type: 'input',
			label: '联系方式',
			rules: [],
			placeholder: '请输入联系方式'
		},
		{
			field: 'enable',
			type: 'select',
			label: '用户状态',
			rules: [],
			placeholder: '请选择用户状态',
			options: [
				{ title: '启用', value: 1 },
				{ title: '禁用', value: 0 }
			]
		},
		{
			field: 'createAt',
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
