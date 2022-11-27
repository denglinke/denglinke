<template>
  <div class="box">
    <main class="cons">
      <!-- 头部图片 -->
      <header class="header">
        <div class="img">
          <img src="../../src/assets/note.75134fb0.svg" alt="note">
        </div>
        <div class="todo">
          To-DoList
        </div>
      </header>
      <!-- 中间字体 -->
      <div class="font">
        <h1 class="title">
          ~ Today I need to ~
        </h1>
        <!-- input输入框 按钮 -->
        <div class="apper">
          <div class="input">
            <input type="text" placeholder="Add new todo..." autofocus>
          </div>
          <button type="submit" class="add">
            <span>Submit</span>
          </button>
        </div>
      </div>
      <!-- 下面字体 -->
      <div class="bottom">
        <img src="../assets/_日历.png" alt="note">
        <span class="msg">Congrat, you have no more tasks to do</span>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {}
  },
  methods: {},
  created() { },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

body {
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
  background-repeat: no-repeat;
}

.box {
  width: 440px;
  height: 300px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 20px;
}

.cons {
  padding: 30px 40px 20px;
  text-align: center;
  width: 440px;
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
}

/* 头部图片 */
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header .img {
  width: 80px;
  margin-right: 10px;
}

.header .todo {
  transform: rotate(3deg);
  font-size: 18px;
  padding: 0.25em 0.8em 0.15em;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  color: #fff;
  background: #fe7345;
}

/* 中间字体  */
.font {
  margin-top: 25px;
}

.font .title {
  font-size: 20px;
  margin-bottom: 18px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

/* 输入框按钮 */
.apper {
  display: flex;
  justify-content: center;
}

.input {
  display: inline-block;
  flex-grow: .65;
  margin-right: 15px;
}

.input input {
  width: 100%;
  border: none;
  border-bottom: 3px dashed #fe7345;
  padding: 5px 0 3px;
  font-size: 14px;
  background: transparent;
}

.add {
  position: relative;
  transform: rotate(4deg);
  border-radius: 6px;
  transition: transform .25s cubic-bezier(.175, .885, .32, 1.275);
}

.add span {
  box-sizing: border-box;
  position: relative;
  display: block;
  font-size: 16.5px;
  padding: 0.34em 0.84em;
  border: 2px solid #494a4b;
  border-radius: inherit;
  background-color: #fff;
}

/* 下面字体 */
.bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
  -webkit-animation: zoom-132cabf7 .45s ease-in-out;
  animation: zoom-132cabf7 .45s ease-in-out;
}

.bottom .msg {
  font-size: 13px;
  padding-top: 5px;
  color: rgba(73, 74, 75, .45);
}

.bottom img {
  width: 20px;
  height: 20px;
}
</style>