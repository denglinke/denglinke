<template>
  <div class="setup">
    <div class="top">
      <h4 @click="flag = 0" :class="flag == 0 ? 'color' : ''">角色管理</h4>
      <h4 @click="flag = 1" :class="flag == 1 ? 'color' : ''">公司信息</h4>
    </div>
    <div class="br"></div>
    <div class="role" v-show="flag == 0">
      <el-button type="primary" size="mini" @click="dialogVisible = true"
        >新增角色</el-button
      >
      <!-- 表格 -->
      <el-table :data="list" style="width: 100%" border>
        <el-table-column label="序号" type="index" width="150" />
        <el-table-column prop="name" label="角色名" sortable />
        <el-table-column prop="description" label="描述" sortable />
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button
              link
              type="success"
              size="mini"
              @click="addRole(scope.row.id)"
              >分配权限</el-button
            >
            <el-button
              link
              type="primary"
              size="mini"
              @click="editRole(scope.row.id)"
              >修改</el-button
            >
            <el-button link type="danger" size="mini" @click="del(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 新增 -->
      <el-dialog :visible.sync="dialogVisible" title="新增角色" width="40%">
        <el-form :model="form" label-width="100px">
          <el-form-item label="角色名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="角色描述">
            <el-input v-model="form.description" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="add"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
      <!-- 分配 -->
      <el-dialog :visible.sync="dialogVisible1" title="分配权限" width="40%">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[0, 1]"
          :default-checked-keys="[
            '604f7df5f900be1850edb152',
            '604f7e50f900be1850edb155',
            '604f7e79f900be1850edb158'
          ]"
          :props="defaultProps"
        >
        </el-tree>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible1 = false">取消</el-button>
            <el-button type="primary" @click="Addroleokk"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
      <!-- 编辑 -->
      <el-dialog :visible.sync="dialogVisible2" title="编辑角色" width="40%">
        <el-form :model="form2" label-width="100px">
          <el-form-item label="角色名称">
            <el-input v-model="form2.name" />
          </el-form-item>
          <el-form-item label="角色描述">
            <el-input v-model="form2.description" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible2 = false">取消</el-button>
            <el-button type="primary" @click="editRoleok"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <!-- 公司管理模块 -->
    <div class="com" v-show="flag == 1">
      <div class="box">
        <span>企业名称</span>
        <input class="input" v-model="list.name" type="text" disabled />
      </div>
      <div class="box">
        <span>公司地址</span>
        <input
          class="input"
          v-model="list.companyAddress"
          type="text"
          disabled
        />
      </div>
      <div class="box">
        <span>公司电话</span>
        <input class="input" v-model="list.companyPhone" type="text" disabled />
      </div>
      <div class="box">
        <span>邮箱</span>
        <input class="input" v-model="list.mailbox" type="text" disabled />
      </div>
      <div class="box">
        <span>备注</span>
        <input class="input" v-model="list.remarks" type="text" disabled />
      </div>
    </div>
  </div>
</template>

<script>
import {
  setting,
  AddSetup,
  Delrole,
  Editrole,
  AddroleOk,
  Addrole
} from "../../api/setting";
export default {
  name: "",
  data() {
    return {
      flag: 0, //切换状态
      dialogVisible: false,
      list: [],
      dialogFormVisible: false,
      form: {
        name: "",
        description: ""
      },
      formLabelWidth: "120px",
      dialogVisible1: false,
      data: [],
      defaultProps: {
        children: "children",
        label: "name"
      },
      dialogVisible2: false,
      form2: {
        name: "",
        description: ""
      },
      params: {
        page: 1,
        pagesize: 10,
        total: 0
      }
    };
  },
  methods: {
    getList() {
      setting(this.params).then((res) => {
        console.log(res);
        this.list = res.data.data.rows;
      });
    },
    del(id) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          Delrole(id).then((res) => {
            console.log(res);
            this.getList();
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    add() {
      AddSetup(this.form).then((res) => {
        if (res.data.code == 10000) {
          this.$message({
            message: res.data.message,
            type: "success"
          });
          this.getList();
        } else {
          this.$message({
            message: res.data.message,
            type: "warning"
          });
        }
      });
      this.dialogVisible = false;
      this.form = {};
    },
    addRole(id) {
      this.dialogVisible1 = true;
      Addrole(id).then((res) => {
        console.log(res);
        this.data = res.data.data;
      });
    },
    Addroleokk() {
      this.dialogVisible1 = false;
      AddroleOk().then((res) => {
        console.log(res);
        if (res.data.code == 10000) {
          this.$message({
            message: res.data.message,
            type: "success"
          });
        } else {
          this.$message({
            message: res.data.message,
            type: "warning"
          });
        }
      });
    },
    editRole(id) {
      this.dialogVisible2 = true;
      Editrole(id).then((res) => {
        console.log(res);
        this.form2 = res.data.data;
      });
    },
    editRoleok() {
      this.dialogVisible2 = false;
      this.$message({
        message: "您修改的角色为系统默认数据-请添加新角色再修改",
        type: "warning"
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
.setup {
  margin: 15px;
  background-color: #fff;
  padding: 20px;
}

.top {
  width: 300px;
  display: flex;
  justify-content: space-around;

  h4 {
    margin: 0;
    padding: 0 15px;
    padding-bottom: 10px;
  }
}

.color {
  border-bottom: 3px solid #409eff;
  color: #409eff;
}
.el-table {
  margin-top: 15px;
}
.role {
  padding: 30px 50px;
}
.com {
  margin-top: 30px;
  margin-left: 150px;

  .box {
    line-height: 60px;
    display: flex;
    align-items: center;

    span {
      width: 100px;
      text-align: right;
    }

    .input {
      margin-left: 10px;
      width: 320px;
      height: 40px;
      background-color: #f5f7fa;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 0 6px;
      color: #aaa;
    }
  }
}
</style>
