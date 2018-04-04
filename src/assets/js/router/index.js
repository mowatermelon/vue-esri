import Vue from 'vue'
import Router from 'vue-router'

const Hello = resolve => require(['@/pages/Hello'], resolve)
const Feature = resolve => require(['@/pages/Feature'], resolve)
const ScreenView = resolve => require(['@/components/maps/ScreenView'], resolve)
const MapView = resolve => require(['@/components/maps/MapView'], resolve)
const Manage = resolve => require(['@/pages/Manage'], resolve)
const Default = resolve => require(['@/pages/Default'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history', // "hash" | "history" | "abstract"
  base: __dirname,
  linkActiveClass: 'mo-active',
  routes: [
    {
      path: '/',
      name: 'v-main',
      component: Default
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
