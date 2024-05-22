<script lang="ts">
	export default {
		data() {
			return {
				firstName: "",
				lastName: ""
			};
		},
		computed: {
			fullName() {
				return `${this.firstName} ${this.lastName}`;
			}
		}
	};
</script>

<template>
	<div>
		<input v-model="firstName" placeholder="First name" />
		<input v-model="lastName" placeholder="Last name" />
		<h3 class="output">{{ fullName }}</h3>
	</div>
</template>
