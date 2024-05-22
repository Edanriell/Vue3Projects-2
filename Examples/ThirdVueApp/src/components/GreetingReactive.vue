<!-- eslint-disable vue/multi-word-component-names -->

<script lang="ts">
	export default {
		props: ["greeting", "who"]
	};
</script>

<template>
	<div>{{ greeting }} {{ who }}</div>
</template>
