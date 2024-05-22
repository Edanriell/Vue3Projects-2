<!-- eslint-disable vue/multi-word-component-names -->

<script lang="ts">
	export default {
		props: {
			config: {
				type: Object,
				required: true,
				validator(value: any) {
					return typeof value.times === "number" && typeof value.content === "string";
				}
			}
		},
		computed: {
			repetitions() {
				return Array.from({ length: this.config.times });
			}
		}
	};
</script>

<template>
	<div>
		<span v-for="r in (repetitions as any)" :key="r">
			{{ config.content }}
		</span>
	</div>
</template>
