<script setup>
import {defineProps, ref} from "vue"
import {useMealsStore} from "../../store/meals";

const meals = useMealsStore()
const props = defineProps(["meal"])
</script>

<template>
  <div class="counter">
    <template v-if="props.meal.count > 0">
      <button class="sub" @click="meals.subMealToCart(props.meal)">
        <i class="ri-subtract-line"></i>
      </button>
    <span class="count">{{ props.meal.count}}</span>
    </template>
      <button class="add" @click="meals.addMealToCart(props.meal)">
        <i class="ri-add-line"></i>
      </button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
}

.sub, .add {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.44rem;
  height: 1.44rem;
  background-color: rgb(234, 178, 0);
  border: none;
  border-radius: 50%;
  font-size: 1.44rem;
}

.sub {
  background-color: #fff;
  border: 1px solid #000;
}

.count {
  font-size: 1.2rem;
  margin: 0 0.4rem;
}
</style>
