<template>
	<i class='icon' :class='iconClass' :style='parsedSize'></i>
</template>
<script>
	export default{
		name:'icon',
		props:{
			name:{
				type:String,
				required:true
			},
			size:{
				type:Object,
				required:true
			}
		},
		computed:{
			iconClass(){
				return 'icon-'+this.name;
			}
		},
		created(){
			this.parsedSize={};
			for(let k in this.size){
				this.parsedSize[k]=parseFloat(this.size[k])+'px';
			}
		}
	}
</script>
<style scoped>
	.icon{
		display: inline-block;
		vertical-align: top;
		background-size: cover;
	}
	.icon.icon-brand{
		background-image: url('/static/img/brand@2x.png');
	}
	.icon.icon-bulletin{
		background-image: url('/static/img/bulletin@2x.png');
	}
	.icon.icon-decrease{
		background-image: url('/static/img/decrease_1@2x.png');
	}
	.icon.icon-discount{
		background-image: url('/static/img/discount_1@2x.png');
	}
	.icon.icon-special{
		background-image: url('/static/img/special_1@2x.png');
	}
	.icon.icon-guarantee{
		background-image: url('/static/img/guarantee_1@2x.png');
	}
	.icon.icon-invoice{
		background-image: url('/static/img/invoice_1@2x.png');
	}
</style>
