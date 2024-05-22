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
			path: "/messageComponent",
			name: "MessageComponent",
			component: () => import("../views/MessageView.vue")
		},
		{
			path: "/messagesComponent",
			name: "MessagesComponent",
			component: () => import("../views/MessagesView.vue")
		}
	]
});

export default router;
