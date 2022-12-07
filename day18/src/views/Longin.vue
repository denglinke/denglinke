<template>
	<div class="longin">
		<el-form class="form">
			<img src="../assets/太空人.jpeg" alt="" />
			<el-form-item>
				<el-input v-model="form.username" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="form.password" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="dl">登录</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	data () {
		return {
			form: {
				username: "",
				password: ""
			}
		}
	},
	methods: {
		dl () {

			if (this.form.username == "admin" && this.form.password == "123456") {
				this.$http.send("/login", this.form, "post").then(res => {
					console.log(res);
					if (res.data.meta.status == 200) {
						this.$router.push("/")
					}
				})
			} else {
				this.$message.error('密码或用户名错误');
			}

		}
	},
	created () { },
	mounted () { },
	components: {},
	computed: {},
	watch: {}
}
</script>

<style lang="scss" scoped>
.longin {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background: url('../assets/背景.jpg') no-repeat;
	align-items: center;

	.form {
		width: 400px;
		height: 300px;
		border-radius: 8px;
		padding: 80px 40px;
		background-color: #fff;

		img {
			position: absolute;
			width: 140px;
			height: 140px;
			border-radius: 150px;
			top: 140px;
			right: 689px;
			border: 10px solid #fff;
			box-shadow: 5px 5px 10px #ccc;
			background-color: #ccc;
		}
	}
}
</style>
