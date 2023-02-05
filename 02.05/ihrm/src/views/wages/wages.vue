<template>
  <div class="wages">
    <div class="wages-box">
      <el-card class="wages-one">
        <div class="abc">
          <div class="one-box">
            <i class="el-icon-info" style="color: #5687fe"></i>
            本月0:入职0 离职0 调薪0 未定薪0
          </div>
          <div class="tow">
            <el-button type="danger" @click="$router.push('/shezhi')"
              >设置</el-button
            >
            <el-button type="primary" @click="$router.push('/wagesss')"
              >202001报表</el-button
            >
          </div>
        </div>
      </el-card>
      <el-card>
        <div class="laoliu">
          <div class="one">
            聘用形式：<span><input type="checkbox" />正式</span
            ><span><input type="checkbox" />非正式</span>
          </div>
        </div>
        <div class="laoliu">
          <div class="one">
            员工状态： <span><input type="checkbox" />在职</span
            ><span><input type="checkbox" />离职</span>
          </div>
        </div>
        <div class="made">
          <div class="con-zero">
            <p>部门:</p>
          </div>
          <div class="con">
            <div class="con-one" v-for="(item, index) in lists" :key="index">
              <input type="checkbox" />
              <div class="names">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </el-card>
      <el-table class="tab" :data="tableData" style="width: 100%">
        <el-table-column label="序号" type="index" width="60" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="mobile" label="手机" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column label="聘用形式"> 未知 </el-table-column>
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column label="入职时间" width="220">
          <template slot-scope="scope">
            {{ new Date(scope.row.timeOfEntry).toLocaleString() }}
          </template>
        </el-table-column>
        <el-table-column label="工资基数">
          <template slot-scope="scope">
            {{ scope.row.currentPostWage + scope.row.currentBasicSalary }}
          </template>
        </el-table-column>
        <el-table-column label="津贴方案">通用方案</el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="primary">调薪</el-button>
            <el-button type="text">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="20"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { department, reports } from "../../api/wages";
export default {
  name: "",
  data() {
    return {
      lists: [],
      tableData: [],
      dates: {
        approvalsStateChecks: [],
        approvalsTypeChecks: [],
        departmentChecks: [],
        page: 1,
        pageSize: 10,
        total: 0
      }
    };
  },
  methods: {
    getData() {
      department().then((res) => {
        console.log(res);
        this.lists = res.data.data.depts;
      });
    },
    getList() {
      reports(this.dates).then((res) => {
        console.log(res);
        this.tableData = res.data.data.rows;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    this.getData();
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.wages {
  padding: 20px;
}

.wages-box {
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
}

.wages-one {
  height: 80px;
  line-height: 35px;
  width: 100%;
  margin-bottom: 10px;

  .abc {
    display: flex;
    position: relative;

    .one-box {
      height: 30px;
      font-size: 15px;
      text-align: center;
      width: 300px;
      line-height: 30px;
      background-color: #e6f7ff;
      border: 1px solid #9fdaff;
    }

    .tow {
      position: absolute;
      right: 10px;
    }
  }
}

.made {
  display: flex;
  padding: 10px;

  .con-zero {
    width: 80px;
    font-weight: 600;

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
  margin-left: 25px;

  div {
    width: 220px;
    text-align: right;
    font-weight: 550;

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

.one {
  display: flex;
}
</style>
