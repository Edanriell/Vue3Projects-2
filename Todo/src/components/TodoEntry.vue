<script lang="ts">
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['axios'],
  methods: {
    toggleCompletion() {
      const newCompleted = !this.completed;
      this.$emit("completeChange", newCompleted);
      (this.axios as any).patch(`${this.$baseUrl}/todos/${this.id}`, {
        completed: newCompleted,
      });
    },
  },
};
</script>

<template>
  <div>
    <label>{{ title }}</label>
    <input type="checkbox" :checked="completed" @change="toggleCompletion()" />
  </div>
</template>

