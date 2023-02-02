<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse ? '63px' : '200px'">
        <img src="../assets/微信图片_20230105194248.png" alt="" />
        <el-menu default-active="2" class="el-menu-vertical-demo" text-color="#fff" :collapse="isCollapse" router>
          <el-menu-item index="/dashboard">
            <i class="el-icon-eleme" style="color: #fff"></i>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="organizational">
            <i class="el-icon-share" style="color: #fff"></i>
            <span>组织架构</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-user-solid" style="color: #fff"></i>
            <span>员工</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-s-tools" style="color: #fff"></i>
            <span>公司设置</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-s-cooperation" style="color: #fff"></i>
            <span>权限管理</span>
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
}

.el-container {
  width: 100%;
  height: 100%;
}

.one {}

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
