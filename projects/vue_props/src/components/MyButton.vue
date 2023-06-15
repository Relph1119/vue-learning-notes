<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup>
const age = 18;
</script>

<style scoped>
  button {
    width: 200px;
    height: 100px;
    font-size: 26px;
  }
</style>
