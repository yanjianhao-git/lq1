<template>
<scroll class="box">
	<div class="box2">
		<div class="main">
			<div class="main-left">
				<h1>3.9</h1>
				<p>综合评分</p>
				<span>高于周边商家69.2%</span>
			</div>
			<div class="main-right">
				<div class="server1">
					<span>服务态度</span>
					<stars :fraction='3.9' size='24'></stars>
					<a>3.9</a>
				</div>
				<div class="server2">
					<span>服务态度</span>
					<stars :fraction='3.9' size='24'></stars>
					<a>3.9</a>
				</div>
				<div class="time">
					<span>送达时间</span>
					<a>44分钟</a>
				</div>
			</div>
		</div>
		<div class="space"></div>
		<satisfied :ratings='val' :getType='selectType' @send='get'></satisfied>
		<div class="content">
			<a class='icon-check_circle'></a>
			<span @click='conshow2()'>只看有内容的评价</span>
		</div><hr/>
		<div class="ratings">
			<ul>
				<li v-for='item,index in val' v-show='select(item.rateType)' v-if='showtxt(item.text)'>
					<div class="img">
						<img :src='item.avatar'>
					</div>
					<div class="right">
						<p class="name">{{item.username}}</p>
						<p class="starTime">
							<stars :fraction='item.score' size='24'></stars>
							<span v-if='item.deliveryTime'>{{item.deliveryTime}}分钟送达</span>
							<!-- <span class='time'>{{item.rateTime | getTime(item.rateTime)}}</span> -->
							<span class='time'>{{item.rateTime | money('￥')}}</span>
						</p>
						<br/>
						<p class="ratingsContent">
							{{item.text}}
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</scroll>
</template>
<script>
import axios from 'axios';
import stars from '@/components/stars.vue';
import satisfied from '../Satisfied/Satisfied.vue';
import scroll from '@/components/scroll.vue';
export default{
	name: 'ratings',
	data(){
		return{
			val: [],
			selectType: 2,
			conshow: true
		}
	},
	mounted(){
		axios({
            url:'/apis/ratings',
        }).then(res => {
            this.val = res.data;
        })
	},
	components: {
		stars,
		satisfied,
		scroll
	},
	// filters: {
	// 	getTime(time){
	// 		let date = new Date(time);
	// 		let yy = date.getFullYear();
	// 		let mm = date.getMonth() + 1;
	// 		let dd = date.getDate();
	// 		let hh = date.getHours();
	// 		let MM = date.getMinutes();
	// 		return `${yy}-${mm}-${dd} ${hh}:${MM}`
	// 	}
	// },
	methods:{
		conshow2(){
			this.conshow = !this.conshow;
		},
		showtxt(txt){
			if(this.conshow){
				return this.conshow;
			}else{
				if(txt != ''){
					return true;
				}
			}
		},
		get(msg){
			this.selectType=msg;
		},
		select(index){
			if(this.selectType==2){
				return true
			}else if(this.selectType===index){
				return true
			}else{
				return false
			}
		}
	}
}
</script>
<style>
	.right1{
		height: 70vh;
		z-index: 10;
		overflow: hidden;
	}
	.main{
		display: flex;
		border-bottom: 2px solid #e6e7e8;
	}
	.main .main-left{
		margin: 18px 0;
		width: 137.5px;
		text-align: center;
		border-right: 1px solid rgb(147,153,159);
		margin-right: 18px;
		margin-top: 18px;
		margin-bottom: 18px;
	}
	.main .main-left h1{
		font-size: 24px;
		line-height: 28px;
		color: rgb(255,153,0);
	}
	.main .main-left p{
		margin-top: 6px;
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 12px;
	}
	.main .main-left span{
		display: inline-block;
		margin-top: 8px;
		margin-bottom: 6px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.main .main-right{
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		margin-top: 18px;
		margin-bottom: 18px;
	}
	.main .main-right .server1{
		display: flex;
		margin-left: 12px;
		margin-right: 12px;
	}
	.main .main-right .server1 span{
		display: inline-block;
		margin-right: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
	}
	.main .main-right .server1 div{
		display: flex;
		margin-right: 12px;
	}
	.main .main-right .server1 div img{
		width: 18px;
		height: 18px;
	}
	.main .main-right .server1 a{
		color: rgb(255,153,0);
	}
	.main .main-right .server2{
		display: flex;
		margin-left: 12px;
		margin-right: 12px;
	}
	.main .main-right .server2 span{
		display: inline-block;
		margin-right: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
	}
	.main .main-right .server2 div{
		display: flex;
		margin-right: 12px;
	}
	.main .main-right .server2 div img{
		width: 18px;
		height: 18px;
	}
	.main .main-right .server2 a{
		color: rgb(255,153,0);
	}
	.main .main-right .time{
		margin-top: 8px;
		margin-left: 12px;
		margin-right: 12px;
	}
	.main .main-right .time span{
		display: inline-block;
		margin-right: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 18px;
		text-align: left;
	}
	.main .main-right .time a{
		font-size: 12px;
		color: rgb(147,153,159);
		line-height: 18px;
	}
	.space{
		width: 100%;
		height: 16px;
		background: #f3f5f7;
		border-bottom: 2px solid #e6e7e8;
	}
	.btnClass{
		display: flex;
		width: 90%;
		margin-left: 5%;
		border-bottom: 1px solid #e6e7e8;
	}
	.btnClass span{
		margin-top: 18px;
		margin-bottom: 18px;
		margin-right: 8px;
	}
	.btnClass span:nth-of-type(1){
		display: inline-block;
		width: 60px;
		height: 32px;
		text-align: center;
		line-height: 32px;
		background: #00a0dc;
		font-size: 14px;
		color: #fff;
	}
	.btnClass span:nth-of-type(1) a{
		font-size: 12px;
		color: #fff;
		margin-left: 3px;
	}
	.btnClass span:nth-of-type(2){
		display: inline-block;
		width: 60px;
		height: 32px;
		text-align: center;
		line-height: 32px;
		background: #ccecf8;
		font-size: 14px;
		color: #4d555d;
	}
	.btnClass span:nth-of-type(2) a{
		font-size: 12px;
		color: #4d555d;
		margin-left: 3px;
	}
	.btnClass span:nth-of-type(3){
		display: inline-block;
		width: 72px;
		height: 32px;
		text-align: center;
		line-height: 32px;
		background: #e9ebec;
		font-size: 14px;
		color: #4d555d;
	}
	.btnClass span:nth-of-type(3) a{
		font-size: 12px;
		color: #4d555d;
		margin-left: 3px;
	}
	.btnClass span.on{
		background: blue;
		color: #fff;
	}
	.btnClass span.on a{
		color: #fff;
	}
	.content{
		display: flex;
		width: 90%;
		margin-left: 5%;
	}
	.content a{
		margin-top: 14px;
		margin-bottom: 14px;
		font-size: 20px;
		color: #b7bbbf;
		margin-right: 7px;
	}
	.content span{
		margin-top: 16px;
		margin-bottom: 16px;
		font-size: 12px;
		color: #93999f;
	}
	.ratings{
		margin-left: 18px;
		margin-right: 18px;
		overflow: hidden;
	}
	.ratings ul li{
		display: flex;
		border-bottom: 1px solid #ccc;
		margin: 18px 12px 6px 18px;

	}
	.ratings ul li .img{
		width: 28px;
		height: 28px;
		border: 1px solid #ccc;
		border-radius: 50%;
		margin-right: 12px;
	}
	.ratings ul li .img img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.ratings ul li .right{
		flex: 1;
		flex-wrap: wrap;
	}
	.ratings ul li .right .starTime .time{
		font-size: 12px;
		margin-left: 10px;
	}
	.ratings ul li .right .ratingsContent{
		font-size: 16px;
	}
	.ratings ul li .right .name{
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 12px;
	}
	.ratings ul li .right .starTime{
		display: flex;
		font-size: 12px;
		margin-top: 4px;
	}
</style>