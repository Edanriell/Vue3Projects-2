<script lang="ts" setup>
const { title } = defineProps(['title'])
</script>

<template>
  <h3>{{ title }}</h3>
</template>

<style scoped>
h3 {
  width: 100%;
  font-weight: normal;
}
</style>
