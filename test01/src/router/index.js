import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// import Home from "../views/Home.vue";
// import DataBindingHtml from "../views/DataBindingHtml.vue";
// import DataBindingInputText from "../views/DataBindingInputText.vue";
// import DataBindingTextarea from "../views/DataBindingTextarea.vue";
// import DataBindingSelect from "../views/DataBindingSelect.vue";
// import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
// import DataBindingRadio from "../views/DataBindingRadio.vue";
// import DataBindingAttribute from "../views/DataBindingAttribute.vue";
// import DataBindingButton from "../views/DataBindingButton.vue";
// import DataBindingClass from "../views/DataBindingClass.vue";
// import DataBindingClass2 from "../views/DataBindingClass2.vue";
// import DataBindingStyle from "../views/DataBindingStyle.vue";
// import DataBindingList from "../views/DataBindingList.vue";
// import DataBindingList2 from "../views/DataBindingList2.vue";
// import DataBindingList3 from "../views/DataBindingList3.vue";
// import RenderingIf from "../views/RenderingIf.vue";
// import EventBinding from "../views/EventBinding.vue";
// import Vending from "../views/Vending.vue";
// import UserList from "../views/UserList.vue";
// import Computed from "../views/Computed.vue";
// import Watch from "../views/Watch.vue";
// import Restaurant from "../views/Restaurant.vue";
// import NestedComponent from "../views/NestedComponent.vue";
// import NestedComponent2 from "../views/NestedComponent2.vue";
// import NestedComponent3 from "../views/NestedComponent3.vue";
// import NestedComponent4 from "../views/NestedComponent4.vue";
// import NestedComponent5 from "../views/NestedComponent5.vue";
// import Parent from "../views/Parent.vue";
// import Parent2 from "../views/Parent2.vue";
// import SlotUseModalLayout from "../views/SlotUseModalLayout.vue";
// import ProvideInject from "../views/ProvideInject.vue";

// const routes = [{
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/databindinghtml",
//     name: "DataBindingHtml",
//     component: DataBindingHtml,
//   },
//   {
//     path: "/databindinginputtext",
//     name: "DataBindingInputText",
//     component: DataBindingInputText,
//   },
//   {
//     path: "/databindingarea",
//     name: "DataBindingTextarea",
//     component: DataBindingTextarea,
//   },
//   {
//     path: "/databindingselect",
//     name: "DataBindingSelect",
//     component: DataBindingSelect,
//   },
//   {
//     path: "/databindingcheckbox",
//     name: "DataBindingCheckbox",
//     component: DataBindingCheckbox,
//   },
//   {
//     path: "/databindingradio",
//     name: "DataBindingRadio",
//     component: DataBindingRadio,
//   },
//   {
//     path: "/databindingattribute",
//     name: "DataBindingAttribute",
//     component: DataBindingAttribute,
//   },
//   {
//     path: "/databindingbutton",
//     name: "DataBindingButton",
//     component: DataBindingButton,
//   },
//   {
//     path: "/databindingclass",
//     name: "DataBindingClass",
//     component: DataBindingClass,
//   },
//   {
//     path: "/databindingclass2",
//     name: "DataBindingClass2",
//     component: DataBindingClass2,
//   },
//   {
//     path: "/databindingstyle",
//     name: "DataBindingStyle",
//     component: DataBindingStyle,
//   },
//   {
//     path: "/databindinglist",
//     name: "DataBindingList",
//     component: DataBindingList,
//   },
//   {
//     path: "/databindinglist2",
//     name: "DataBindingList2",
//     component: DataBindingList2,
//   },
//   {
//     path: "/databindinglist3",
//     name: "DataBindingList3",
//     component: DataBindingList3,
//   },
//   {
//     path: "/renderingif",
//     name: "RenderingIf",
//     component: RenderingIf,
//   },
//   {
//     path: "/eventbinding",
//     name: "EventBinding",
//     component: EventBinding,
//   },
//   {
//     path: "/vending",
//     name: "Vending",
//     component: Vending,
//   },
//   {
//     path: "/userlist",
//     name: "UserList",
//     component: UserList,
//   },
//   {
//     path: "/computed",
//     name: "Computed",
//     component: Computed,
//   },
//   {
//     path: "/watch",
//     name: "Watch",
//     component: Watch,
//   },
//   {
//     path: "/restaurant",
//     name: "Restaurant",
//     component: Restaurant,
//   },
//   {
//     path: "/nested",
//     name: "NestedComponent",
//     component: NestedComponent,
//   },
//   {
//     path: "/nested2",
//     name: "NestedComponent2",
//     component: NestedComponent2,
//   },
//   {
//     path: "/nested3",
//     name: "NestedComponent3",
//     component: NestedComponent3,
//   },
//   {
//     path: "/nested4",
//     name: "NestedComponent4",
//     component: NestedComponent4,
//   },
//   {
//     path: "/nested5",
//     name: "NestedComponent5",
//     component: NestedComponent5,
//   },
//   {
//     path: "/parent",
//     name: "Parent",
//     component: Parent,
//   },
//   {
//     path: "/parent2",
//     name: "Parent2",
//     component: Parent2,
//   },
//   {
//     path: "/slot",
//     name: "SlotUseModalLayout",
//     component: SlotUseModalLayout,
//   },
//   {
//     path: "/provideinject",
//     name: "ProvideInject",
//     component: ProvideInject,
//   },
//   // {
//   //   path: "/about",
//   //   name: "About",
//   //   component: About,
//   // },
//   // {
//   //   path: "/databinding",
//   //   name: "DataBinding",
//   //   component: DataBinding,
//   // },

