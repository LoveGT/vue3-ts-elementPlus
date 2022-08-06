/*
 * @Descripttion:
 * @version:
 * @Author: tanchongzheng
 * @Date: 2022-08-06 14:01:30
 * @LastEditors:
 * @LastEditTime: 2022-08-06 17:09:19
 */
export const contentConfig = {
	// title: '用户列表',
	propList: [
		{ prop: 'name', label: '用户名', minWidth: '100' },
		{ prop: 'realname', label: '真实姓名', minWidth: '100' },
		{ prop: 'cellphone', label: '联系方式', minWidth: '120' },
		{ prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
		{ prop: 'departmentId', label: '部门', minWidth: '100' },
		{ prop: 'roleId', label: '角色', minWidth: '100' },
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
	showIndexColumn: true,
	showSelectColumn: true
}
