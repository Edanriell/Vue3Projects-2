<script setup lang="ts">
	import { RouterLink, RouterView } from "vue-router";
	import HelloWorld from "./components/HelloWorld.vue";
	import gsap from "gsap";
	import { onMounted, ref } from "vue";

	const logo = ref();

	onMounted(() => {
		gsap.from(logo.value, { duration: 30, rotation: 3600 });
	});

	const transition = "fade";
	const mode = "out-in";
</script>

<template>
	<header>
		<img ref="logo" alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<HelloWorld msg="You did it!" />

			<div id="nav">
				<nav>
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/about">About</RouterLink>
					<RouterLink to="/messageComponent">Message</RouterLink>
					<RouterLink to="/messagesComponent">Messages</RouterLink>
				</nav>
			</div>
		</div>
	</header>

	<router-view v-slot="{ Component, route }">
		<transition :name="route.meta.transition || transition" :mode="mode">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<style scoped>
	header {
		line-height: 1.5;
		max-height: 100vh;
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
	}

	nav {
		width: 100%;
		font-size: 12px;
		text-align: center;
		margin-top: 2rem;
	}

	nav a.router-link-exact-active {
		color: var(--color-text);
	}

	nav a.router-link-exact-active:hover {
		background-color: transparent;
	}

	nav a {
		display: inline-block;
		padding: 0 1rem;
		border-left: 1px solid var(--color-border);
	}

	nav a:first-of-type {
		border: 0;
	}

	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 2);
		}

		.logo {
			margin: 0 2rem 0 0;
		}

		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}

		nav {
			text-align: left;
			margin-left: -1rem;
			font-size: 1rem;

			padding: 1rem 0;
			margin-top: 1rem;
		}
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 5s ease-in;
	}

	/**Zoom animation */
	.zoom-enter-active,
	.zoom-leave-active {
		animation-duration: 5.5s;
		animation-fill-mode: both;
		animation-name: zoom;
	}

	.zoom-leave-active {
		animation-direction: reverse;
	}

	@keyframes zoom {
		from {
			opacity: 0;
			transform: scale3d(0.4, 0.4, 0.4);
		}

		100% {
			opacity: 1;
		}
	}

	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
