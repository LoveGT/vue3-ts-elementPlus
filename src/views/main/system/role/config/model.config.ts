import { IForm } from '@/base-ui/form'

export const modelConfig: IForm = {
	itemStyle: {},
	formItems: [
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
		}
	],
	colLayout: {
		span: 24
	}
}
