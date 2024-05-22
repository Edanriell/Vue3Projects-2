<script lang="ts">
	import * as Countable from "countable";
	export default {
		mounted() {
			(Countable as any).on(this.$refs.textArea, (count: any) => {
				this.count = count;
			});
		},
		beforeUnmount() {
			(Countable as any).off(this.$refs.textArea);
		},
		data() {
			return {
				count: null
			};
		}
	};
</script>

<template>
	<div>
		<textarea ref="textArea" cols="50" rows="7"> </textarea>
		<ul v-if="count">
			<li>Paragraphs: {{ (count as any).paragraphs }}</li>
			<li>Sentences: {{ (count as any).sentences }}</li>
			<li>Words: {{ (count as any).words }}</li>
		</ul>
	</div>
</template>
