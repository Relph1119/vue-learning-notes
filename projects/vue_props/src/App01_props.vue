<script setup>
import MyBox from "./components/MyBox.vue"
import {ref} from "vue";

const count = ref(0)
const obj = ref({
  count: 0
})
</script>

<template>
  <h1>我是App根组件</h1>
  <MyBox :count="count" :obj="obj" maxLength="123"></MyBox>
  <button @click="obj.count++">点我一下</button>
</template>
