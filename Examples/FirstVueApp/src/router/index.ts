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
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue")
		},
		{
			path: "/first-component",
			name: "first component",
			component: () => import("../views/AboutView.vue")
		},
		{
			path: "/interpolation-with-conditionals",
			name: "interpolation with conditionals",
			component: () => import("../views/InterpolationWithConditionals.vue")
		},
		{
			path: "/basic-directives",
			name: "basic directives",
			component: () => import("../views/BasicDirectives.vue")
		},
		{
			path: "/two-way-binding",
			name: "Two way binding",
			component: () => import("../views/TwoWayBinding.vue")
		},
		{
			path: "/v-for",
			name: "Loops",
			component: () => import("../views/VFor.vue")
		},
		{
			path: "/loop-if",
			name: "Loop if",
			component: () => import("../views/LoopsAndIf.vue")
		},
		{
			path: "/loop-object",
			name: "Loop object",
			component: () => import("../views/LoopObject.vue")
		},
		{
			path: "/methods",
			name: "Methods",
			component: () => import("../views/Methods.vue")
		},
		{
			path: "/returning-data-using-vue-methods",
			name: "Methods 2",
			component: () => import("../views/ReturningDataUsingVueMethods.vue")
		},
		{
			path: "/using-a-vue-lifecycle-to-control-data",
			name: "Lifecycle",
			component: () => import("../views/UsingAVueLifecycleToControlData.vue")
		},
		{
			path: "/scss-styles",
			name: "Scss",
			component: () => import("../views/ScssStyles.vue")
		},
		{
			path: "/css-modules",
			name: "CssModules",
			component: () => import("../views/CssModules.vue")
		},
	]
});

export default router;
