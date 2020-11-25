<template>
<div class='car'>
	<div class='car_box'>
		<div class='left_car' @click='show'>
			<div class='left_car2' :class='{on: amount}'>
				<span class='title' v-show='amount'>{{sum}}</span>
				<i class='icon-shopping_cart' :class='{on: amount}'></i>
			</div>
		</div>
		<p class='amount'>
			￥{{amount}}
		</p>
		<p class='explain'>
			另需配送费￥4元
		</p>
		<p class='btn' :class='{on: amount>=20}' @click='getsum'>
			{{btntxt}}
		</p>
	</div>
	<!-- 遮罩层开始 -->
	<mt-popup
	  v-model="popupVisible"
	  position="bottom">
		<div class="list1">
			<div class="listBottom">
				<div class="title">
					<span>购物车</span>
					<a @click='clear'>清空</a>
				</div> 
				<ul>
					<li v-for='item,index in val'>
						<p class="name">{{item.name}}</p>
						<span class="price">￥<b>{{item.price}}</b></span>
						<operation :item='item'></operation>
					</li>
				</ul>
			</div>
		</div>
	</mt-popup>
	<!-- 遮罩层结束 -->
</div>
</template>
<script>
import bus from '../../bus.js';
import axios from 'axios'
import operation from '../operation/operation.vue'
import {Popup,MessageBox} from 'mint-ui'
export default{
	name: 'car',
	data(){
		return{
			popupVisible: false,
			amount: 0,
			sum: 0,
			btntxt: '￥20元起送',
			item: '',
			data: {},
			val: []
		}
	},
	mounted(){
		bus.$on('plus',data => {
			console.log("加==》",data)
			this.item = data;
			this.amount += data.price;
			this.sum++;
			let name = data.name;
			for(let i = 0;i<this.val.length;i++){
				if(!this.val[i].name == data.name){
					this.val.push(data);
				}
			}
			if(this.amount >= 20){
				this.btntxt = '去结算';
			}
			
		}),
		bus.$on('reduce',data => {
			console.log("减==》",data)
			this.item = data;
			this.amount -= data.price;
			this.sum--;
			this.data[data.name] = data.count;
			if(this.amount < 20){
				this.btntxt = '￥20元起送';
			}
		})
	},
	methods: {
		getsum(){
			if(this.amount < 20) return
			MessageBox.alert('总价格:'+ this.amount)
		},
		add(key,val){
			this.sum++;
			this.data[key]++;
		},
		clear(){
			this.data = {};
			this.popupVisible = false;
			this.sum = 0;
			this.amount = 0;
			bus.$emit('clear',0)
		},
		remove(key,val){
			this.sum--;
			this.data[key]--;
			this.item.count = this.data[key];
			bus.$emit('remove',this.item)
			if(!this.data[key]){
				delete this.data[key];
			}
		},
		show(){
			this.popupVisible = !this.popupVisible;
		}
	},
	components: {
		operation
	}
}
</script>
<style lang='stylus'>
*{
	margin: 0;
	padding: 0;
}
ul,li,ol{
	list-style: none;
}
.car{
	display: flex;
	position:relative;
	width: 100%;
	height: 45px;
	line-height: 45px;
	background: #141d27;
	position: fixed;
	bottom: 0;
  z-index: 999999;
	.car_box{
		position: relative;
		display: flex;
		width: 100vw;
		z-index: 5000;
	}
	.left_car{
		position: absolute;
		bottom: 0;
		left: 16px;
		width: 55px;
		height: 55px;
		border-radius: 50%;
		background: #141d27;
		z-index: 5000;
		.title{
			position: absolute;
			top: 0;
			right: 0;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background: red;
			color:#fff;
			text-align: center;
			line-height: 15px;
			font-size: 12px;
		}
		.left_car2{
			position: absolute;
			left: 50%;
			top: 50%;
			margin: -22px 0 0 -22px;
			width: 45px;
			height: 45px;
			border-radius: 50%;
			background: rgb(43,52,60);
			text-align: center;
			line-height: 50px;
			i{
				font-size: 24px;
				color: rgba(255,255,255,0.4);
			}
			.on{
				color: #fff;
			}
		}
		.on{
			background: rgb(0,163,221);
		}
	}
	.amount{
		font-size: 16px;
		height: 40px;
		color: rgba(255,255,255,0.4);
		font-weight: 700;
		margin-left: 70px;
		margin-right: 12px;
		padding-right: 12px;
		border-right: 1px solid rgb(43,52,60);
	}
	.explain{
		font-size: 16px;
		color: rgba(255,255,255,0.4);
		font-weight: 700;
	}
	.btn{
		position: absolute;
		right: 0;
		width: 105px;
		height: 55px;
		color: rgb(149,153,157);
		background: rgba(255,255,255,0.1);
		text-align: center;
		font-size: 12px;
		font-weight: 700;
	}
	.on{
		background: rgb(0,183,74);
		color: #fff;
	}
}
.mint-popup{
	width: 100%;
}
.mint-popup-bottom{
	bottom: 40px;	
}
.list1{
	width: 100%;
	background: rgba(0,0,0,.5);
	z-index: -1;
}
.list1 .listBottom{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 203px;
	background: #fff;
}
.list1 .listBottom .title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 40px;
	padding-left: 18px;
	padding-right: 18px;
	background: rgb(243,245,247);
	border-bottom: 1px solid rgba(7,17,27,.1);
}
.list1 .listBottom .title span{
	display: inline-block;
	font-size: 14px;
	font-weight: 200;
	color: rgb(7,17,27);
}
.list1 .listBottom .title a{
	color: rgb(0,160,220);
	font-size: 12px;
}
.list1 .listBottom ul{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 170px;
	overflow-y: auto;
}
.list1 .listBottom ul li{
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 90%;
	height: 48px;
	margin-left: 5%;
	border-bottom: 1px solid #ccc;
}
.list1 .listBottom ul li .name{
	position: absolute;
	left: 0;
	font-size: 14px;
	color: rgb(7,17,27);
}
.list1 .listBottom ul li .price{
	position: absolute;
	left: 224px;
	display: inline-block;
	font-size: 12px;
	color: rgb(240,20,20);
	margin-top: 4px;
}
.list1 .listBottom ul li .price b{
	display: inline-block;
	font-size: 14px;
	font-weight: 700;
	color: rgb(240,20,20);
}
.list1 .listBottom ul li i:nth-of-type(1){
	position: absolute;
	right: 50px;
	font-size: 24px;
	color: rgb(0,160,220);
	line-height: 24px;
	margin-right: 6px;
}
.list1 .listBottom ul li span{
	position: absolute;
	right: 24px;
	width: 24px;
	height: 24px;
	text-align: center;
	line-height: 24px;
	margin-right: 6px;
}
.list1 .listBottom ul li i:nth-of-type(2){
	position: absolute;
	right: 0;
	font-size: 24px;
	color: rgb(0,160,220);
	line-height: 24px;
}

</style>