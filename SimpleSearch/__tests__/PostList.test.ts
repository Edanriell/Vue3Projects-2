import { describe, expect, it } from "vitest";

import { mount, shallowMount } from "@vue/test-utils";
import PostList from "../src/components/PostList.vue";
import PostListItem from "../src/components/PostListItem.vue";

import router from "@/router";

describe("PostList", () => {
	it("PostList renders the right number of PostListItem", () => {
		const wrapper = shallowMount(PostList, {
			propsData: {
				posts: [
					{
						title: "Blog post title",
						description: "Blog post description"
					}
				]
			},
			global: {
				plugins: [router]
			}
		});
		expect(wrapper.findAllComponents(PostListItem)).toHaveLength(1);
	});

	it("PostList renders passed title and description for each passed post", () => {
		const wrapper = mount(PostList, {
			propsData: {
				posts: [
					{
						title: "Title 1",
						description: "Description 1"
					},
					{
						title: "Title 2",
						description: "Description 2"
					}
				]
			},
			global: {
				plugins: [router]
			}
		});

		const outputText = wrapper.text();
		expect(outputText).toContain("Title 1");
		expect(outputText).toContain("Description 1");
		expect(outputText).toContain("Title 2");
		expect(outputText).toContain("Description 2");
	});

	it("PostList renders tags for each post", () => {
		const wrapper = mount(PostList, {
			propsData: {
				posts: [
					{
						tags: ["react", "vue"]
					},
					{
						tags: ["html", "angularjs"]
					}
				]
			},
			global: {
				plugins: [router]
			}
		});

		const outputText = wrapper.text();
		expect(outputText).toContain("#react");
		expect(outputText).toContain("#vue");
		expect(outputText).toContain("#html");
		expect(outputText).toContain("#angularjs");
	});

	it("PostList renders correctly", () => {
		const wrapper = mount(PostList, {
			propsData: {
				posts: [
					{
						title: "Title 1",
						description: "Description 1"
					},
					{
						title: "Title 2",
						description: "Description 2"
					}
				]
			},
			global: {
				plugins: [router]
			}
		});

		expect(wrapper.text()).toMatchSnapshot();
	});
});
