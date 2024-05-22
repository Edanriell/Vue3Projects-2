<script setup lang="ts">
	import { computed, reactive, ref } from "vue";
	const books = reactive([
		{
			title: "Vue 3",
			description: "Vue 3 is awesome"
		},
		{
			title: "Vue 2",
			description: "Vue 2 is awesome"
		},
		{
			title: "Pinia state management",
			description: "Pinia is awesome"
		},
		{
			title: "Vue Router",
			description: "Vue Router is awesome"
		},
		{
			title: "Testing with Playwright",
			description: "Playwright is awesome"
		},
		{ title: "Testing with Cypress", description: "Cypress is awesome" }
	]);

	const searchTerm = ref("vue");
	const filteredBooks = computed(() =>
		books.filter((book) => book.title.toLowerCase().includes(searchTerm.value))
	);
</script>

<template>
	<ul>
		<li v-for="(book, index) in filteredBooks" :key="index">
			<article>
				<h3>{{ book.title }}</h3>
				<p>{{ book.description }}</p>
			</article>
		</li>
	</ul>
</template>
