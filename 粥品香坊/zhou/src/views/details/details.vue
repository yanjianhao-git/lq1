<template>
	<div class="wrap">
		<div class="top">
			<img src="" alt="">
			<div class="title">

			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name: 'details',
		data(){
			return{
				data: {}
			}
		},
		mounted(){
			axios.get('apis/goods').then(data => {
				console.log(data);
			})
		}
	}
</script>
<style>
	
</style>