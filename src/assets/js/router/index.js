import Vue from 'vue'
import Router from 'vue-router'

const Hello = resolve => require(['@/pages/Hello'], resolve)
const Feature = resolve => require(['@/pages/Feature'], resolve)
const vueMap = resolve => require(['@/pages/Map'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history', // "hash" | "history" | "abstract"
  base: __dirname,
  linkActiveClass: 'mo-active',
  routes: [
    {
      path: '/',
      name: 'v-main',
      component: vueMap
    },
    {
      path: '/Hello',
      name: 'v-Hello',
      component: Hello
    },
    {
      path: '/Feature',
      name: 'v-Feature',
      component: Feature
    },
    {
      path: '/Map',
      name: 'v-Map',
      component: vueMap
    }
  ]
})
