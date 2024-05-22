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
			path: "/implementing-computed-data-into-a-vue-component",
			name: "ImplementingComputedDataIntoAVueComponent",
			component: () => import("../views/ImplementingComputedDataIntoAVueComponent.vue")
		},
		{
			path: "/using-computed-setters",
			name: "UsingComputedSetters",
			component: () => import("../views/UsingComputedSetters.vue")
		},
		{
			path: "/using-watchers-to-set-new-values",
			name: "UsingWatchersToSetNewValues",
			component: () => import("../views/UsingWatchersToSetNewValues.vue")
		},
		{
			path: "/watching-nested-properties-of-a-data-object",
			name: "WatchingNestedPropertiesOfADataObject",
			component: () => import("../views/WatchingNestedPropertiesOfADataObject.vue")
		},
		{
			path: "/using-asynchronous-methods-to-retrieve-data-from-an-api",
			name: "UsingAsynchronousMethodsToRetrieveDataFromAnAPI",
			component: () => import("../views/UsingAsynchronousMethodsToRetrieveDataFromAnAPI.vue")
		},
		{
			path: "/HandlingTheSearchFunctionalityUsingAVueMethodAWatcherAndComputedProps",
			name: "HandlingTheSearchFunctionalityUsingAVueMethodAWatcherAndComputedProps",
			component: () => import("../views/HandlingTheSearchFunctionalityUsingAVueMethodAWatcherAndComputedProps.vue")
		},
	]
});

export default router;
