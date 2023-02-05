<template>
	<div class="staff">
		<div class="staff-box">
			<el-card class="staff-one">
				<div class="abc">
					<div class="one-box">
						<i class="el-icon-info" style="color: #5687fe"></i>
						当前共有1852条记录
					</div>
					<div class="tow">
						<el-button type="danger">普通excel导入</el-button>
						<el-button type="warning">负责excel导出</el-button>
						<el-button type="success" @click="add">excel导出</el-button>
						<el-button type="primary">新增员工</el-button>
					</div>
				</div>
			</el-card>
		</div>
		<el-table :data="lists" style="width: 100%">
			<el-table-column type="index" label="序号" width="55" />
			<el-table-column prop="username" label="姓名" sortable />
			<el-table-column prop="staffPhoto" label="头像" sortable>
				<template slot-scope="scoped">
					<el-image :src="scoped.row.staffPhoto"></el-image>
				</template>
			</el-table-column>
			<el-table-column prop="mobile" label="手机号" sortable />
			<el-table-column prop="workNumber" label="工号" sortable />
			<el-table-column prop="xing" label="聘用形式" sortable />
			<el-table-column prop="departmentName" label="部门" sortable />
			<el-table-column prop="timeOfEntry" label="入职时间" sortable />
			<el-table-column prop="enableState" label="账户状态" sortable>
				<el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
				</el-switch>
			</el-table-column>
			<el-table-column prop="username" label="操作" width="280" sortable>
				<span class="ons">查看</span>
				<span class="ons">转正</span>
				<span class="ons">调岗</span>
				<span class="ons">离职</span>
				<span class="one">删除</span>
			</el-table-column>
		</el-table>
		<div class="auto">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pages.page"
				:page-sizes="[10, 20, 30, 40]" :page-size="pages.size" layout="pager" background :total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import { staff } from '../../api/staff'
export default {
	name: "",
	data () {
		return {
			lists: [],
			value: true,
			pages: {
				page: 1,
				size: 10,
			},
			total: 0
		}
	},
	methods: {
		add () {
			this.$router.push("/daochu")
		},
		getList () {
			staff(this.pages).then((res) => {
				console.log(res);
				this.lists = res.data.data.rows
				this.total = res.data.data.total
			})
		},
		handleSizeChange (val) {
			console.log(`每页 ${val} 条`);
			this.pages.size = val
			this.getList()
		},
		handleCurrentChange (val) {
			console.log(`当前页: ${val}`);
			this.pages.page = val
			this.getList()

		},
	},
	created () {
		this.getList()
	}

}
</script>

<style lang="scss" scoped>
.auto {
	width: 100px;
	margin: 10px auto;
}

.staff-box {
	width: 100%;
	height: 80px;
	margin-bottom: 10px;
	margin-top: 10px;

	.staff-one {
		height: 80px;
		line-height: 35px;
		width: 100%;

		.abc {
			display: flex;

			.one-box {
				height: 30px;
				font-size: 15px;
				text-align: center;
				width: 200px;
				line-height: 30px;
				background-color: #e6f7ff;
				border: 1px solid #9fdaff;
			}

			.tow {
				margin-left: 600px;
				margin-right: 20px;

				.el-button {
					padding: 5px 10px 5px 10px;
				}
			}
		}
	}
}

.ons {
	color: rgb(31, 122, 242);
	margin-right: 5px;
}

.one {
	color: #ccc;
}
</style>
