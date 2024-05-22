<script setup lang="ts">
	import MessageComponent from "../components/MessageComponent.vue";
</script>

<template>
	<div class="about">
		<MessageComponent />
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
