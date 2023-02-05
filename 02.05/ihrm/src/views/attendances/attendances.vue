<template>
  <div class="cheak">
    <div class="cheak-box">
      <el-card class="cheak-one">
        <div class="abc">
          <div class="one-box">
            <i class="el-icon-info" style="color: #5687fe"></i
            >有0条考勤审批尚未处理
          </div>
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
            <div class="con-one" v-for="(item, index) in lists" :key="index">
              <input type="checkbox" />
              <div class="names">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="laoliu">
          <div>
            社保城市
            <span>
              <input type="checkbox" />正常 <input type="checkbox" />旷工
              <input type="checkbox" />事假 <input type="checkbox" />调休
              <input type="checkbox" />迟到 <input type="checkbox" />早退
            </span>
          </div>
        </div>
      </el-card>
    </div>
    <el-card class="tab">
      <el-table
        :header-cell-style="{ textAlign: 'center' }"
        :cell-style="{ textAlign: 'center' }"
        :data="dataList"
        style="width: 100%"
      >
        <el-table-column label="序号" type="index" width="60" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column prop="mobile" label="手机" width="180" />
        <el-table-column prop="companyId" label="3/1">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/2">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/3">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/4">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/5">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/6">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/7">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/8">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/9">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/10">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/11">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/12">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/13">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/14">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/15">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/16">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/17">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/18">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/19">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/20">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/21">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/22">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/23">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/24">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/25">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/26">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/27">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/28">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/29">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/30">旷工</el-table-column>
        <el-table-column prop="companyId" label="3/31">旷工</el-table-column>
      </el-table>
      <div class="auto">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pages.page"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pages.size"
          layout="pager"
          background
          :total="total"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { department, attendances } from "../../api/attendances";
export default {
  name: "",
  data() {
    return {
      lists: [],
      dataList: [],
      pages: {
        page: 1,
        size: 10
      },
      total: 0
    };
  },
  methods: {
    add() {
      this.$router.push("/daochu");
    },
    getArr() {
      department().then((res) => {
        console.log(res);
        this.lists = res.data.data.depts;
      });
    },
    getData() {
      attendances({ page: 1, pagesize: 10, total: 0 }).then((res) => {
        console.log(res);
        this.dataList = res.data.data.data.rows;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pages.size = val;
      this.getData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pages.page = val;
      this.getData();
    }
  },
  created() {
    this.getArr();
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.auto {
  width: 150px;
  margin: 10px auto;
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
  margin-top: 230px;
  padding: 10px;
}
</style>
