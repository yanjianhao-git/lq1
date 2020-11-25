<template lang='html'>
    <transition name='slide'>
    	<div class='details' v-show='show'>
    		<p class='fanhui' @click='fanhui'>返回<</p>
	        <!--详情图片区域 开始-->
	        <div class='details-imgBox'>
	            <div class='details-img'><img :src='details.image'/></div>
	            <div class='details-text'>
	                <h2 class='details-h2Text'>{{details.name}}</h2>
	                <p class='details-pText'>
	                    月售{{details.sellCount}}份
	                    <span class='details-into'>好评率{{details.rating}}%</span>
	                </p>
	                <p class='details-priceText'>
	                    <span>￥</span>{{details.price}}
	                    <s class='details-priceInto' v-show='details.oldPrice'><span>￥</span>{{details.oldPrice}}</s>
	                </p>
	            </div>
	            <div class='details-addCar'>加入购物车</div>
	        </div>
	        <!--详情图片区域 结束-->
	        <!--商品介绍区域 开始-->
	        <div class='details-introBox' v-show='details.description'>
	            <h2 class='intro-h2Text'>商品介绍</h2>
	            <p class='intro-inner'>{{details.description}}</p>
	        </div>
	        <!--商品介绍区域 结束-->
	        <!--商品评价区域 开始-->
	        <div class='details-commentBox'>
	            <div class='commentBox-top'>
	                <h2 class='commentBox-textH2'>商品评价</h2>
	                <selectType :ratings='details.ratings'/> 
	            </div>
	            <ul class='commentBox-list'>
	                <li class='commentBox-items' v-for='items in details.ratings'>
	                    <div class='commentBox-info'>
	                        <span class='commentBox-time' style='font-size:12px;color:rgb(147,153,159)'>{{setTime(items.rateTime)}}</span>
	                        <div class='comcommentBox-right'>
	                            <span class='commentBox-userName'>{{items.username}}</span>
	                            <img :src='items.avatar' class='commentBox-img'/>
	                        </div>
	                    </div>
	                    <div class='commentBox-decoration'>
	                        <span class='commentBox-likeIcon' :class='{"icon-thumb_up": items.rateType==0,"icon-thumb_down": items.rateType==1}'></span>
	                        {{items.text}}
	                    </div>
	                </li>
	            </ul>
	        </div>
	        <!--商品评价区域 结束-->
	    </div>
    </transition>
</template>
<script>
	import selectType from '../Satisfied/Satisfied.vue';
	export default {
	    name: 'myDetails',
	    props: {
	    	show: {},
	    	details: {}
	    },
	    data() {
			return {
			    visible:false
			}
	    },
	    methods:{
	    	fanhui(){
	    		this.$emit('changeType',this.visible)
	    	},
			setTime(num){
			    let str='';
			    let time = new Date(num);
			    str+=time.getFullYear()+"-";
			    str+=time.getMonth()+"-";
			    str+=time.getDate()+"/";
			    str+=time.getHours()+":";
			    str+=time.getMinutes()+":";
			    str+=time.getSeconds()+"";
			    return str
			}
	    },
	    components: {selectType}
	}
