<template>
  <div class="">
    <div class="name">
      <ul>
        <li v-for="(item, index) in arr" :key="index">{{ item.name }}</li>
      </ul>
    </div>
    <div class="">
      <button class="a" @click="single">单人点名</button>
      <button class="b" @click="double">双人点名</button>
      <button class="c" @click="schoolboy">男生点名</button>
      <button class="d" @click="girl">女生点名</button>
    </div>
    <h1>{{ Rollcall }}</h1>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup (props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      arr: [
        {
          name: "喜羊羊",
          sex: 0,
        },
        {
          name: "小龙",
          sex: 0,
        },
        {
          name: "小红",
          sex: 1,
        },
        {
          name: "灰太狼",
          sex: 0,
        },
        {
          name: "小绿",
          sex: 1,
        },
        {
          name: "沸羊羊",
          sex: 0,
        },
        {
          name: "红太狼",
          sex: 1,
        },
        {
          name: "小刘",
          sex: 0,
        },
        {
          name: "小花",
          sex: 1,
        },
        {
          name: "小灰灰",
          sex: 0,
        },
        {
          name: "美羊羊",
          sex: 1,
        },
        {
          name: "老王",
          sex: 0,
        },
        {
          name: "机器狼",
          sex: 0,
        },
        {
          name: "大妹妹",
          sex: 1,
        },
        {
          name: "小梦",
          sex: 1,
        },
        {
          name: "懒羊羊",
          sex: 0,
        },
      ],
      current: "",
      Rollcall: "",
      time: null,
      num: 0,
    });
    const single = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          var nums = Math.floor(Math.random() * data.arr.length);
          data.num++;
          data.Rollcall = data.arr[nums].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.Rollcall = data.arr[nums].name;
            data.arr.splice(nums, 1);
          }
        }, 100);
      }
    };
    const double = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          var num1 = Math.floor(Math.random() * data.arr.length);
          var num2 = Math.floor(Math.random() * data.arr.length);
          data.num++;
          data.Rollcall = data.arr[num1].name + "," + data.arr[num2].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.Rollcall = data.arr[num1].name + "," + data.arr[num2].name;
            data.arr.splice(num1, 1);
            data.arr.splice(num2, 1);
          }
        }, 100);
      }
    };
    // 是否是男生
    const schoolboy = () => {
      var arr1 = [];
      if (arr1.length == 0) {
        data.arr.forEach((i) => {
          if (i.sex == 0) {
            arr1.push(i);
          }
        });
      }
      if (data.time == null) {
        data.time = setInterval(() => {
          var num1 = Math.floor(Math.random() * arr1.length);
          data.num++;
          data.Rollcall = arr1[num1].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.Rollcall = arr1[num1].name;
            arr1.splice(num1, 1);
          }
        }, 100);
      }
    };
    // 是否是女生
    const girl = () => {
      var arr1 = [];
      if (arr1.length == 0) {
        data.arr.forEach((i) => {
          if (i.sex == 1) {
            arr1.push(i);
          }
        });
      }

      if (data.time == null) {
        data.time = setInterval(() => {
          var num1 = Math.floor(Math.random() * arr1.length);
          data.num++;
          data.Rollcall = arr1[num1].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.Rollcall = arr1[num1].name;
            arr1.splice(num1, 1);
          }
        }, 100);
      }
    };
    return { ...toRefs(data), single, double, schoolboy, girl };
  },
};
</script>

<style lang="scss" scoped>
.name {
  width: 600px;
  height: 300px;
  border: 1px solid #ccc;
  margin: 0 auto;
  margin-bottom: 20px;
}

ul {
  width: 500px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;

  li {
    list-style: none;
    flex: 20%;
    text-align: center;
    height: 50px;
    background: linear-gradient(#dc1010, blue, purple);
    line-height: 50px;
    color: #fff;
    font-weight: 700;
    margin: 5px;
    border-radius: 10px;
  }
}

button {
  margin-left: 20px;
  width: 100px;
  height: 30px;
  border: 0;
  border-radius: 15px;
  color: #fff;
  line-height: 30px;
  margin-bottom: 20px;
}

.a {
  background-color: red;
}

.b {
  background-color: blue;
}

.c {
  background-color: purple;
}

.d {
  background-color: pink;
}

h1 {
  margin: 0 auto;
  width: 200px;
  background-color: aqua;
  border-radius: 20px;
}
</style>
