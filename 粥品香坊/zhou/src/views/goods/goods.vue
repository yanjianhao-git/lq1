<template>
	<div class='wrap'>
		<headers></headers>
		<router-view/>
		<car></car>
	</div>
</template>
<script>
import headers from '../headers/headers.vue'
import axios from 'axios'
import car from '../car/car.vue'
export default{
	name: 'goods',
	created(){
		console.log("我是生命周期函数")
	},
	mounted(){
		
	},
	components: {
		headers,
		car
	},
	// beforeRouteEnter(to,form,next){
	// 	console.log('beforeRouteEnter')
	// 	next()
	// },
	// beforeRouteLeave(to,form,next){
	// 	console.log('beforeRouteLeave')
	// 	next()
	// },
	// beforeRouteUpdate(to,form,next){
	// 	console.log('beforeRouteUpdate')
	// 	next()
	// },
}
</script>
<style lang='stylus'>

</style>