<template>
  <div>
    <el-breadcrumb separator="/" v-for="(item, index) in $route.meta" :key="index">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ item.title }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <div>
        <div class="box-son">
          <el-input placeholder="请输入搜索内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="search(input3)"></el-button>
          </el-input>
          <el-button type="primary" class="adduser" @click="dialogVisible = true">添加商品</el-button>
        </div>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column label="#" type="index"> </el-table-column>
          <el-table-column prop="goods_name" label="商品名称" width="600"> </el-table-column>
          <el-table-column prop="goods_price" label="商品价格(元)" width="110"> </el-table-column>
          <el-table-column prop="goods_weight" label="商品重量" width="90"> </el-table-column>
          <el-table-column prop="add_time" label="创建时间" width="180">
            <template slot-scope="scope">
              {{ new Date(scope.row.add_time).toLocaleString() }}
            </template>
          </el-table-column>
          <el-table-column prop="mg_state" label="状态">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.mg_state" @change="aa(scope.row)"></el-switch>
            </template>
          </el-table-column>
          <el-table-column header-align="center" prop="name" label="操作" width="130">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.$index)"></el-button>
              <!-- <el-button type="warning" icon="el-icon-setting" @click="distribution(scope.$index)"></el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
      </div>
    </el-card>

    <!-- 对话框 -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="50%">
      <!-- 添加的表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
      <!-- 添加的表单 -->
    </el-dialog>
    <!-- 对话框 -->

    <!-- 编辑对话框 -->
    <el-dialog title="编辑用户" :visible.sync="dialogVisiblee" width="50%">
      <!-- 编辑的表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input :disabled="true" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
      <!-- 编辑的表单 -->
    </el-dialog>
    <!-- 编辑对话框 -->

    <!-- 分配角色 -->
    <el-dialog title="分配角色" :visible.sync="dialogVisibleuser" width="50%">
      <p class="p">当前用户：admin</p>
      <p>当前角色：超级管理员</p>

      <div class="fenpei">
        <p>分配新角色:</p>
        <el-select v-model="value" placeholder="请选择" class="xiala">
          <el-option v-for="item in options" :key="item" :label="item" :value="item"> </el-option>
        </el-select>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分配角色 -->

    <!-- 分页 -->
    <div class="block">
      <!-- <span class="demonstration">完整功能</span> -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
      >
      </el-pagination>
    </div>
    <!-- 分页 -->
  </div>
</template>

<script>
let timer = null
export default {
  data() {
    return {
      input3: '',
      tableData: [],
      tableDatas: [],
      users: [],
      dialogVisible: false,
      dialogVisiblee: false,
      dialogVisibleuser: false,
      ruleForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { min: 3, message: '长度在 3 到 16个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 3, message: '长度在 11 个字符', trigger: 'blur' }
        ]
      },
      index: null,
      options: ['1', '2', '3', '4', '5', '6'],
      value: '',
      pagenum: 1,
      pagesize: 3
    }
  },
  methods: {
    getuser() {
      this.$http({ method: 'get', url: '/api/goods' }).then((res) => {
        console.log(res)
        this.tableData = res.data.data.goods
        this.tableDatas = this.tableData
        this.pages()
      })
    },
    aa(row) {
      console.log(row)
      // console.log(e, row, index);
      let uId = row.id
      let type = row.mg_state
      console.log(type, 'type', uId, 'uid')
      this.$http({ method: 'put', url: `/api/usersState/uId=${uId}/type=${type}` }).then((res) => {
        console.log(res)
        type = res.data.data.mg_state
        this.$message({
          message: '恭喜你，状态修改成功！',
          type: 'success'
        })
        // this.getuser()
        // row.mg_state=res.data.data.mg_state
      })
    },
    submitForm(ruleForm) {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.tableData.push({
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            email: this.ruleForm.email,
            mobile: this.ruleForm.mobile
          })
          this.dialogVisible = false
          this.$message({
            message: '恭喜你，添加成功！',
            type: 'success'
          })
          this.ruleForm = {
            username: '',
            password: '',
            mobile: '',
            email: ''
          }
        }
      })
      this.pages()
    },
    // bj(i){   //点击编辑
    //   this.index=i
    // 	this.dialogVisiblee=true
    // 	this.ruleForm={
    // 		...this.tableData[this.index]
    // 	}
    // },
    // editor(){  //确认编辑
    // 		this.$refs.ruleForm.validate((valid)=>{
    // 			if(valid){
    // 				this.$set(this.tableData,this.index,{...this.ruleForm})
    // 				this.dialogVisiblee=false
    // 				this.$message({
    //     		  message: '恭喜你，修改成功！',
    //     		  type: 'success'
    //     		});
    // 				this.ruleForm={
    // 					username:'',
    // 					password:'',
    // 					mobile:'',
    // 					email:'',
    // 				}
    // 			}
    // 		})
    // },
    del(i) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tableData.splice(i, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      // this.pages()
    },
    search(i) {
      //搜索
      this.tableData = this.tableDatas.filter((item) => item.username.includes(i))
      // this.getuser()
      this.pages()
    },
    distribution(i) {
      this.dialogVisibleuser = true
    },
    ok() {
      this.$message({
        message: '恭喜你，修改成功！',
        type: 'success'
      })
      this.dialogVisibleuser = false
    },

    //分页
    pages() {
      let arr = this.tableDatas
      this.tableData = arr.slice((this.pagenum - 1) * this.pagesize, this.pagenum * this.pagesize)
    },
    handleSizeChange(val) {
      this.pagesize = val
      this.pages()
    },
    handleCurrentChange(val) {
      this.pagenum = val
      this.pages()
    }
  },
  created() {
    this.getuser()
    this.pages()
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.fenpei {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.box-card {
  margin-top: 30px;
}

.box-son {
  display: flex;
  width: 500px;
  margin-bottom: 30px;
}

.adduser {
  margin-left: 20px;
}

.xiala {
  margin-left: 10px;
}

.p {
  margin-bottom: 10px;
}
</style>
