import Vue from 'vue'
import Router from 'vue-router'

const Hello = resolve => require(['@/pages/Hello'], resolve)
const Feature = resolve => require(['@/pages/Feature'], resolve)
const ScreenView = resolve => require(['@/components/ScreenView'], resolve)
const MapView = resolve => require(['@/components/MapView'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history', // "hash" | "history" | "abstract"
  base: __dirname,
  linkActiveClass: 'mo-active',
  routes: [
    {
      path: '/',
      name: 'v-main',
      component: MapView
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
      path: '/MapView',
      name: 'v-MapView',
      component: MapView
    },
    {
      path: '/ScreenView',
      name: 'v-ScreenView',
      component: ScreenView
    }
  ]
})
