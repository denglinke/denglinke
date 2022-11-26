<template>
  <div class="home">
    <!-- 模板字符串渲染 -->
    <h1>{{ msg }}</h1>
    <span v-bind:title="mssage">鼠标停几秒查看提示信息</span><br />
    <span :title="mssage">鼠标停几秒</span><br />
    <span v-if="flag">六六六</span>
    <span v-else>大嘴巴子</span>
    <span v-if="flagVisible">巴卡玛卡</span>
    <button v-on:click="handleChange">替换</button><br>
    <span v-show="flag">唔西迪西</span>
    <div>
      <ul>
        <li v-for="(item, index) in week" :key="index">{{ item.name }}</li>
      </ul>
      <button @click="handleUpdatelist">修改下标数组</button>
      <input @change="handleInput" v-model="inputValue">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "呵呵呵呵呵呵",
      mssage: "页面加载" + new Date().toLocaleString(),
      flag: true,
      flagVisible: true,
      week: [
        {
          id: 1,
          name: '坏弟弟'
        },
        {
          id: 2,
          name: '好弟弟'
        },
        {
          id: 3,
          name: '大弟弟'
        },
        {
          id: 4,
          name: '小弟弟'
        },
      ]
    };
  },
  methods: {
    handleChange() {
      this.flag = !this.flag
      this.flagVisible = !true.flagVisible
    },
    handleUpdatelist() {
      this.week[0].name = "我是傻逼"
    },
    handleInput(e) {
      console.log(e);
      console.log(this.inputValue);
    }
  },
};
</script>
