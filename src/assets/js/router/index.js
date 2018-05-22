import Vue from 'vue'
import Router from 'vue-router'

const Manage = resolve => require(['@/pages/Manage'], resolve)
const Default = resolve => require(['@/pages/Default'], resolve)
const NotFound = resolve => require(['@/pages/NotFound'], resolve)
const Login = resolve => require(['@/pages/Login'], resolve)
const Main = resolve => require(['@/pages/Main'], resolve)

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
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '',
          component: Default
        },
        {
          path: 'manage',
          component: Manage
        },
        {
          path: 'default',
          component: Default
        }
      ]
    }
  ]
})
