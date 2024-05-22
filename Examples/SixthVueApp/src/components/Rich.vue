<script lang="ts" setup>
import { defineProps } from 'vue'

const { url, title, description } = defineProps(['url', 'title', 'description'])
</script>

<template>
  <div class="card">
    <img :src="url" width="200" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 200px;
}
h3 {
  font-weight: normal;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