</script>
<style scoped>
	.details{
		background: #eee;
		position: fixed;
		top: 0;
		z-index: 99999;
		overflow-y: auto;
	}
	.details.slide-enter,.details.slide-leave-to{
		transform: translateX(-100vw);
	}
	.details.slide-enter-active,.details.slide-leave-active{
		transition: .5s;
	}
	.details.slide-enter-to,.details.slide-leave{
		transform: translateX(0);
	}

	.details .details-imgBox{
		position: relative;
		width: 100%;
		text-align: left;
		margin-bottom: 16px;
		border-bottom: 2px solid rgba(7,17,27,.1);
		background: #fff;
	}
	.details .details-imgBox .details-img{
		width: 100%;
		height: 100%;
	}
	.details .details-imgBox .details-img img{
		width: 100%;
		height: 100%;
	}
	.details .details-imgBox .details-text{
		padding: 18px;
		box-sizing: border-box;
	}
	.details .details-imgBox .details-text .details-h2Text{
		color: rgb(7,17,27);
		font-size: 14px;
		font-weight: 700;
		line-height: 14px;
		margin-bottom: 8px;
	}
	.details .details-imgBox .details-text .details-pText{
		color: rgb(147,153,159);
		font-size: 12px;
		line-height: 12px;
		margin-bottom: 18px;
	}
	.details .details-imgBox .details-text .details-pText .details-into{
		margin-left: 12px;
	}
	.details .details-imgBox .details-text .details-priceText{
		color: rgb(240,20,20);
		font-size: 14px;
		font-weight: 700;
		line-height: 24px;
	}
	.details .details-imgBox .details-text .details-priceText span:first-child{
		font-size: 12px;
		font-weight: normal;
	}
	.details .details-imgBox .details-text .details-priceText .details-priceInto{
		color: rgb(147,153,159);
		font-size: 12px;
		font-weight: 700;
		line-height: 24px;
		margin-left: 10px;
	}
	.details .details-imgBox .details-text .details-priceText .details-priceInto span{
		font-weight: normal;
	}
	.details .details-imgBox .details-addCar{
		position: absolute;
		bottom: 18px;
		right: 16px;
		width: 74px;
		height: 24px;
		text-align: center;
		line-height: 24px;
		background: rgb(0,160,220);
		border-radius: 12px;
		color: #fff;
		font-size: 12px;
	}
	.details .details-introBox{
		box-sizing: border-box;
		width: 100%;
		text-align: left;
		padding: 18px;
		backgorund: #fff;
		margin-bottom: 16px;
		border-top: 2px solid rgba(7,17,27,.1);
		border-bottom: 2px solid rgba(7,17,27,.1);
	}
	.details .details-introBox .intro-h2Text{
		font-size: 14px;
		color: rgb(7,17,27);
		line-height: 14px;
		margin-bottom: 12px;
	}
	.details .details-introBox .intro-inner{
		color: rgb(77,85,93);
		font-size: 12px;
		line-height: 24px;
		font-weight: 200;
	}
	.details .details-commentBox{
		background: #fff;
	}
	.details .details-commentBox .commentBox-top{
		box-sizing: border-box;
		width: 100%;
		text-align: left;
		padding-top: 18px;
		border-top: 2px solid rgba(7,17,27,.1);
		border-bottom: 2px solid rgba(7,17,27,.1);
	}
	.details .details-commentBox .commentBox-top .commentBox-textH2{
		font-size: 14px;
		color: rgb(7,17,27);
		line-height: 14px;
		margin-left: 18px;
	}
	.details .details-commentBox .commentBox-list{
		box-sizing: border-box;
		padding: 16px 18px;
	}
	.details .details-commentBox .commentBox-list .commentBox-items{
		box-sizing: border-box;
		padding: 16px 0;
		border-bottom: 1px solid rgba(7,17,27,.1);
	}
	.details .details-commentBox .commentBox-list .commentBox-items .commentBox-info{
		display: flex;
		justify-content: space-between;
		margin-bottom: 6px;
		font-size: 12px;
		color: rgb(147,153,159);
		line-height: 14px;
	}
	.details .details-commentBox .commentBox-list .commentBox-items .commentBox-info .comcommentBox-right{
		display: flex;
	}
	.details .details-commentBox .commentBox-list .commentBox-items .commentBox-info .comcommentBox-right .commentBox-img{
		width: 28px;
		height: 28px;
		border-radius: 50%;
		margin-left: 6px;
	}
	.details .details-commentBox .commentBox-list .commentBox-items .commentBox-decoration{
		width: 100%;
		text-align: left;
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 16px;
	}
	.details .details-commentBox .commentBox-list .commentBox-items .commentBox-decoration .commentBox-likeIcon{
		font-size: 24px;
		color: rgb(147,153,159);
		line-height: 48px;
		margin-right: 8px;
	}
	.details .details-commentBox .commentBox-list .commentBox-items .commentBox-decoration .icon-thumb_up{
		color: rgb(0,160,220); 
	}
	.details .details-commentBox .commentBox-list .commentBox-items .commentBox-decoration .icon-thumb_down{
		color: rgb(183,187,191); 
	}
</style>