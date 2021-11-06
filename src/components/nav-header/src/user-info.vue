<template>
	<div class="user-info">
		<el-dropdown>
			<span class="el-dropdown-link">
				<el-avatar size="medium">user</el-avatar>
				<span class="name">{{ name }}</span>
				<i class="el-icon-arrow-down el-icon--right"></i>
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
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
	setup() {
		const store = useStore()

		const name = computed(() => store.state.login.userInfo.name)
		return { name }
	}
})
</script>

<style lang="less" scoped>
.el-dropdown-link {
	display: flex;
	align-items: center;
	.name {
		margin-left: 5px;
	}
}
</style>
