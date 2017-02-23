import Vue from 'vue'
import Main from './main.vue'
import info from './components/info.vue'
import pay from './components/pay.vue'
import qr from './components/qr.vue'
import login from './components/login.vue'
import myTicket from './components/myTicket.vue'
import orderInfo from './components/orderInfo.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'amazeui/dist/css/amazeui.css'
import 'amazeui/dist/js/amazeui.js'
import './config/config'
import {directRightUrl} from 'assets/js/app'
//引入组件并使用2个模块
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true;

//hash路由开启
var router = new VueRouter({
  mode: 'hash',
  routes: [
    {path: '/', redirect: '/info'},
    { path: '/login',name:'登录', component:login},
    { path: '/info',name:'首页', component:info},{
      path: '/orderInfo',name:'订单详情', component:orderInfo
    },
    { path: '/pay',name:'支付结果', component:pay},
    { path: '/qr',name:'二维码', component:qr},
    { path: '/myTicket',name:'我的票务', component:myTicket}

  ]
})
//路由切换前后钩子函数
router.beforeEach(function (transition, form, next) {
  var toPath = transition.path
  directRightUrl();
  next()
})


router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.path )
})

var vm = new Vue({
  el: '#app',
  router: router,
  render: h => h(Main)
})

