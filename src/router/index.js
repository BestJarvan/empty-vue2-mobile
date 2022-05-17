import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/index')
    },
    ...routers
  ]
})
