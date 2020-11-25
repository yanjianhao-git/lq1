<template>
	<div class="btnClass">
		<span @click='getData(2)' :class='{act:getType===2}'>全部<a>{{ratings.length}}</a></span>
		<span @click='getData(0)' :class='{act:getType===0}'>满意<a>{{r1.length}}</a></span>
		<span @click='getData(1)' :class='{act:getType===1}'>不满意<a>{{r2.length}}</a></span>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				index:2
			}
		},
		props:{
			ratings:{
				type: Array,
				required: true,
				default(){
					return []
				}
			},
			getType: {
				type: Number
			}
		},
		computed:{
			r1(){
				return this.ratings.filter(item=>{
					return item.rateType==0
				})
			},
			r2(){
				return this.ratings.filter(item=>{
					return item.rateType==1
				})
			}
		},
		methods:{
			getData(index){
				this.index=index;
				this.$emit('send',index);
			}
		}
	}
</script>
<style scoped>
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
	.btnClass span.act{
		background: #00f;
		color: #fff;
	}
	.btnClass span.act a{
		color: #fff;
	}
</style>
