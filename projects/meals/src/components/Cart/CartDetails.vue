<script setup>
import Mask from "../UI/Mask.vue"
import Meals from "../Meals/Meals.vue"
import Dialog from "../UI/Dialog.vue"
import {defineEmits, ref} from "vue";
import {useMealsStore} from "../../store/meals";

const meals = useMealsStore()
const showDialog = ref(false)
const emits = defineEmits()

const okHandler = () => {
  /*
      1. 把购物车清空
          meals.clearCart()
      2. 关闭对话框 Dialog
      3. 关闭 CartDetails
  */
  meals.clearCart()
  emits("hide")
}
</script>

<template>
  <Mask style="z-index: 999">
    <Dialog
        @ok="okHandler"
        msg="确认清空购物车吗？"
        :isShow="showDialog"
        @hide="showDialog=false"></Dialog>
    <div class="cart-details">
      <div class="header">
        <h2>餐品详情</h2>
        <a @click="showDialog=true" href="#">
          <i class="ri-delete-bin-line"></i>
          清空购物车
        </a>
      </div>
      <Meals :desc="false" :meals="meals.cartMeals"></Meals>
    </div>
  </Mask>
</template>

<style scoped>
.cart-details {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
}

.meals {
  padding-top: 1.6rem;
  height: auto;
  max-height: calc(11.2rem * 4);
}

.header {
  display: flex;
  background: #fff;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
}

.header h2 {
  font-size: 1.12rem;
}

.header a {
  display: flex;
  align-items: center;
  color: #9f9f9f;
  font-size: 0.88rem;
}

.header i {
  font-size: 1.04rem;
  margin-right: 0.4rem;
}
</style>
