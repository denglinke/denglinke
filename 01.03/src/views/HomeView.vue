<template>
	<div class="home">
		<div class="box">
			<p class="one"><img src="../assets/下载.png" alt="" /></p>
			<input type="text" /><br />
			<input type="text" /><br />
			<button>登录</button>
			<p class="tow">还没有账号？立即注册</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
export default defineComponent({
	name: "HomeView",
	components: {}
})
</script>

<style>
.home {
	width: 100%;
	height: 100%;
	background-image: url(../assets/login.c75bab6.jpg);
	background-size: cover;
}

.box {
	width: 500px;
	height: 400px;
	margin: 0px auto;
	padding-top: 150px;
}

.one {
	color: #fff;
	font-size: 40px;
	font-weight: 400;
	margin-bottom: 15px;
}

input {
	width: 420px;
	line-height: 40px;
	padding: 5px;
	margin-top: 20px;
	background-color: #d4e5ff;
	border: 0;
	border-radius: 5px;
	color: #4088fe;
}

button {
	width: 440px;
	height: 60px;
	color: #ffff;
	background-color: #407ffe;
	border: 0;
	margin-top: 15px;
	margin-bottom: 20px;
	font-size: 20px;
	border-radius: 5px;
}

.tow {
	color: #fff;
}
</style>
