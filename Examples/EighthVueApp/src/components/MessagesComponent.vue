<script lang="ts">
	export default {
		data() {
			return {
				messages: [
					"Hello, how are you?",
					"The weather is nice",
					"This is the message feed",
					"And I am the fourth message",
					"Chapter 8 is fun",
					"Animation is super awesome",
					"Sorry, I didn't know you called",
					"Be patient, animation comes right up"
				],
				show: false
			};
		},
		methods: {
			sorting(isDescending?: any) {
				this.messages.sort();

				if (isDescending) {
					this.messages.reverse();
				}
			},
			shuffle() {
				this.messages.sort(() => Math.random() - 0.5);
			}
		}
	};
</script>

<template>
	<div>
		<button @click="sorting()">Sort A-Z</button>
		<button @click="sorting(true)">Sort Z-A</button>
		<button @click="shuffle()">Shuffle</button>
		<transition-group name="flip" tag="div">
			<p v-for="message in messages" :key="message" class="message--item">
				{{ message }}
			</p>
		</transition-group>
	</div>
</template>

<style scoped>
	.message--item {
		transition: all 2s;
	}

	.flip-enter-from,
	.flip-leave-to {
		opacity: 0;
		transform: translateY(20px);
	}

	.flip-leave-active {
		position: absolute;
	}

	.flip-move {
		transition: transform 1s;
	}
</style>
