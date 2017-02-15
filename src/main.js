import Vue from 'vue'
import Main from './main.vue'
import info from './components/info.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'amazeui/dist/css/amazeui.css'
import 'amazeui/dist/js/amazeui.js'
import './config/config'
//引入组件并使用2个模块
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.emulateJSON = true

//hash路由开启
var router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/info'},
    { path: '/info',name:'首页', component:info}
  ]
})
//路由切换前后钩子函数
router.beforeEach(function (transition, form, next) {
  var toPath = transition.path
  console.info(toPath)
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

