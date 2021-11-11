import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
	ElAside,
	ElAvatar,
	ElButton,
	ElCheckbox,
	ElContainer,
	ElDatePicker,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElForm,
	ElFormItem,
	ElHeader,
	ElIcon,
	ElInput,
	ElLink,
	ElMain,
	ElMenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElOption,
	ElRadio,
	ElRadioGroup,
	ElRow,
	ElCol,
	ElSelect,
	ElSubmenu,
	ElTabPane,
	ElTabs,
	ElCheckboxGroup,
	ElSwitch,
	ElBreadcrumb,
	ElBreadcrumbItem
} from 'element-plus'

const components = [
	ElButton,
	ElForm,
	ElFormItem,
	ElInput,
	ElRadio,
	ElRadioGroup,
	ElTabs,
	ElTabPane,
	ElCheckbox,
	ElCheckboxGroup,
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
	ElDropdownItem,
	ElIcon,
	ElAvatar,
	ElRow,
	ElCol,
	ElSelect,
	ElDatePicker,
	ElOption,
	ElSwitch,
	ElBreadcrumb,
	ElBreadcrumbItem
]

export default function (app: App): void {
	for (const component of components) {
		app.component(component.name, component)
	}
}
