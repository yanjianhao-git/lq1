import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login/index.vue'
import register from '@/views/register/index.vue'
import goods from '@/views/goods/goods.vue'
import good from '@/views/navlist/navlist.vue'
import ratings from '@/views/ratings/ratings.vue'
import seller from '@/views/seller/seller.vue'
import shop from '@/views/shop/shop.vue'
Vue.use(Router)

export default new Router({
	//mode:"history",
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
    	path: '/register',
    	name: 'register',
    	component: register
    },
		{
			path: '/home',
			name: 'home',
			component: ()=>import('@/views/home/home')
		},
		{
			path: '/homes',
			name: 'homes',
			component: ()=>import('@/views/home/homes')
		},
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      redirect: '/goods/good',
	 //  beforeEnter:(to,from,next)=>{
		// console.log("我是独享钩子")
		// next()
	 //  },
	  // beforeLeave:(to,from,next)=>{
		 //  console.log("我是独享钩子后")
		 //  next()
	  // },
      children: [
        {
          path: 'good',
          name: 'good',
          component: good,
        },
        {
          path: 'ratings',
          name: 'ratings',
          component: ratings,
		  meta:{//路由拦截字段
			  auth:true
		  }
        },
        {
          path: 'seller',
          name: 'seller',
          component: seller
        }
      ]
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    }
  ]
})
