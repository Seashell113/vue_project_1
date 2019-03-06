import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/home/home'
import Member from '@/components/member/member'
import Search from '@/components/search/search'
import Shopcart from '@/components/shopcart/shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
     {
      path: '/member',
      name: 'member',
      component: Member
    },
     {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
     {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
