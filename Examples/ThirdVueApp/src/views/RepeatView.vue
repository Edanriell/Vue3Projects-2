<script lang="ts">
	import Repeat from "../components/Repeat.vue";
	export default {
		components: {
			Repeat
		}
	};
</script>

<template>
	<main>
		<Repeat :config="{ times: 3, content: 'Repeat me.' }" />
	</main>
</template>
