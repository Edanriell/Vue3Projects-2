<script setup lang="ts">
	import { store } from "@/store.ts";
</script>

<template>
	<header class="w-full block p-4 border-b bg-blue-300 border-gray-700">
		<h2 class="text-xl text-gray-800">Profile Card Generator</h2>
		<button class="flex ml-auto text-gray-800 items-center" @click="store.clear()">Reset</button>
	</header>
</template>
