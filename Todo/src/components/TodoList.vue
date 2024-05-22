<script lang="ts" setup>
const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul>
    <li v-for="todo in props.todos" :key="(todo as any).id">
      <slot name="todo" :todo="todo" />
    </li>
  </ul>
</template>

