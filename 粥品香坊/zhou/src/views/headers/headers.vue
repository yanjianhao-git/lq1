<template lang='html'>
<div class="wrap">
	<header :class='{none:off}'>
		<div class="header-content">
			<div class='header-top'>
				<img :src='val.avatar' class='avatar'>
				<div class="header-top-left">
					<ul>
						<li>
							<img :src='url1' class='brand'>
							<span class='header-name'>{{val.name}}</span>
						</li>
						<li>
							<p class='header-description'>
								{{val.description}}/{{val.deliveryTime}}分钟送达
							</p>
						</li>
						<li class='header-list-last'>
							<img :src="url2" class='header-reduction'>
							<span class='header-descriptions' v-if='val.supports'>
								{{val.supports[0].description}}
							</span>
						</li>
					</ul>
					<div class="header-btn" @click='fn'>
						5个
						<i class="icon-keyboard_arrow_right"></i>
					</div>
				</div>
			</div>
			<div class='header-bottom' @click='fn'>
				<img :src="url3" width='22'>
				<p>
					{{val.bulletin}}
				</p>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bjimg" :style='bjimg'></div>
	</header>
	<div class="spec" v-show='off'>
		<p class='spec-title'>{{val.name}}</p>
		<div class="spec-evaluate">
			<stars :fraction='val.score' size='24'></stars>
			<border value='优惠信息'></border>
			<ul class="spec-list">
				<li v-for="item,index of val.supports"><img :src="imgarr[index]" alt="">{{item.description}}</li>
			</ul>
			<border value='商家公告'></border>
			<div class='spec-notice'>
				{{val.bulletin}}
			</div>
		</div>
		<i class='icon-close close' @click='fn'></i>
	</div>
	<nav class="navbar">
		<ul class="navlist">
			<li v-for='item of navs'
				class='nav-item'
				:key='item.name'>
				<router-link :to='item.to'>{{item.name}}</router-link>
			</li>
		</ul>
	</nav>
</div>
</template>
<script>
	import axios from 'axios';
	import stars from '../../components/stars.vue'
	import border from '../../components/border.vue'
	export default{
		name: 'cmp-header',
		data(){
			return {
				val: {},
				url1: '/static/img/brand@2x.png',
				url2: '/static/img/decrease_1@2x.png',
				url3: '/static/img/bulletin@2x.png',
				url4: '/static/img/star24_on@2x.png',
				url5: '/static/img/star24_off@2x.png',
				imgarr: [
					'./src/img/decrease_2@2x.png',
					'./src/img/discount_2@2x.png',
					'./src/img/discount_2@2x.png',
					'./src/img/special_2@2x.png',
					'./src/img/special_2@2x.png',
				],
				off: false,
				navs: [
					{
						name: '商品',
						to: 'good'
					},
					{
						name: '评价',
						to: 'ratings'
					},
					{
						name: '商家',
						to: 'seller'
					}
                ],
			}
		},
		computed:{
			bjimg(){
				if(this.val.avatar) return `background: url('${this.val.avatar}')`;
			}
		},
		created(){
			axios.get('/apis/seller').then(data => {
				this.val = data.data;
				console.log(this.val)
			})
		},
		methods: {
			fn(){
				this.off = !this.off;
			}
		},
		components: {
			stars,
			border
		}
	}
</script>
<style lang="stylus">
	.navbar 
		height: 2.4375rem
		line-height: 2.4375rem
		border-bottom: 0.0625rem solid rgba(7,17,27,.1);
		z-index: 100;
		.navlist 
			display: flex;
			background: #fff;
			.nav-item 
				flex: 1
				text-align: center
				a
					color: rgb(77,85,93);
				.router-link-active
					color: red
	header.none{
		filter: blur(10px);
	}
	header{
		width: 100%;
		box-sizing: border-box;
		height: 8.9375rem;
		position: relative;
		z-index: 100;
		overflow: hidden;
		.bjimg{
			height: 8.75rem;
            width: 100%;
			position: relative;
			top: -0.9375rem;
			left: -0.9375rem;
            filter: blur(10px);
		}
		.header-content{
			position: absolute;
			z-index: 10;
		}
		.header-top{
			background: rgba(7,17,27,0.5);
			.avatar{
				width: 4rem;
				vertical-align:text-top;
				position: relative;
				top: -3.125rem;
				margin: 0 0 0 1.5rem;
			}
			.header-top-left{
				display: inline-block;
				ul{
					margin: 26px 0 0 1rem;
					.header-list-last{
						margin-top: 0.625rem;
					}
					.brand{
						width: 1.875rem;
						vertical-align:text-top;
						margin: 0.125rem 0.375rem 0.5rem 0rem;
					}
					.header-name{
						font-size: 1rem;
						color: rgb(255,255,255);
						font-weight: bold;
						line-height: 1rem;
					}
					.header-description{
						font-size: 0.75rem;
						color: rgb(255,255,255);
						font-weight: 200;
						line-height: 0.75rem;
					}
					.header-reduction{
						width: 0.75rem;
						vertical-align:text-top;
					}
					.header-descriptions{
						font-size: 0.625rem;
						color: rgb(255,255,255);
						font-weight: 200;
						line-height: 0.75rem;
						vertical-align:text-top;
					}
				}
				.header-btn{
					width 3rem
					height 1.5rem
					border-radius: 1.25rem;
					background: rgba(0,0,0,0.2);
					font-size: 0.625rem;
					color: rgb(255,255,255);
					font-weight: 200;
					line-height: 1.5rem;
					text-align: center;
					position: absolute;
					right: 2.5rem;
					top: 4.0625rem;
				}
			}
		}
		.header-bottom{
			position: relative;
			height: 1.75rem;
			line-height: 1.75rem;
			background-color: rgba(7,17,27,.2);
			font-size: 0.625rem
			color: rgb(255,255,255);
			padding: 0 0.75rem;
			font-weight: 200;
			margin-top: -1.75rem;
			p{
				margin-top: -1.875rem;
				margin-left: 1.875rem;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				word-break:break-all;
			}
			i{
				position: absolute;
				right: 0.625rem;
				top: 0.5rem;
			}
			img{
				vertical-align:text-top;
			}
		}
	}
	.spec{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 20;
		width: 100%;
		height: 100%;
		background: rgba(7,17,27,0.8);
		.close{
			display: inline-block;
			font-size: 2rem;
			color: rgba(255,255,255,0.5);
			position: absolute;
			left: 50%;
			margin-left: -1rem;
			bottom: 4rem;
		}
		.spec-title{
			font-size: 1rem;
			font-weight: 700;
			color: rgb(255,255,255);
			line-height: 1rem;
			text-align: center;
			margin-top: 4rem;
		}
		.spec-evaluate{
			margin-top: 1rem;
			text-align: center;
			img{
				margin-right: 1.25rem;
			}
		}
		.spec-list{
			padding: 0 2.25rem;
			margin-top: 1.5rem;
			li{
				text-align: left;
				font-size: 0.75rem;
				font-weight: 200;
				color: rgb(255,255,255);
				vertical-align: middle;
				margin-top: 0.75rem;
				img{
					width: 1rem;
					margin: 0 0.75rem 0 0.75rem;
					vertical-align: middle;
				}
			}
		}
		.spec-notice{
			font-size: 0.75rem;
			font-weight: 200;
			color: rgb(255,255,255);
			linne-height: 24px;
			padding: 0 2.25rem;
			text-align: left;
			margin-top: 1.5rem;
		}
	}
</style>