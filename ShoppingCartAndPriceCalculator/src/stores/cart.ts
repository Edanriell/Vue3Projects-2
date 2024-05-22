import { defineStore } from "pinia";

export const useCartStore = defineStore({
	id: "cart",
	state: () => ({
		products: [
			{ name: "Widgets", price: 10 },
			{ name: "Doodads", price: 8 },
			{ name: "Roundtuits", price: 12 },
			{ name: "Fluff", price: 4 },
			{ name: "Goobers", price: 7 }
		],
		cart: []
	}),
	getters: {
		cartTotal: (state) =>
			state.cart.reduce((total, item: any) => {
				const product = state.products.find((p) => p.name === item.name);
				return total + product!.price * item.quantity;
			}, 0)
	},
	actions: {
		addToCart(product: any) {
			const index: number = this.cart.findIndex((p: any) => p.name === product.name);
			if (index !== -1) {
				this.cart[index].quantity++;
			} else {
				(this.cart as any).push({ name: product.name, quantity: 1 });
			}
		},
		removeFromCart(product: any) {
			const index = this.cart.findIndex((p: any) => p.name === product.name);
			if (index !== -1) {
				this.cart[index].quantity--;
				if (this.cart[index].quantity === 0) this.cart.splice(index, 1);
			}
		}
	}
});
