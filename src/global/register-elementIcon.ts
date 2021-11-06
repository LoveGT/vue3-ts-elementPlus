import { App } from 'vue'

import {
	ElAside,
	ElButton,
	ElCheckbox,
	ElContainer,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElForm,
	ElFormItem,
	ElHeader,
	ElInput,
	ElLink,
	ElMain,
	ElMenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElRadio,
	ElSubmenu,
	ElTabPane,
	ElTabs
} from 'element-plus'

const components = [
	ElButton,
	ElForm,
	ElFormItem,
	ElInput,
	ElRadio,
	ElTabs,
	ElTabPane,
	ElCheckbox,
	ElLink,
	ElContainer,
	ElHeader,
	ElMain,
	ElAside,
	ElMenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElSubmenu,
	ElDropdown,
	ElDropdownMenu,
	ElDropdownItem
]

export default function (app: App): void {
	for (const component of components) {
		app.component(component.name, component)
	}
}
