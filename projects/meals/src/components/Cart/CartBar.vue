<script setup>
import cartBag from "../../assets/bag.png"
import {useMealsStore} from "../../store/meals";
import Mask from "../UI/Mask.vue"
import {ref} from "vue";
import CartDetails from "./CartDetails.vue";
import Checkout from "../Checkout/Checkout.vue";
const meals = useMealsStore()
const showDetails = ref(false)
const showCheckout = ref(false)
</script>

<template>
  <Checkout @close="showCheckout=false" :isShow="showCheckout"></Checkout>
  <CartDetails :isShow="showDetails" @hide="showDetails=false"></CartDetails>
  <div class="cart-bar">
    <div class="cart-bag">
      <img :src="cartBag" alt="">
      <span
          v-show="meals.totalCount > 0"
          class="total-count">
        {{ meals.totalCount }}
      </span>
    </div>
    <div class="total-amount">
      <p v-show="meals.totalCount <= 0" class="no-goods">未选购商品</p>
      <p @click="showDetails=true"

          v-show="meals.totalCount > 0"
         class="has-goods">
        {{ meals.amount }}
      </p>
    </div>

    <button @click="showCheckout= meals.totalCount > 0" class="checkout-btn">去结算</button>
  </div>
</template>

<style scoped>
.cart-bar {
  width: 28.4rem;
  height: 4rem;
  position: fixed;
  background-color: rgb(58, 58, 58);
  bottom: 1.6rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 60rem;
  z-index: 9999;
}

.cart-bag {
  position: absolute;
  width: 4rem;
  bottom: -0.4rem;
}

.total-count {
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  right: -0.8rem;
  color: #fff;
  font-weight: bold;
}

.total-amount {
  margin-left: 5.6rem;
  line-height: 4rem;
}

.no-goods, .has-goods {
  color: rgb(148, 148, 148);
  font-size: 1.44rem;
  font-weight: bold;
}

.has-goods {
  color: #fff;
}

.has-goods::before {
  content: "￥";
  font-size: 1.04rem;
}

.checkout-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  height: 100%;
  border-radius: 60rem;
  border: none;
  background-color: rgb(248, 188, 0);
  font-size: 1.44rem;
}
</style>
