<script setup lang="ts">
	import { computed } from "vue";
	import { useRoute } from "vue-router";

	const props = defineProps({
		posts: {
			type: Array,
			default: () => []
		}
	});

	const route = useRoute();

	const post = computed(() => {
		const { postId } = route.params;
		return props.posts.find((p) => (p as any).slug === postId);
	});

	const title = computed(() => {
		return (post as any) && (post.value as any).title;
	});

	const content = computed(() => {
		return (post as any) && (post.value as any).content;
	});
</script>

<template>
	<div>
		<h2>Post: {{ title }}</h2>
		<p>
			{{ content }}
		</p>
	</div>
</template>
