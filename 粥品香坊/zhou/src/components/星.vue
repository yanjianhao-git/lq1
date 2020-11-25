<template>
	<div class="star-s" :class="iconClasses">
		<span v-for="(item,index) in starClasses" :class="item" :key="index">
		</span>
	</div>
</template>

<script>
export default {
  name: 'star',  	props: {    	//商家得分    	score: {      	type: [Number, String],      	required: true,      	default: 0    	},    	//星星大小    	size: {      	type: [Number, String],      	default: 'middle' //星星的型号默认中型    	}  	},  	computed: { //计算属性    	//星星型号    	iconClasse s() {      	if (this.score && this.size) {        	return 'star-' + this.siz;      	}    	},    	//根据得分计算一个starClasses    	starClasse s() {      	if (this.score && this.size) {        	let array = [;        	//得分的整数部分        	let integer = parseInt(this.score;        	for (let i = 1; i <= integer; i++) {          	/* on:亮  off:暗  half：半 亮*/          	array.push('on') //全亮        	};        	//半亮        	let decimal = this.score % ;        	//判断小数部分        	if (decimal === 0.5) {          	array.push('half')        	} else if (decimal > 0.5) {          	array.push('on')        	}        	//如果小于5在添一颗暗的        	while (array.length < 5) {          	array.push('off')        	}        	return arra;      	    	}  	}	}
</script>
<!--星星的规 
	1.总共5颗星
	2.亮，暗，半亮半暗组合规矩
	根据商家得分来的   比如3.8
	整数部分是3    3颗亮的
	小数部分0.8   0.8》0.5进一位    再来一颗星
	最后一颗是暗		
	封装star组件：
	1.星星尺寸
	  small 24*24
	  middle 36*36
	  large 48*48	
-->
<style lang="stylus" scoped="scoped">
	.star-s display flex justify-content space-between width 100% span display inline-block background-size cover
	/*小型*/
	&.star-24,
	&.star-smal span width 24px height 24px &.on background-image url('../../assets/img/star24_on@2x.png') &.off background-image url('../../assets/img/star24_off@2x.png') &.half background-image url('../../assets/img/star24_half@2x.png')
	/*中型*/
	&.star-36,
	&.star-middle span width:36px;
	height:36px;
	&.on background-image:url('../../assets/img/star36_on@2x.png');

	&.off background-image:url('../../assets/img/star36_off@2x.png');

	&.half background-image:url('../../assets/img/star36_half@2x.png');
	/*大型*/
	&.star-48,
	&.star-large span width:48px;
	height:48px;
	&.on background-image:url('../../assets/img/star48_on@2x.png');

	&.off background-image:url('../../assets/img/star48_off@2x.png');

	&.half background-image:url('../../assets/img/star48_half@2x.png');
</style>
