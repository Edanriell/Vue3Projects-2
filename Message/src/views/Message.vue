<script setup lang="ts">
	import MessageLayout from "../layouts/messageLayout.vue";

	const props = defineProps({
		content: {
			type: String,
			default: ""
		},
		currentLayout: {
			type: Object,
			default: () => MessageLayout
		}
	});

	const emits = defineEmits(["update:currentLayout"]);

	emits("update:currentLayout", MessageLayout);
</script>

<template>
	<div>
		<p>{{ content }}</p>
		<router-view />
	</div>
</template>
