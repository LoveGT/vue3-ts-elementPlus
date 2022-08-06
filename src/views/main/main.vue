<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-08-06 14:01:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-06 17:22:56
-->
<template>
	<div class="app-container">
		<el-container class="app-wrapper">
			<el-aside :width="isCollapse ? '60px' : '210px'">
				<nav-menu :collapse="isCollapse"></nav-menu>
			</el-aside>
			<el-container class="app-content">
				<el-header class="page-header">
					<nav-header @foldChange="handleFoldChange" />
				</el-header>
				<el-main class="app-main">
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
	components: {
		NavMenu,
		NavHeader
	},
	setup() {
		const isCollapse = ref(false)
		const handleFoldChange = (isFold: boolean) => {
			isCollapse.value = isFold
		}
		return {
			isCollapse,
			handleFoldChange
		}
	}
})
</script>

<style scoped lang="less">
.app-container {
	// position: relative;
	// top: 0;
	// left: 0;
	width: 100%;
	height: 100%;
}

.app-wrapper {
	height: 100%;
}

.app-main {
	position: relative;
	color: #333;
	text-align: center;
	background-color: #fff;
	height: calc(100% - 48px);
}

.el-header,
.el-footer {
	display: flex;
	color: #333;
	text-align: center;
	align-items: center;
}

.el-header {
	height: 48px !important;
}

.el-aside {
	overflow-x: hidden;
	overflow-y: auto;
	line-height: 200px;
	text-align: left;
	cursor: pointer;
	background-color: #001529;
	transition: width 0.3s linear;
	scrollbar-width: none; /* firefox */
	-ms-overflow-style: none; /* IE 10+ */

	&::-webkit-scrollbar {
		display: none;
	}
}
</style>
