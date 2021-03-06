// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './assets/js/router'
import store from './assets/js/vuex/store'
import ElementUI from 'element-ui'
import '../static/plugins/reset/normal.css' // 引入重置样式
import 'element-ui/lib/theme-chalk/index.css'
import EventBus from './service/Bus'

import '../static/plugins/ionicons/css/ionicons.min.css' // 引入第三方图标库

Vue.use(ElementUI)

// 下面一句配置是去除开发环境下面的多余生产提示
// You are running Vue in development mode.
// Make sure to turn on production mode when deploying for production.
Vue.config.productionTip = false

window.EventBus = EventBus

// 创建和挂载根实例，通过router配置参数注入路由
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})

