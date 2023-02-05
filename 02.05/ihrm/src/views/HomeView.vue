<template>
	<div class="home">
		<el-container>
			<el-aside :width="isCollapse ? '40px' : '160px'">
				<img src="../assets/微信图片_20230105194248.png" alt="" />
				<el-menu default-active="2" class="el-menu-vertical-demo" text-color="#fff" :collapse="isCollapse" router>
					<el-menu-item index="/dashboard">
						<i class="el-icon-eleme" style="color: #fff"></i>
						<span>首页</span>
					</el-menu-item>
					<el-menu-item index="staff">
						<i class="el-icon-user-solid" style="color: #fff"></i>
						<span>员工</span>
					</el-menu-item>
					<el-menu-item index="settings">
						<i class="el-icon-s-tools" style="color: #fff"></i>
						<span>公司设置</span>
					</el-menu-item>
					<el-menu-item index="permission">
						<i class="el-icon-s-cooperation" style="color: #fff"></i>
						<span>权限管理</span>
					</el-menu-item>
					<el-menu-item index="security">
						<i class="el-icon-s-grid" style="color: #fff"></i>
						<span>社保</span>
					</el-menu-item>
					<el-menu-item index="approvals">
						<i class="el-icon-s-order" style="color: #fff"></i>
						<span>审批</span>
					</el-menu-item>
					<el-menu-item index="attendances">
						<i class="el-icon-video-camera-solid" style="color: #fff"></i>
						<span>考勤</span>
					</el-menu-item>
					<el-menu-item index="wages">
						<i class="el-icon-s-data" style="color: #fff"></i>
						<span>工资</span>
					</el-menu-item>
					<el-menu-item index="organizational">
						<i class="el-icon-share" style="color: #fff"></i>
						<span>组织架构</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container class="one">
				<el-header>
					<div class="left">
						<i @click="isCollapse = !isCollapse" class="el-icon-s-unfold"></i>
						<span class="con">江苏传智播客教育科技股份有限公司</span>
						<span class="btn">体验版</span>
						<div class="box">
							<span class="ra">
								<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
							</span>
							<span>管理员↓</span>
						</div>
					</div>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	name: "",
	data () {
		return {
			isCollapse: false
		}
	},
	methods: {},
	created () { }
}
</script>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}

.home {
	width: 100%;
	height: 100%;

	img {
		width: 100%;
	}
}

.el-container {
	width: 100%;
	height: 100%;
}


.el-header,
.el-footer {
	background-color: #3d6df8;
	color: #333;
	line-height: 60px;
	color: #fff;
}

.el-aside {
	background-color: #5a8bff;
	color: #333;
	height: 100vh;

	.el-menu {
		background-color: #5889fe;
		// height: 100vh;
		height: 656px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAAC+CAYAAADkxemwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkFGRDdBQkYwNTdFODExODMxQ0RDRjMxQThGRUQ3NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNkEzMzEzQ0JDODgxMUU4QTc0QkJDMEY1ODAxQjkyOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNkEzMzEzQkJDODgxMUU4QTc0QkJDMEY1ODAxQjkyOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyNDhlMWQtY2IzNC04ODQxLTliNjQtYjBlOTUzZWNhYTE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQUZEN0FCRjA1N0U4MTE4MzFDRENGMzFBOEZFRDc3Ii8+IDwvcmRmOkRlc2Ny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) no-repeat 0 100%;
	}
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	height: 100vh;
}

.left {
	i {
		font-size: 25px;
	}

	.con {
		margin: 0 10px;
		font-size: 20px;
	}

	.btn {
		display: inline-block;
		background-color: #84a9fe;
		line-height: 16px;
		height: 30px;
		padding: 8px 10px 8px 10px;
		border-radius: 10px;
	}
}

.box {
	float: right;
	display: flex;
	align-items: center;
	height: 60px;
	line-height: 30px;
}
</style>
