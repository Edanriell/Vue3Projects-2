<script lang="ts">
	import { createClient } from "contentful";

	const client = createClient({
		space: "hpr0uushokd4",
		accessToken: "jwEHepvQx-kMtO7_2ldjhE4WMAsiDp3t1xxBT8aDp7U"
	});

	export default {
		name: "app",
		data() {
			return {
				authors: [],
				posts: {}
			};
		},
		computed: {
			name() {
				return this.authors[0] && (this.authors[0] as any).fields.name;
			},
			title() {
				return this.authors[0] && (this.authors[0] as any).fields.title;
			},
			bio() {
				return this.authors[0] && (this.authors[0] as any).fields.shortBio;
			}
		},
		async created() {
			this.authors = (await this.getPeople()) as any;
			this.posts = await this.getBlogPosts();
		},
		methods: {
			async getPeople() {
				const entries = await client.getEntries({ content_type: "person" });
				return entries.items;
			},
			async getBlogPosts() {
				const entries = await client.getEntries({
					content_type: "blogPost",
					order: "-fields.publishDate" as any
				});
				return entries.items;
			}
		}
	};
</script>

<template>
	<div id="app">
		<div v-if="name" class="author">
			<h2>
				{{ name }}
			</h2>
			<h3 v-if="title">{{ title }}</h3>
			<p v-if="bio">{{ bio }}</p>
		</div>
		<div class="articles">
			<hr />
			<h2>Articles</h2>
			<section v-if="posts" class="articles-list">
				<article v-for="(post, i) in posts" :key="i">
					<img
						v-if="(post as any).fields.heroImage"
						class="thumbnail"
						:src="`${(post as any).fields.heroImage.fields.file.url}?fit=scale&w=350&h=196`"
					/>
					<div class="article-text">
						<div class="date">
							{{ new Date((post as any).fields.publishDate).toDateString() }}
						</div>
						<h4>{{ (post as any).fields.title }}</h4>
						<p>{{ (post as any).fields.description }}</p>
					</div>
				</article>
			</section>
		</div>
	</div>
</template>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 60px auto 0;
		max-width: 800px;
	}

	.articles-list > article {
		display: flex;
		text-align: left;
		padding-bottom: 15px;
	}

	.article-text {
		padding: 15px 0;
	}

	.thumbnail {
		margin-right: 30px;
	}

	.date {
		font-size: 12px;
		font-weight: bold;
		text-transform: uppercase;
	}
</style>
