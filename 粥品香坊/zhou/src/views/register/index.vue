<template>
	<div class="wrap">
		<div class="register">
			<form>
				<h2>用户注册</h2>
				<p class="regist">
					<input class="username" type="text" placeholder="用户名" />
				</p>
				<p class="regist">
					<input class="password" type="password" placeholder="密码" />
				</p>
				<p class="regist">
					<input class="password" type="password" placeholder="确认密码" />
				</p>
				<p class="everconfirmed">
					<input type="checkbox" />条款以阅读
				</p>
				<p class="btn">
					<input type="button" value="注册" />
				</p>
				<p class="login">
					<span>
						<router-link to='/'>已有账号，去登录</router-link>
					</span>
				</p>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "register",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="stylus">
	.wrap 
		.register 
			margin:0 (38/2)px 
			text-align: center
			h2
				font-size: 18px
				margin-top: 20px
				margin-bottom: (135/2)px
			.regist 
				width: 100%
				height: (78/2)px
				border: 1px solid #ededed
				margin-bottom: (60/2)px
				input
					width: 100%
					height: 100%
					background: #f3f3f3
					text-indent: (20/2)px
			.everconfirmed
				width: 100%
				height: (32/2)px
				text-align: left
				font-size: (32/2)px
				font-weight: 700
				margin-bottom: (40/2)px
				input 
					margin-right: (16/2)px
			.btn
				margin-bottom: (68/2)px
				input
					width: 100%
					height: (98/2)px
					border: 1px solid #acacac
					font-size: (42/2)px
					background: #999
					color: #fff
			.login 
				color: #73aee6
</style>