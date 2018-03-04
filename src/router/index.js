import Vue from 'vue'
import Router from 'vue-router'

const Overall = resolve => require(['@/components/Overall'], resolve)
const Hello = resolve => require(['@/components/Hello'], resolve)
const Lorrys = resolve => require(['@/components/Lorrys'], resolve)
const NewLorry = resolve => require(['@/components/NewLorry'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',//"hash" | "history" | "abstract" 
  base: __dirname,
  // linkActiveClass: 'mdui-bottom-nav-active',
  routes: [
      {
        path: '/',
        name: 'v-main',
        component: Hello
      },
      {
        path: '/Overall',
        name: 'v-Overall',
        component: Overall
      },
      {
        path: '/Hello',
        name: 'v-Hello',
        component: Hello
      },
      {
        path: '/Lorrys',
        name: 'v-Lorrys',
        component: Lorrys
      },
      {
        path: '/NewLorry',
        name: 'v-NewLorry',
        component: NewLorry
      }
    //   {
    //     path: '/v-login/redirect/:redirect',
    //    component: login,
    //    name: 'v-login'
    //  }
  ]
})
