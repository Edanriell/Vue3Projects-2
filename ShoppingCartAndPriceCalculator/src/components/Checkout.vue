<script setup lang="ts">
	import { useCartStore } from "@/stores/cart.js";

	const store = useCartStore();
</script>

<template>
	<h2>Checkout</h2>
	Your total is ${{ store.cartTotal }}.
	<button v-show="store.cartTotal > 0" @click="checkout">Checkout</button>
</template>

<script lang="ts">
	export default {
		name: "Cart",
		methods: {
			checkout() {
				alert("Checkout process!");
			}
		}
	};
</script>
