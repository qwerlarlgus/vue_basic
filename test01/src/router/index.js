import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/DataBindingButton',
  //   name: 'DataBindingButton',
  //   component: DataBindingButton
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
   {
     path: '/qq',
     name: 'qq',
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import( /* webpackChunkName: "qq" */ '../views/qq.vue')
   },
  {
    path: '/DataBindingButton',
    name: 'DataBindingButton',
    component: () => import( /* webpackChunkName: "DataBindingButton" */ '../views/DataBindingButton.vue')
  },
  {
    path: '/DataBindingClass',
    name: 'DataBindingClass',
    component: () => import( /* webpackChunkName: "DataBindingClass" */ '../views/DataBindingClass.vue')
  },
  {
    path: '/DataBindingClass2',
    name: 'DataBindingClass2',
    component: () => import( /* webpackChunkName: "DataBindingClass2" */ '../views/DataBindingClass2.vue')
  },
  {
    path: '/DataBindingStyle',
    name: 'DataBindingStyle',
    component: () => import( /* webpackChunkName: "DataBindingStyle" */ '../views/DataBindingStyle.vue')
  },
  {
    path: '/DataBindingStyle1',
    name: 'DataBindingStyle1',
    component: () => import( /* webpackChunkName: "DataBindingStyle1" */ '../views/DataBindingStyle1.vue')
  },
  {
    path: '/DataBindingList',
    name: 'DataBindingList',
    component: () => import( /* webpackChunkName: "DataBindingList" */ '../views/DataBindingList.vue')
  },
  // {
  //   path: '/DataBindingList1',
  //   name: 'DataBindingList1',
  //   component: () => import( /* webpackChunkName: "DataBindingList1" */ '../views/DataBindingList1.vue')
  // },
  // {
  //   path: '/DataBindingList2',
  //   name: 'DataBindingList2',
  //   component: () => import( /* webpackChunkName: "DataBindingList2" */ '../views/DataBindingList2.vue')
  // },
  {
    path: '/RenderingVif',
    name: 'RenderingVif',
    component: () => import( /* webpackChunkName: "RenderingVif" */ '../views/RenderingVif.vue')
  },
  {
    path: '/RenderingVif1',
    name: 'RenderingVif1',
    component: () => import( /* webpackChunkName: "RenderingVif1" */ '../views/RenderingVif1.vue')
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: () => import( /* webpackChunkName: "EventClick" */ '../views/EventClick.vue')
  },
  {
    path: '/EventClick1',
    name: 'EventClick1',
    component: () => import( /* webpackChunkName: "EventClick1" */ '../views/EventClick1.vue')
  },
  {
    path: '/EventClick2',
    name: 'EventClick2',
    component: () => import( /* webpackChunkName: "EventClick2" */ '../views/EventClick2.vue')
  },
  {
    path: '/EventChange',
    name: 'EventChange',
    component: () => import( /* webpackChunkName: "EventChange" */ '../views/EventChange.vue')
  },
  {
    path: '/vending',
    name: 'vending',
    component: () => import( /* webpackChunkName: "vending" */ '../views/vending.vue')
  },
  {
    path: '/Watch',
    name: 'Watch',
    component: () => import( /* webpackChunkName: "Watch" */ '../views/Watch.vue')
  },
  {
    path: '/Computed',
    name: 'Computed',
    component: () => import( /* webpackChunkName: "Computed" */ '../views/Computed.vue')
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import( /* webpackChunkName: "restaurant" */ '../views/restaurant.vue')
  },
  {
    path: '/restaurant1',
    name: 'restaurant1',
    component: () => import( /* webpackChunkName: "restaurant1" */ '../views/restaurant1.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
