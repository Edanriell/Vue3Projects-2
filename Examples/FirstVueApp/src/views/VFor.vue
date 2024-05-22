<script setup lang="ts">
	const interests = ["TV", "Games", "Sports"];
</script>

<template>
	<h1>Looping through arrays</h1>
	<ul>
		<li v-for="(item, index) in interests" :key="index">{{ item }}</li>
	</ul>
</template>