//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import( /* webpackChunkName: "about" */ "../views/About.vue"),
//   },
//   {
//     path: "/databinding",
//     name: "DataBinding",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import( /* webpackPrefetch:true, webpackChunkName: "databinding" */ "../views/DataBinding.vue"),
//   }
// ];

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
    path: '/DataBindingList3',
    name: 'DataBindingList3',
    component: () => import( /* webpackChunkName: "DataBindingList3" */ '../views/DataBindingList3.vue')
  },
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
  },
  {
    path: '/NestedComponent',
    name: 'NestedComponent',
    component: () => import( /* webpackChunkName: "NestedComponent" */ '../views/NestedComponent.vue')
  },
  {
    path: '/NestedComponent1',
    name: 'NestedComponent1',
    component: () => import( /* webpackChunkName: "NestedComponent1" */ '../views/NestedComponent1.vue')
  },
  {
    path: '/ChildComponent',
    name: 'ChildComponent',
    component: () => import( /* webpackChunkName: "ChildComponent" */ '../views/ChildComponent.vue')
  },
  {
    path: '/ChildComponent2',
    name: 'ChildComponent2',
    component: () => import( /* webpackChunkName: "ChildComponent2" */ '../views/ChildComponent2.vue')
  },
  {
    path: '/ChildComponent3',
    name: 'ChildComponent3',
    component: () => import( /* webpackChunkName: "ChildComponent3" */ '../views/ChildComponent3.vue')
  },
  {
    path: '/ChildComponent4',
    name: 'ChildComponent4',
    component: () => import( /* webpackChunkName: "ChildComponent4" */ '../views/ChildComponent4.vue')
  },
  {
    path: '/ChildComponent5',
    name: 'ChildComponent5',
    component: () => import( /* webpackChunkName: "ChildComponent5" */ '../views/ChildComponent5.vue')
  },
  {
    path: '/SlotUserModelLayout',
    name: 'SlotUserModelLayout',
    component: () => import( /* webpackChunkName: "SlotUserModelLayout" */ '../views/SlotUserModelLayout.vue')
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: () => import( /* webpackChunkName: "ProvideInject" */ '../views/ProvideInject.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
