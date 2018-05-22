import Vue from 'vue'
import Router from 'vue-router'
import loS from '../../../service/loStorage'

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
  routes: [{
      path: '*',
      name: 'v-NotFound',
      component: NotFound,
      meta: {
        title: '404未找到'
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Main,
      children: [{
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
      ],
      beforeEnter: (to, from, next) => {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!!loS.getItem('userName', true)&&!!loS.getItem('userPassword', true)) {
          next()
        } else {
          next({
            name: 'Login',
            path: '/Login'
          });
          // next(false);
        }

      }
    }
  ]
})
