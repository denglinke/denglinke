<template>
	<div class="jur">
		<div class="social-box">
			<el-card class="social-one">
				<div class="abc">
					<div class="one-box">
						<i class="el-icon-info" style="color: #5687fe"></i>
						本月：社保在缴 公积金在缴 增员 减员 入职 离职
					</div>
					<div class="tow">
						<el-button type="danger">历史归档</el-button>
						<el-button type="primary">202001报表</el-button>
					</div>
				</div>
			</el-card>
			<el-card>
				<div class="made">
					<div class="con-zero">
						<p>部门</p>
					</div>
					<div class="con">
						<div class="con-one" v-for="(item, index) in lists" :key="index">
							<input type="checkbox" />
							<div class="names">{{ item.name }}</div>
						</div>
					</div>
				</div>
				<div class="laoliu">
					<div>
						社保城市 <span><input type="checkbox" />北京</span>
					</div>
				</div>
				<div class="laoliu">
					<div>
						公积金城市 <span><input type="checkbox" />北京</span>
					</div>
				</div>
			</el-card>
			<el-table class="tab" :data="arr" style="width: 100%">
				<el-table-column label="序号" type="index" width="60" />
				<el-table-column prop="username" sortable label="姓名" />
				<el-table-column prop="mobile" sortable label="手机" />
				<el-table-column prop="workNumber" sortable label="工号" />
				<el-table-column prop="departmentName" sortable label="部门" />
				<el-table-column prop="timeOfEntry" sortable label="入职时间" />
				<el-table-column prop="leaveTime" sortable label="离职时间" />
				<el-table-column prop="participatingInTheCity" label="社保城市" />
				<el-table-column prop="providentFundCity" label="公积金城市" />
				<el-table-column prop="socialSecurityBase" label="社保基数" />
				<el-table-column prop="providentFundBase" label="公益金基数" />
				<el-table-column label="操作" width="140">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import { department, securitys } from '../../api/security'
export default {
	name: "",
	data () {
		return {
			lists: [],
			arr: []
		}
	},
	methods: {
		getLists () {
			department().then(res => {
				console.log(res);
				this.lists = res.data.data.depts
			})

		},
		getArr () {
			securitys().then(res => {
				console.log(res);
				this.arr = res.data.data.rows
			})
		},
		handleClick (row) {
			this.$router.push({
				path: "/children",
				query: {
					id: row.processId
				}
			})
		}
	},
	created () {
		this.getLists()
		this.getArr()
	}
}
</script>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}

.jur {
	padding: 20px;
}

.social-box {
	width: 100%;
	height: 80px;
	margin-bottom: 10px;
}

.social-one {
	height: 80px;
	line-height: 35px;
	width: 100%;
	margin-bottom: 10px;

	.abc {
		display: flex;

		.one-box {
			height: 30px;
			font-size: 15px;
			text-align: center;
			width: 400px;
			line-height: 30px;
			background-color: #e6f7ff;
			border: 1px solid #9fdaff;
		}

		.tow {
			margin-left: 600px;
			margin-right: 20px;

			.el-button {
				padding: 8px 15px 8px 15px;
			}
		}
	}
}

.made {
	display: flex;
	padding: 10px;

	.con-zero {
		width: 80px;
		font-weight: 700;

		p {
			width: 80px;
			text-align: right;
		}
	}
}

.con {
	display: flex;
	flex-flow: wrap;
}

.con-one {
	display: flex;
	flex-flow: wrap;
	align-items: center;
	margin-bottom: 30px;
	margin-left: 15px;
	margin-right: 15px;

	.names {
		margin-left: 5px;
	}
}

.laoliu {
	margin: 10px;

	div {
		width: 145px;
		text-align: right;
		font-weight: 700;

		span {
			margin-left: 10px;
			font-weight: 400;

			input {
				margin-right: 5px;
			}
		}
	}
}

.tab {
	margin-top: 20px;
	padding: 10px;
}
</style>
