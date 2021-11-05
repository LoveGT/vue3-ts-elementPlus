<template>
	<div class="user-info">
		<el-dropdown>
			<span class="el-dropdown-link">
				Dropdown List
				<el-icon class="el-icon--right">
					<Edit />
					<Fold />
				</el-icon>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item icon="el-icon-circle-close"
						>退出登录</el-dropdown-item
					>
					<el-dropdown-item divided>用户信息</el-dropdown-item>
					<el-dropdown-item>系统管理</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Fold } from '@element-plus/icons'
import { Edit } from '@element-plus/icons'

export default defineComponent({
	components: { Edit, Fold }
})
</script>

<style></style>
