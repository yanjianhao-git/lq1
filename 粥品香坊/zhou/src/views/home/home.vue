<template>
	<div class="box">
		<header>
			<div class="header_top">
				<!-- <span class="iconfont icon-zuobiao"></span> -->
				<a>青县&nbsp;></a>
				<div class="temperature">
					<p>晴</p>
					<h5>23°C</h5>
				</div>
				<!-- <div class="hhh">
					<h6 class="iconfont icon-taiyang"></h6>
				</div> -->
			</div>
			<div class="header_bottom">
				<input type="text" placeholder="快餐">
			</div>
		</header>
		<section>
			<div class="top">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015629984&di=2fe3e9298621cc72e3d92880913f6c99&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20160831%2F7a8bf4ee3e6343f7a5363fc99292564d_th.jpeg" alt="">
				<!-- <img src="../images/banner2.png" alt=""> -->
			</div>
			<div class="nav">
				<li v-for="(item,index) in pic" :key="index" @click="goGoods()">
					<img :src="item.img" alt="">
					<span>{{item.title}}</span>
				</li>
			</div>
			<div class="title">
				<h2>优惠专区</h2>
				<!-- <span class="iconfont icon-gouwuche"></span> -->
			</div>
			<div class="shop">
				<!-- <img src="../images/shop1.png" alt=""> -->
				<!-- <img src="../images/shop2.png" alt=""> -->
			</div>
			<div class="food">
				<li>
					<p>必吃</p>
					<span>9.9元起抢</span>
				</li>
				<li>
					<p>大牌</p>
					<span>配送费0元起</span>
				</li>
				<li>
					<p>水果食材</p>
					<span>年终惊喜GO</span>
				</li>
				<li>
					<p>屈臣氏</p>
					<span>面膜一元抢购</span>
				</li>
			</div>
			<div class="title2">
				<h4>为你优选</h4>
				<span>更多&nbsp;></span>
			</div>
			<div class="hotelfather">
				<div class="hotel1">
					<div class="hotel1_one">

					</div>
					<div class="images">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015144720&di=2da733d07369bca4839cb18a62d0830f&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F8%2F0%2F6%2F5%2F8065746%2F20091%2F6%2F1231206650604.jpg"
						 alt="">
						<span>嘉和一品粥（金....</span>
					</div>
					<a>包子粥铺中的点评人气餐厅</a>

				</div>
				<div class="hotel1">
					<div class="hotel1_one">

					</div>
					<div class="images">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015144720&di=2da733d07369bca4839cb18a62d0830f&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F8%2F0%2F6%2F5%2F8065746%2F20091%2F6%2F1231206650604.jpg"
						 alt="">
						<span> 玛喜达韩国年糕....</span>
					</div>
					<a>韩国料理中的点评人气餐厅</a>

				</div>
				<div class="hotel1">
					<div class="hotel1_one">

					</div>
					<div class="images">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015144720&di=2da733d07369bca4839cb18a62d0830f&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F8%2F0%2F6%2F5%2F8065746%2F20091%2F6%2F1231206650604.jpg"
						 alt="">
						<span>西北啥面村（北...</span>
					</div>
					<a>根据你吃过的店推荐</a>

				</div>
				<div class="hotel1">
					<div class="hotel1_one">

					</div>
					<div class="images">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015144720&di=2da733d07369bca4839cb18a62d0830f&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F8%2F0%2F6%2F5%2F8065746%2F20091%2F6%2F1231206650604.jpg"
						 alt="">
						<span>小豪水饺</span>
					</div>
					<a>根据你看过的店推荐</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				pic:[
					{
						title:"美食",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					},{
						title:"超市便利",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					},{
						title:"蔬菜水果",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					},{
						title:"美团转送",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					},{
						title:"跑腿代购",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					},{
						title:"午餐优选",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					},{
						title:"甜点饮品",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					},{
						title:"全程朕选",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					},{
						title:"房事不利",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					},{
						title:"见面配送费",
						img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598015259498&di=eb5ac98a5e31cfa347850c27d8213044&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2F17247e2685294c439a14901f47921649.jpeg"
					}
				]
			}
		},
		methods:{
			goGoods(){
				this.$router.push({path:"/goods"})
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 100px;
	}

	input {
		border: none;
	}

	a {
		text-decoration: none;
	}

	li {
		list-style: none;
	}

	.box {
		display: flex;
		flex-direction: column;
	}

	html body,
	.box {
		height: 100%;
	}

	.box header {
		height: 85px;
		width: 375px;
		
		display: flex;
		flex-direction: column;
	}

	header .header_top {
		display: flex;
		justify-content: space-around;
		height: 50px;
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-top: -2px;
		background-color: #ffc848;
	}

	header .header_top span {
		font-size: 18px;
		display: block;
		height: 14.5px;
		margin-left: 13px;
		margin-top: 12px;
	}

	header .header_top a {
		font-size: 14.5px;
		margin-top: 12px;
	}

	i {
		list-style: none;
	}

	.temperature {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		width: 22px;
		height: 20.5px;
		margin-top: 10px;
		margin-left: 178px;
	}

	.temperature p {
		font-size: 10.5px;
	}

	.hhh {
		display: flex;
		flex-direction: row;
	}

	.header_top .hhh h6 {
		font-size: 22.5px;
		font-weight: 200;
		margin-top: 10px;
		margin-left: 2.5px;
	}

	.header_bottom {
		text-align: center;
		height: 46px;
		margin-top: -0.405rem*100px;
	}

	.header_bottom input {
		width: 335px;
		height: 45px;
		margin-top:25px;
		border-radius: 0.03rem*100px;
		font-size: 0.13rem*100px;
		color: #999999;
		padding-left: 0.1rem*100px;
		background-color: #ACACAC;
		border-radius:10px;
	}
	section{
		margin-top:50px;
	}
	section .top {
		text-align: center;
		margin-top: 0.152rem*100px;
	}

	section .top img {
		width: 100%;
		height: 150px;
	}

	section .nav {
		height: 1.69rem*100px;
		width: 3.75rem*100px;
		display: flex;
		flex-direction: row;
	}

	.nav {
		width: 3.75rem*100px;
		height: 1.69rem*100px;
		flex-wrap: wrap;
		margin-top: 0.14rem*100px;
	}

	.nav li {
		display: flex;
		/* flex: 1; */
		flex-direction: column;
		align-items: center;
		padding-left: 0.165rem*100px;
		padding-right: 0.135rem*100px;
		margin-left: 18px;
	}

	.nav li img {
		width: 50px;
		height: 50px;
	}

	.nav li span {
		font-size: 12px;
		color: #111;
		margin-top: 0.075rem*100px;
	}

	.title {
		height: 0.54rem*100px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* background-color: pink; */
	}

	.title h2 {
		font-size: 0.185rem*100px;
		font-weight: 600;
		margin-left: 0.2rem*100px;
		margin-top: 0.299rem*100px;
	}

	.title span {
		font-size: 0.32rem*100px;
		color: #666666;
		margin-right: 0.22rem*100px;
	}

	.shop {
		margin-top: 0.11rem*100px;
		margin-left: 0.1rem*100px;
	}

	.shop img:nth-child(2) {
		margin-left: 0.025rem*100px;
	}

	.food {
		width: 3.7rem*100px;
		height: 1.1rem*100px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 0.03rem*100px;
	}

	.food li {
		width: 0.85rem*100px;
		height: 1.1rem*100px;
	}

	.food li p {
		font-size: 0.13rem*100px;
	}

	.food li span {
		font-size: 0.1rem*100px;
		color: #848483;
	}

	.food li:nth-child(1) {
		/* background: url(images/food1.png) no-repeat; */
		margin-left: 0.09rem*100px;
		/* margin-right: 0.043rem*100px; */
	}

	.food li:nth-child(2) {
		/* background: url(images/food2.png) no-repeat; */
		margin-left: 0.023rem*100px;
	}

	.food li:nth-child(3) {
		/* background: url(images/food3.png) no-repeat; */
		margin-left: 0.023rem*100px;
	}

	.food li:nth-child(4) {
		/* background: url(images/food4.png) no-repeat; */
		margin-right: 0.043rem*100px;
		margin-left: 0.023rem*100px;
	}

	.title2 {
		height: 0.425rem*100px;
		width: 3.75rem*100px;
		line-height: 0.425rem*100px;
		display: flex;
		flex-direction: row;
	}

	.title2 h4 {
		font-size: 0.185rem*100px;
		color: #333333;
		margin-left: 0.11rem*100px;
	}

	.title2 span {
		font-size: 0.11rem*100px;
		color: #7a7a7a;
		margin-left: 2.475rem*100px;
		margin-top: 0.05rem*100px;
	}

	.hotelfather {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.hotel1 {
		width: 100%;
		height: 80px;
	}

	.hotel1_one {
		width: 1.71rem*100px;
		height: 0.83rem*100px;
		/* background: url(images/food5.png) no-repeat; */
		border: 1px solid #e4e4e4;
		display: flex;
		flex-direction: column;
	}

	.images {
		display: flex;
		flex-direction: row;
	}

	.images img {
		width: 50px;
		height: 50px;
	}

	.images span {
		font-size: 0.12rem*100px;
		margin-left: 0.195rem*100px;
	}

	.hotel1 a {
		font-size: 0.1rem*100px;
		color: #666666;
		margin-left: 0.125rem*100px;
	}

	.hotel1 .images img {
		display: block;
		margin-top: -0.20rem*100px;
		margin-left: 0.1rem*100px;
	}

	.hotelfather .hotel1:nth-child(2) .hotel1_one {
		width: 1.71rem*100px;
		height: 0.83rem*100px;
		/* background: url(images/food6.png) no-repeat; */
		border: 1px solid #e4e4e4;
		display: flex;
		flex-direction: column;
	}

	.hotelfather .hotel1:nth-child(3) .hotel1_one {
		width: 1.71rem*100px;
		height: 0.83rem*100px;
		/* background: url(images/food7.png) no-repeat; */
		border: 1px solid #e4e4e4;
		display: flex;
		flex-direction: column;
	}

	.hotelfather .hotel1:nth-child(4) .hotel1_one {
		width: 1.71rem*100px;
		height: 0.83rem*100px;
		/* background: url(images/food8.png) no-repeat; */
		border: 1px solid #e4e4e4;
		display: flex;
		flex-direction: column;
	}

	footer {
		width: 3.75rem*100px;
		height: 0.49rem*100px;
		background-color: #f3f1eb;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	footer li {
		margin-top: 0.06rem*100px;
		display: flex;
		flex-direction: column;
		align-items: center
	}

	footer li span {
		font-size: 0.105rem*100px;
		color: #bebbb8;
		margin-top: 0.03rem*100px;
	}

	footer li:nth-child(1) span {
		color: #111;
	}

	footer li:nth-child(2) span {
		margin-top: 0.015rem*100px;
	}

	footer li:nth-child(3) img {
		margin-top: -0.032rem*100px;
	}
</style>
