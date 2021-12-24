export const contentConfig = {
	title: '菜单列表',
	propList: [
		{ prop: 'name', label: '菜单名称', minWidth: '100' },
		{ prop: 'type', label: '类型', minWidth: '100' },
		{ prop: 'url', label: '菜单Url', minWidth: '120' },
		{ prop: 'icon', label: '图标', minWidth: '100' },
		{ prop: 'sort', label: '排序', minWidth: '100' },
		{ prop: 'permission', label: '按钮权限', minWidth: '100' },
		{
			prop: 'createAt',
			label: '创建时间',
			minWidth: '150',
			slotName: 'createAt'
		},
		{
			prop: 'updateAt',
			label: '更新时间',
			minWidth: '120',
			slotName: 'updateAt'
		},
		{
			prop: '操作',
			minWidth: '120',
			slotName: 'action'
		}
	],
	childrenProps: {
		rowKey: 'id',
		treeProp: {
			children: 'children'
		}
	}
}
