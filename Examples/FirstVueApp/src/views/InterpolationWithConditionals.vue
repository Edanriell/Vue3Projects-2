<!-- <script lang="ts">
	export default {
		data() {
			return {
				title: "My second component!",
				isUppercase: false
			};
		}
	};
</script> -->
<script setup lang="ts">
	const title = "My second component!";
	const isUppercase = true;
</script>

<template>
	<div>
		<h1>{{ isUppercase ? title.toUpperCase() : title }}</h1>
	</div>
</template>

<style></style>
