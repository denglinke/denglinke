import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [{
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/home/dashboard.vue")
      },
      {
        path: "/organizational",
        name: "organizational",
        component: () => import("../views/organizational/organizational.vue")
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router