import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShoppingMall from '@/components/pages/ShoppingMall'
import SwiperColumn from '@/components/swiper/swiperColumn'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/hello', name: 'HelloWorld', component: HelloWorld},
    {path: '/', name: 'ShoppingMall', component: ShoppingMall},
    {path: '/SwiperColumn', name: 'SwiperColumn', component: SwiperColumn}
  ]
})
