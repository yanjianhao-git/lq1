// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './stylus/style.styl';
import App from './App'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
router.beforeEach((to,from,next)=>{  //前置路由守卫
	if(to.meta.auth){
		if(localStorage.getItem("token")){
			next()
		}else{
			next({
				path:'/',
				query:{
					redirect:to.fullPath
				}
			})
		}
	}else{
		next()
	}
})
// router.afterEach((to,from,next)=>{
// 	console.log('我是后置全局路由')
// 	next()
// })
Vue.filter('money',function(msg,val){
	// return msg+value
	// if (!msg) return ' '
	// var intPart = Number(msg).toFixed(0) // 获取整数部分
	// var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
	// return intPartFormat
	// var a=msg+val
	// return a.toLocaleString()
	
})
Vue.use(VueLazyLoad,{
	preLoad:1.3,
	error:'../static/1.jpg',
	loading:'../static/3.jpg',
	attempt:1
})
Vue.use(mintUi)
// import Swiper from "swiper"
// import "swiper/dist/css/swiper.min.css"
// Vue.use(Swiper)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
