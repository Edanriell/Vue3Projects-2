<script setup lang="ts">
	const text = "Directive text";
	const html = "Stylise</br>HTML in<br/><b>your data</b>";
	const link = {
		title: "Go to Google",
		url: "https://google.com",
		tabindex: 1,
		target: "_blank"
	};
</script>

<template>
	<div>
		<!-- <h1>{{ text }}</h1> -->
		<!-- <h1 v-text="text"></h1> -->
		<!-- <h1 v-if="false" v-once v-text="text"></h1>
		<h2 v-html="html" v-else-if="false" />
		<a v-else :href="link.url" :target="link.target" :tabindex="link.tabindex">{{ link.title }}</a> -->
		<h1 v-show="true" v-once v-text="text"></h1>
		<h2 v-html="html" v-show="false" />
		<a :href="link.url" :target="link.target" :tabindex="link.tabindex">{{ link.title }}</a>
	</div>
</template>

<style></style>
