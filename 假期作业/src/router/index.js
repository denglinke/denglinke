import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    children: [{
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue')
      },
      {
        path: '/ListOne',
        name: 'ListOne',
        component: () => import('../views/ListOne.vue')
      },
      {
        path: '/ListTow',
        name: 'ListTow',
        component: () => import('../views/ListTow.vue')
      },
      {
        path: '/ListThree',
        name: 'ListThree',
        component: () => import('../views/ListThree.vue')
      },
      {
        path: '/ListFour',
        name: 'ListFour',
        component: () => import('../views/ListFour.vue')
      },
      {
        path: '/ListFive',
        name: 'ListFive',
        component: () => import('../views/ListFive.vue')
      },
      {
        path: '/GetListOne',
        name: 'GetListOne',
        component: () => import('../views/GetListOne.vue')
      },
      {
        path: '/GetListTow',
        name: 'GetListTow',
        component: () => import('../views/GetListTow.vue')
      },
      {
        path: '/Table',
        name: 'Table',
        component: () => import('../views/Table.vue')
      },
      {
        path: '/Text',
        name: 'Text',
        component: () => import('../views/Text.vue')
      },
      {
        path: '/Setup',
        name: 'Setup',
        component: () => import('../views/Setup.vue')
      },
      {
        path: '/Explain',
        name: 'Explain',
        component: () => import('../views/Explain.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router