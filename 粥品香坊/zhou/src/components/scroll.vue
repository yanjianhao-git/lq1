<template>
	<div ref='right' class='right1'>
		<slot></slot>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default{
		mounted(){
				this.init();
		},
		data(){
			return {
				bs: {}
			}
		},
		methods: {
			init(){
				this.bs = new BScroll(this.$refs.right,{
	                click: true,
	                probeType: 3
	            })
			}
		}
	}
</script>
<style>
	
</style>