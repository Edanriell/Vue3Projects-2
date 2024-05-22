<!-- <script>
	export default {
		setup() {
			const greeting = "Hello";
			const who = "John";
			return { greeting, who };
		}
	};
</script> -->

<script setup lang="ts">
	import Greetings from "./CreatingADynamicGreetingComponentWithTheSetup.vue";
	const greeting = "Hello";
	const who = "John";
</script>

<template>
	<Greetings greeting="Hey" who="JavaScript" />

	<div>{{ greeting }} {{ who }}</div>
</template>
