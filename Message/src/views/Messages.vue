<script setup lang="ts">
	import DefaultLayout from "../layouts/default.vue";
	import { useRoute } from "vue-router";
	import { reactive } from "vue";

	const route = useRoute();
	const props = defineProps({
		currentLayout: {
			type: Object,
			default: () => DefaultLayout
		}
	});
	const messages: any = reactive(route.meta.messages || []);

	const emits = defineEmits(["update:currentLayout"]);
	emits("update:currentLayout", DefaultLayout);

	const addMessage = (message: any) => {
		messages.push(message);
	};
</script>

<template>
	<div>
		<router-link :to="{ name: 'list' }">List</router-link> |
		<router-link :to="{ name: 'editor' }">Editor</router-link>
		<router-view v-slot="{ Component }">
			<component :is="Component" :list="messages" @list:update="addMessage" />
		</router-view>
	</div>
</template>
