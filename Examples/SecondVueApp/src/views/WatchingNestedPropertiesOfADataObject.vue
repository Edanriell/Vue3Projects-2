<script lang="ts">
	export default {
		data() {
			return {
				discount: 0,
				product: {
					price: 25,
					label: "Blue juice"
				}
			};
		},
		methods: {
			updatePrice() {
				if (this.product.price < 1) return;
				this.product.price--;
			}
		},
		watch: {
			"product.price"() {
				this.discount++;
			}
		}
	};
</script>

<template>
	<div class="container">
		<h1>Deep Watcher</h1>
		<div>
			<h4>{{ product.label }}</h4>
			<h5>${{ product.price }} (${{ discount }} Off)</h5>
			<button @click="updatePrice">Reduce Price!</button>
		</div>
	</div>
</template>

<style scoped>
	.container {
		margin: 0 auto;
		padding: 30px;
		max-width: 600px;
		font-family: "Avenir", Helvetica, sans-serif;
		margin: 0;
	}
	button {
		display: inline-block;
		background: rgb(235, 50, 50);
		border-radius: 10px;
		font-size: 14px;
		color: white;
		padding: 10px 20px;
		text-decoration: none;
	}
</style>
