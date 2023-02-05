<template>
	<div class="company">
		<el-card>
			<el-button type="primary" @click="dialogFormVisible = true">添加权限</el-button>
		</el-card>
		<el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="lists" border
			style="width: 100%">
			<el-table-column prop="name" label="名称" />
			<el-table-column prop="code" label="标识" />
			<el-table-column prop="description" label="描述" />
			<el-table-column prop="username" label="操作" width="280">
				<span class="ons" @click="dialogFormVisible = true">添加</span>
				<span class="ons">编辑</span>
				<span class="ons" @click="del(index)">删除</span>
			</el-table-column>
		</el-table>
		<el-dialog title="新增权限点" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="权限名称" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="权限标识" :label-width="formLabelWidth">
					<el-input v-model="form.code" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="权限描述" :label-width="formLabelWidth">
					<el-input v-model="form.description" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="开启">
					<el-switch v-model="form.delivery"></el-switch>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="add">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { permission } from "@/api/permission"
export default {
	name: "",
	data () {
		return {
			lists: [],
			dialogFormVisible: false,
			form: {
				name: "",
				code: "",
				description: ""
			},
			formLabelWidth: "120px"
		}
	},
	methods: {
		del (index) {
			this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			})
				.then(() => {
					this.list.splice(index, 1)
					this.$message({
						type: "error",
						message: "没有权限无法删除成功"
					})
				})
				.catch(() => {
					this.$message({
						type: "error",
						message: "没有权限无法删除成功"
					})
				})
		},
		add () {
			if (this.form.name == "" || this.form.description == "" || this.form.code == "") {
				this.$message.error("请输入内容")
			} else {
				console.log(this.form)
				this.list.push({ ...this.form })
				this.dialogFormVisible = false
			}
		},
		getlist () {
			permission().then((res) => {
				console.log(res);
				this.lists = res.data.data
			})
		}
	},
	mounted () {

	},
	created () {
		this.getlist()
	}
}
</script>

<style lang="scss" scoped>
.company {
	padding: 10px;
}

.el-card {
	margin: 10px;

	.el-button {
		// float: right;
		margin-left: 1100px;
	}
}

.ons {
	color: rgb(31, 122, 242);
	margin-right: 5px;
}
</style>
