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
			{
				path: "/staff",
				name: "staff",
				component: () => import("../views/staff/staff.vue")
			},
			{
				path: "/permission",
				name: "permission",
				component: () => import("../views/permission/permission.vue")
			},
			{
				path: "/settings",
				name: "settings",
				component: () => import("../views/Company settings/settings.vue")
			},
			{
				path: "/security",
				name: "security",
				component: () => import("../views/socialsecurity/security.vue")
			},
			{
				path: "/approvals",
				name: "approvals",
				component: () => import("../views/approvals/approvals.vue")
			},
			{
				path: "/attendances",
				name: "attendances",
				component: () => import("../views/attendances/attendances.vue")
			},
			{
				path: "/wages",
				name: "wages",
				component: () => import("../views/wages/wages.vue")
			},
			{
				path: "/daochu",
				name: "daochu",
				component: () => import("../views/staff/daochu.vue")
			},
			{
				path: "/qingjia",
				name: "qingjia",
				component: () => import("../views/approvals/qingjia.vue")
			},
			{
				path: "/content",
				name: "content",
				component: () => import("../views/approvals/content.vue")
			},
			{
				path: "/children",
				name: "children",
				component: () => import("../views/socialsecurity/children.vue")
			},
			{
				path: "/shezhi",
				name: "shezhi",
				component: () => import("../views/wages/shezhi.vue")
			},
			{
				path: "/wagesss",
				name: "wagesss",
				component: () => import("../views/wages/wagesss.vue")
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
	},

]

const router = new VueRouter({
	routes
})

export default router