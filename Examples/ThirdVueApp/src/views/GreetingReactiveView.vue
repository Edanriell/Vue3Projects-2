<script lang="ts">
	import GreetingReactive from "../components/GreetingReactive.vue";
	export default {
		components: {
			GreetingReactive
		},
		data() {
			return {
				greeting: "Hello",
				who: "Vue.js"
			};
		}
	};
</script>

<template>
	<div id="app">
		<input placeholder="What is your name" v-model="who" />
		<GreetingReactive greeting="Hi" :who="who" />
	</div>
</template>
