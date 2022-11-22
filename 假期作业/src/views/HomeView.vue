
<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="$router.path" class="el-menu-vertical-demo" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b" router>
          <el-menu-item index="/index">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu v-for="(item, index) in list" :key="index" :index="item.path">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="(ele, i) in item.children" :key="i" :index="ele.path">{{ ele.name }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      list: [
        {
          name: "数据管理",
          path: "/",
          children: [
            {
              name: "用户列表",
              path: "/ListOne",
            },
            {
              name: "商家列表",
              path: "/ListTow",
            },
            {
              name: "食品列表",
              path: "/ListThree",
            },
            {
              name: "订单列表",
              path: "/ListFour",
            },
            {
              name: "管理员列表",
              path: "/ListFive",
            },
          ],
        },
        {
          name: "添加数据",
          path: "/GetListOne",
          children: [
            {
              name: "添加商铺",
              path: "/GetListOne",
            },
            {
              name: "添加商品",
              path: "/GetListTow",
            },
          ],
        },
        {
          name: "图表",
          path: "/Table",
          children: [
            {
              name: "用户分布",
              path: "/Table",
            },
          ],
        },
        {
          name: "编辑",
          path: "/Text",
          children: [
            {
              name: "文本编辑",
              path: "/Text",
            },
          ],
        },
        {
          name: "设置",
          path: "/Setup",
          children: [
            {
              name: "管理员设置",
              path: "/Setup",
            },
          ],
        },
        {
          name: "说明",
          path: "/Explain",
          children: [
            {
              name: "说明",
              path: "/Explain",
            },
          ],
        },
      ],
    }
  },
  methods: {},
  created() {

  },
}
</script>

<style lang="scss">
.home {
  height: 100%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
}

.el-aside {
  background-color: #1f2d3d;
  color: #333;
  min-height: 100%
}

.el-menu {
  min-height: 100%
}

.el-container {
  height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}
</style>