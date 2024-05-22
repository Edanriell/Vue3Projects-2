<script setup lang="ts">
	import PostListItem from "./PostListItem.vue";

	defineProps({
		posts: {
			type: Array,
			default: () => []
		}
	});
</script>

<template>
	<div>
		<PostListItem
			v-for="post in posts"
			:key="(post as any).slug"
			:title="(post as any).title"
			:description="(post as any).description"
			:tags="(post as any).tags"
			:slug="(post as any).slug"
		/>
	</div>
</template>
