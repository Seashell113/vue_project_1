// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/global.css'
import MyUl from '@/components/common/myUl'
import MyLi from '@/components/common/myLi'
import NavBar from '@/components/common/navBar'
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)
Vue.component(NavBar.name,NavBar)
// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 配置axios
import Axios from 'axios'
// 配置公共路径
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

// 全局过滤器
Vue.filter('convertTime',function (value) {
  if(typeof(value) == "string" && value.length>0){
      let arr=value.split('-');
      return arr[0]+'年'+arr[1]+'月'+arr[2]+'日';
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
