<script setup lang="ts">
	import MessagesComponent from "../components/MessagesComponent.vue";
</script>

<template>
	<div class="about">
		<MessagesComponent />
	</div>
</template>

<style>
	@media (min-width: 1024px) {
		.about {
			min-height: 100vh;
			display: flex;
			align-items: center;
		}
	}
</style>
