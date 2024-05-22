import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutView.vue")
		},
		{
			path: "/greeting",
			name: "Greeting",
			component: () => import("../views/GreetingView.vue")
		},
		{
			path: "/greeting-reactive",
			name: "GreetingReactive",
			component: () => import("../views/GreetingReactiveView.vue")
		},
		{
			path: "/repeat",
			name: "Repeat",
			component: () => import("../views/RepeatView.vue")
		},
	]
});

export default router;
