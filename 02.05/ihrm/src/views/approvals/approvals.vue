<template>
	<div class="yearBox">
		<el-card class="daBox">
			<button class="dangBox">
				<i class="el-icon-info" style="color: #5687fe"></i>
				当前审批中0本月审批通过1本月审批驳回0
			</button>
			<el-button type="primary" @click="add">流程设置</el-button>
		</el-card>
		<el-card class="daaBox">
			<el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
				<el-table-column type="selection" width="55" />
				<el-table-column type="index" label="序号" width="140" />
				<el-table-column property="processName" sortable label="审批类型" width="140" />
				<el-table-column property="username" sortable label="申请人" width="140" />
				<el-table-column property="procCurrNodeUserName" sortable label="当前审批人" width="280" />
				<el-table-column property="procData.startTime" sortable label="审批发起时间" width="180">
					<template slot-scope="scope">
						{{ scope.row.procApplyTime | filtimer }}
					</template>
				</el-table-column>

				<el-table-column property="processState" sortable label="审批状态" width="140">
					<template slot-scope="scope">
						<p v-show="scope.row.processState == 2">审批通过</p>
						<p v-show="scope.row.processState == 4">撤销</p>
						<p v-show="scope.row.processState == 1">审批中</p>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="140">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination :page-size="1" :pager-count="11" layout="prev, pager, next" :total="1">
			</el-pagination>
		</el-card>
	</div>
</template>
<script>
import { permission } from '../../api/approvals'
export default {
	data () {
		return {
			tableData: []
		}
	},
	methods: {
		getlist () {
			permission({ page: 1, pageSize: 10, total: 0, year: 2018 }).then((res) => {
				console.log(res);
				this.tableData = res.data.data.rows
			})
		},
		// procData
		handleClick (row) {
			this.$router.push({
				path: "/content",
				query: {
					id: row.processId
				}
			})
			console.log(row);
		},
		add () {
			this.$router.push("/qingjia")
		}
	},
	created () {
		this.getlist()
	},
	mounted () { },
	components: {},
	computed: {},
	filters: {
		filtimer (val) {
			return new Date(val * 1000).toLocaleDateString()
		}
	},
	watch: {}
}
</script>

<style lang="scss" scoped>
.yearBox {
	padding: 0 20px;
}

.daBox {
	margin-top: 20px;
	height: 70px;

	.dangBox {
		height: 30px;
		width: 300px;
		background-color: #e6f7ff;
		border: 1px solid #9fdaff;
	}

	.el-button {
		margin-left: 770px;
	}
}

.daaBox {
	margin-top: 20px;
}

.el-pagination {
	margin-top: 20px;
	margin-left: 1000px;
}
</style>
