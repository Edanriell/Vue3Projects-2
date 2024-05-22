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
			path: "/BlogGallery",
			name: "BlogGallery",
			component: () => import("../views/BlogGallery.vue")
		},
		{
			path: "/ComputingAReactiveState",
			name: "ComputingAReactiveState",
			component: () => import("../views/ComputingAReactiveState.vue")
		},
		{
			path: "/UserInput",
			name: "UserInput",
			component: () => import("../views/UserInput.vue")
		},
		{
			path: "/PizzaItem",
			name: "PizzaItem",
			component: () => import("../views/PizzaItem.vue")
		},
		{
			path: "/UsingTheLifecycleFunctions",
			name: "UsingTheLifecycleFunctions",
			component: () => import("../views/UsingTheLifecycleFunctions.vue")
		},
		{
			path: "/Movies",
			name: "Movies",
			component: () => import("../views/Movies.vue")
		}
	]
});

export default router;
