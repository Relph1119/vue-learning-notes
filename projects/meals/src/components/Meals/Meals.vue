<script setup>
import Meal from "./Meal.vue";
import {useMealsStore} from "../../store/meals.js";
import {defineProps} from "vue";

const props = defineProps(["meals"])
</script>

<template>
  <!-- 所有的汉堡容器 -->
  <div class="meals">
    <Meal :desc="$attrs.desc" v-for="item in props.meals" :meal="item"></Meal>
    <h2 v-if="!props.meals || props.meals.length === 0">没有找到指定商品</h2>
  </div>
</template>

<style scoped>
.meals {
  height: calc(100vh - 4.8rem);
  padding-bottom: 6.4rem;
  overflow: auto;
}
</style>
