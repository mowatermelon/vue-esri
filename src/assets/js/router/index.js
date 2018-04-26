import Vue from 'vue'
import Router from 'vue-router'

const Manage = resolve => require(['@/pages/Manage'], resolve)
const Default = resolve => require(['@/pages/Default'], resolve)
const NotFound = resolve => require(['@/pages/NotFound'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history', // "hash" | "history" | "abstract"
  base: __dirname,
  linkActiveClass: 'mo-active',
  routes: [
    {
      path: '*',
      name: 'v-NotFound',
      component: NotFound,
      meta: {
        title: '404未找到'
      }
    },
    {
      path: '/',
      name: 'v-main',
      component: Default
    },
    {
      path: '/Manage',
      name: 'v-Manage',
      component: Manage
    },
    {
      path: '/Default',
      name: 'v-Default',
      component: Default
    }
  ]
})
