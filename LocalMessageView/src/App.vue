<script lang="ts">
	import MessageEditor from "./components/MessageEditor.vue";
	import MessageFeed from "./components/MessageFeed.vue";
	export default {
		components: {
			MessageEditor,
			MessageFeed
		},
		data(): { messages: any } {
			return { messages: [] };
		},
		methods: {
			onSend(event: any) {
				this.messages = [...this.messages, event];
			}
		}
	};
</script>

<template>
	<div id="app">
		<MessageFeed :messages="messages" />
		<MessageEditor @send="onSend($event)" />
	</div>
</template>
