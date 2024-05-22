<script lang="ts">
import TodoList from "./components/TodoList.vue";
import TodoEntry from "./components/TodoEntry.vue";
export default {
  components: {
    TodoList,
    TodoEntry,
  },
  inject: ['axios'],
  async mounted() {
    const { data: todos } = await (this.axios as any).get(`${this.$baseUrl}/todos`);
    this.todos = todos;
  },
  data() {
    return { todos: [] };
  },
  methods: {
    handleCompleteChange(id: any, newCompleted: any) {
      (this.todos as any) = this.todos.map((t) =>
          t.id === id ? { ...t as any, completed: newCompleted } : t
      );
    },
  },
};
</script>

<template>
  <div id="app">
    <TodoList :todos="todos">
      <template #todo="{ todo }">
        <TodoEntry
            :id="todo.id"
            :title="todo.title"
            :completed="todo.completed"
            @completeChange="handleCompleteChange(todo.id, $event)"
        />
      </template>
    </TodoList>
  </div>
</template>

