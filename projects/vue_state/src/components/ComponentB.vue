<template>
  <h3>B组件</h3>
  <ul>
    <li v-if="isShow">
      <ComponentC></ComponentC>
    </li>
  </ul>
</template>

<script setup>
import ComponentC from "./ComponentC.vue";
import {ref} from "vue";

const isShow = ref(true)

</script>
