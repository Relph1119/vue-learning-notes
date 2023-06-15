<template>
  <h1>A组件 {{ props.name }}</h1>
</template>

<script setup>
const props = defineProps(["name"])
</script>

<style scoped>

</style>
