<script setup>
import A from "./components/A.vue"
import SlotDemo from "./components/SlotDemo.vue"

const name="猪八戒"
</script>

<template>
  <h1>App组件</h1>
  <SlotDemo>
    <template #s1>s1插槽</template>
    <template v-slot:s2="{stuName, age, gender}">
      <A :name="gender"/>
    </template>
  </SlotDemo>
</template>
