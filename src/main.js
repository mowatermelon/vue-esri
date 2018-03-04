// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import './assets/css/normal.css'
import './assets/css/bootstrap.css'

// 野狗实时
import ref from './assets/js/Tool'
Vue.use(ref)

Vue.use(Vuex)
Vue.config.productionTip = false

// 创建和挂载根实例，通过router配置参数注入路由
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

