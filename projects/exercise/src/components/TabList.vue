<template>
  <div class="tab-list">
    <TabItem v-for="item in props.items"
             :item="item"
             :maxHot="props.maxHot">
    </TabItem>
  </div>
</template>

<script setup>
import TabItem from "./TabItem.vue"
// 用来显示列表
const props = defineProps(["items", "maxHot"])
</script>

<style scoped>
.tab-list {
  margin: 20px;
}
</style>
