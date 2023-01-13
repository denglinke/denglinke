<template>
	<div class="cheak">
		<div class="cheak-box">
			<el-card class="cheak-one">
				<div class="abc">
					<div class="one-box"><i class="el-icon-info" style="color: #5687fe"></i>有0条考勤审批尚未处理</div>
					<div class="tow">
						<el-button type="danger" @click="add">导入</el-button>
						<el-button type="warning">提醒</el-button>
						<el-button type="primary">设置</el-button>
						<el-button>历史归档</el-button>
						<el-button type="primary">202303报表</el-button>
					</div>
				</div>
			</el-card>
			<el-card>
				<div class="made">
					<div class="con-zero">
						<p>部门</p>
					</div>
					<div class="con">
						<div class="con-one" v-for="(item, index) in list" :key="index">
							<input type="checkbox" />
							<div class="names">{{ item.name }}</div>
						</div>
					</div>
				</div>
				<div class="laoliu">
					<div>
						社保城市
						<span>
							<input type="checkbox" />正常
							<input type="checkbox" />旷工
							<input type="checkbox" />事假
							<input type="checkbox" />调休
							<input type="checkbox" />迟到
							<input type="checkbox" />早退
						</span>
					</div>
				</div>
			</el-card>
		</div>
		<el-card class="tab">
			<el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="tableData"
				style="width: 100%">
				<el-table-column label="序号" type="index" width="60" />
				<el-table-column prop="username" label="姓名" />
				<el-table-column prop="workNumber" label="工号" />
				<el-table-column prop="departmentName" label="部门" />
				<el-table-column prop="mobile" label="手机" width="180" />
				<el-table-column prop="companyId" label="3/1" />
				<el-table-column prop="companyId" label="3/2" />
				<el-table-column prop="companyId" label="3/3" />
				<el-table-column prop="companyId" label="3/4" />
				<el-table-column prop="companyId" label="3/5" />
				<el-table-column prop="companyId" label="3/6" />
				<el-table-column prop="companyId" label="3/7" />
				<el-table-column prop="companyId" label="3/8" />
				<el-table-column prop="companyId" label="3/9" />
				<el-table-column prop="companyId" label="3/10" />
				<el-table-column prop="companyId" label="3/11" />
				<el-table-column prop="companyId" label="3/12" />
				<el-table-column prop="companyId" label="3/13" />
				<el-table-column prop="companyId" label="3/14" />
				<el-table-column prop="companyId" label="3/15" />
				<el-table-column prop="companyId" label="3/16" />
				<el-table-column prop="companyId" label="3/17" />
				<el-table-column prop="companyId" label="3/18" />
				<el-table-column prop="companyId" label="3/19" />
				<el-table-column prop="companyId" label="3/20" />
				<el-table-column prop="companyId" label="3/21" />
				<el-table-column prop="companyId" label="3/22" />
				<el-table-column prop="companyId" label="3/23" />
				<el-table-column prop="companyId" label="3/24" />
				<el-table-column prop="companyId" label="3/25" />
				<el-table-column prop="companyId" label="3/26" />
				<el-table-column prop="companyId" label="3/27" />
				<el-table-column prop="companyId" label="3/28" />
				<el-table-column prop="companyId" label="3/29" />
				<el-table-column prop="companyId" label="3/30" />
				<el-table-column prop="companyId" label="3/31" />
			</el-table>
			<div class="page">
				<el-pagination layout="prev, pager, next" :page-size="10" :total="11" />
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	name: "",
	data () {
		return {
			list: [
				{ "id": "604e115c7bfcfa45d019d3e9", "pid": "-1", "name": "传智教育", "code": "1", "introduce": "程序员的摇篮", "createTime": "2023-01-06 15:41:28" }, { "id": "604e21feb205b95968e13129", "pid": "", "name": "总裁办", "code": "1001222", "manager": "管理员", "introduce": "公司战略部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e222bb205b95968e1312a", "pid": "", "name": "行政部", "code": "XZB", "manager": "管理员", "introduce": "行政部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e223fb205b95968e1312b", "pid": "", "name": "人事部", "code": "RSB", "manager": "巴思慧", "introduce": "人事部", "createTime": "2023-01-13 16:51:03" }, { "id": "604e2251b205b95968e1312c", "pid": "", "name": "财务部111", "code": "CWB1", "manager": "管理员", "introduce": "财务部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e2262b205b95968e1312d", "pid": "604e2251b205b95968e1312c", "name": "财务核算部22", "code": "CWHSB2", "manager": "管理员", "introduce": "财务核算部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e227db205b95968e1312e", "pid": "604e2251b205b95968e1312c", "name": "税务管理部", "code": "SWGLN", "manager": "管理员", "introduce": "税务管理部", "createTime": "2021-03-14 22:47:25" }, { "id": "604e2297b205b95968e1312f", "pid": "604e2251b205b95968e1312c", "name": "薪资管理部", "code": "XZGLB", "manager": "管理员", "introduce": "薪资管理部", "createTime": "2021-03-14 22:47:25" }, { "id": "6051ad90e93db6522c1d00d2", "pid": "", "name": "技术部", "code": "JSB", "manager": "孙财", "introduce": "技术部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051adb6e93db6522c1d00d3", "pid": "6051ad90e93db6522c1d00d2", "name": "Java研发部", "code": "JYFB", "manager": "管理员", "introduce": "JAVA研发部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051add6e93db6522c1d00d4", "pid": "6051ad90e93db6522c1d00d2", "name": "Python研发部", "code": "PYFB", "manager": "罗晓晓", "introduce": "Python研发部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051adefe93db6522c1d00d5", "pid": "6051ad90e93db6522c1d00d2", "name": "Php研发部", "code": "PhpYFB", "manager": "孙财", "introduce": "Php研发部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051ae03e93db6522c1d00d6", "pid": "", "name": "运营部", "code": "YYB", "manager": "孙财", "introduce": "运营部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051ae15e93db6522c1d00d7", "pid": "", "name": "市场部", "code": "SCB", "manager": "孙财", "introduce": "市场部", "createTime": "2021-03-17 15:18:23" }, { "id": "6051ae28e93db6522c1d00d8", "pid": "6051ae15e93db6522c1d00d7", "name": "北京事业部", "code": "BJSYB", "manager": "孙财", "introduce": "BJSYB", "createTime": "2021-03-17 15:18:23" }, { "id": "6051ae3de93db6522c1d00d9", "pid": "6051ae15e93db6522c1d00d7", "name": "上海事业部", "code": "SHSYB", "manager": "文吉星", "introduce": "上海事业部", "createTime": "2021-03-17 15:18:23" }, { "id": "63c1461d81b4da1595e89292", "pid": "63c143fb81b4da1595e89282", "name": "规格", "code": "规格", "manager": "巴思慧", "introduce": "规格", "createTime": "2023-01-06 15:41:28" }, { "id": "63c14de081b4da1595e89323", "pid": "604e2251b205b95968e1312c", "name": "薪资管理部门", "code": "123", "manager": "巴思慧", "introduce": "546757576", "createTime": "2023-01-06 15:41:28" }, { "id": "63c1594a81b4da1595e89376", "pid": "6051ae03e93db6522c1d00d6", "name": "运营什么部", "code": "1251613", "manager": "董昊空", "introduce": "什么咩咩咩咩吗", "createTime": "2023-01-06 15:41:28" }, { "id": "63c15b7e81b4da1595e89399", "pid": "604e21feb205b95968e13129", "name": "哒哒哒", "code": "111", "manager": "菜徐坤", "introduce": "鹅鹅鹅鹅鹅", "createTime": "2023-01-06 15:41:28" }, { "id": "63c15c8781b4da1595e8939b", "pid": "604e2251b205b95968e1312c", "name": "新年快乐", "code": "3333", "manager": "武高丽", "introduce": "出葡萄不吐葡萄皮", "createTime": "2023-01-06 15:41:28" }, { "id": "63c15e1a81b4da1595e893b2", "pid": "604e21feb205b95968e13129", "name": "嗯嗯翁无", "code": "444·", "manager": "前端郭二鸣", "introduce": "恶趣味无群", "createTime": "2023-01-06 15:41:28" }
			],
			tableData: [
				{
					"departmentId": "1175310929766055936",
					"departmentName": "总裁办",
					"id": "1063705989926227968",
					"mobile": "13800000002",
					"username": "管理员",
					"workNumber": "9002",
					"companyId": "旷工"
				},
				{
					"departmentId": "1175310929766055936",
					"departmentName": "市场部",
					"id": "1063705989926227968",
					"mobile": "13800000003",
					"username": "孙财",
					"workNumber": "111",
					"companyId": "旷工"
				},
				{
					"departmentId": "1175310929766055936",
					"departmentName": "人事部",
					"id": "1063705989926227968",
					"mobile": "13800000004",
					"username": "罗晓晓",
					"workNumber": "1111",
					"companyId": "旷工"
				},
				{
					"departmentId": "1175310929766055936",
					"departmentName": "人事部",
					"id": "1063705989926227968",
					"mobile": "13800000001",
					"username": "文吉星",
					"workNumber": "1001",
					"companyId": "旷工"
				},
				{
					"departmentId": "1175310929766055936",
					"departmentName": "人事部",
					"id": "1063705989926227968",
					"mobile": "13400000002",
					"username": "巴思慧",
					"workNumber": "1002",
					"companyId": "旷工"
				},
				{
					"departmentId": "1175310929766055936",
					"departmentName": "总裁办",
					"id": "1063705989926227968",
					"mobile": "13500000001",
					"username": "乔海",
					"workNumber": "2001",
					"companyId": "旷工"
				},
				{
					"departmentId": "1175310929766055936",
					"departmentName": "总裁办",
					"id": "1063705989926227968",
					"mobile": "13500000002",
					"username": "董昊空",
					"workNumber": "2002",
					"companyId": "旷工"
				},
				{
					"departmentId": "1175310929766055936",
					"departmentName": "财务部",
					"id": "1063705989926227968",
					"mobile": "13500000003",
					"username": "周乐天",
					"workNumber": "2003",
					"companyId": "旷工"
				},
				{
					"departmentId": "1175310929766055936",
					"departmentName": "总裁办",
					"id": "1063705989926227968",
					"mobile": "13600000001",
					"username": "吕勇锐",
					"workNumber": "0001",
					"companyId": "旷工"
				},
				{
					"departmentId": "1175310929766055936",
					"departmentName": "总裁办",
					"id": "1063705989926227968",
					"mobile": "13600000002",
					"username": "袁永安",
					"workNumber": "0002",
					"companyId": "旷工"
				}
			]
		}
	},
	methods: {
		add () {
			this.$router.push("/shangchuan")
		}
	},
	created () { }
}
</script>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}

.cheak {
	padding: 20px;
}

.page {
	width: 100px;
	margin-left: 550px;
	margin-top: 10px;
	display: flex;
}

.cheak-box {
	width: 100%;
	height: 80px;
	margin-bottom: 10px;
}

.cheak-one {
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
			width: 250px;
			line-height: 30px;
			background-color: #e6f7ff;
			border: 1px solid #9fdaff;
		}

		.tow {
			margin-left: 500px;
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
		width: 445px;
		text-align: right;
		font-weight: 700;

		span {
			margin-left: 10px;
			font-weight: 400;

			input {
				margin-right: 10px;
			}
		}
	}
}

.tab {
	margin-top: 280px;
	padding: 10px;
}
</style>
