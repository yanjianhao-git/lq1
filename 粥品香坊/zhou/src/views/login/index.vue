<template>
	<div class='wrap'>
		<p class='title'>用户登录</p>
		<div class='inp'>
			<p>{{text}}</p>
			<input type='text' placeholder='请输入手机号' v-model='username'>
			<div class='id'>
				<input type='text' placeholder='请输入验证码' v-model='code'>
				<p @click='getCode'>{{btntxt}}</p>
			</div>
		</div>
		<p class='btn' @click='fn'>登录</p>
		<p class='tips'><router-link to='/register'>还没有账号,现在去注册</router-link></p>
	</div>
</template>
<script>
import axios from 'axios'
export default{
	name: 'login',
	data(){
		return{
			//手机号内容
			username: '',

			//验证码内容
			code: '',

			//提示信息
			text: '',

			//验证码按钮的文字内容
			btntxt: '获取验证码',

			//定时器
			timer: '',
			
			//验证码按钮的开关变量
			btnoff: true
		}
	},
	methods: {
		fn(){
			axios.post('/apis/login',{username: this.username,code: this.code}).then(data => {
				this.text = data.data.msg;
				if(!data.data.code){
					setTimeout(() => {
						clearInterval(this.timer);
						this.$router.push({
							name: 'goods'
						})
					},1000)
				}
			})
		},
		
		getCode(){
			if(!this.btnoff) return;
			axios.post('/apis/code',{username: this.username}).then(data => {
				console.log(data.data);
				if(!data.data.code) return
					let num = 10;
					this.btnoff = false;
					this.timer = setInterval(() => {
					this.btntxt = num+'秒后重发'
					if(num == 0){
						this.btnoff = true;
						this.btntxt = '获取验证码'
						clearInterval(this.timer);
						axios.post('/apis/code').then(data => {
							console.log(data.data)
						})
					}
					num--;
				},1000);
			})
		}
	},
	
}
</script>
<style lang='stylus' scoped>
*{
	margin: 0;
	padding: 0;
}
ul,li,ol{
	list-style: none;
}
.wrap{
	padding: 0 30px;
	.title{
		text-align: center;
		margin: 30px 0;
	}
	input[type='text']{
		width: 100%;
		height: (55/2)px;
		background: rgb(243,243,243);
		border: none;
		font-size: (19/2)px;
		text-indent: 7.5px;
		outline: none;
	}
	.id{
		display: flex;
		margin-top: (55/2)px;
		input{
				margin-right: 10px;
			}
		p{
			width: 90px;
			text-align: center;
			height: (55/2)px;
			background: #ccc;
			line-height: (55/2)px;
			font-size: (19/2)px;
		}
	}
	.btn{
		width: 100%;
		height: (65/2)px;
		background: rgb(42,151,254);
		text-align: center;
		line-height: (65/2)px;
		color: #fff;
		margin-top: 20px;
	}
	.tips{
		margin-top: (45/2)px;
		color: rgb(75,221,253);
		text-align: center;
		font-size: 16px;
	}
}
</style>