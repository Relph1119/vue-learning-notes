<script setup>
import {defineEmits, defineProps} from "vue";
import {useMealsStore} from "../../store/meals";
import Counter from "../UI/Counter.vue";
const props = defineProps(["isShow"])
const emits = defineEmits(["close"])
const meals = useMealsStore()
</script>

<template>
  <div v-show="props.isShow" class="checkout">
    <div class="close">
      <i @click="$emit('close')" class="ri-close-fill"></i>
    </div>

    <!-- 设置订单详情 -->
    <div class="details">
      <header>餐品详情</header>
      <div class="list">
        <div class="item" v-for="item in meals.cartMeals">
          <div class="img-wrap">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="info">
            <h2 class="title">{{item.title}}</h2>
            <div class="count">
              <Counter :meal="item"></Counter>
              <span class="amount">{{item.count * item.price}}</span>
            </div>
          </div>
        </div>
      </div>
      <footer>合计￥<span>{{ meals.amount }}</span></footer>
    </div>

    <div class="bar">
      <div class="total-amount">
        <p v-show="meals.totalCount <= 0" class="no-goods">
          未选购商品
        </p>
        <p @click="showDetails = true"
            v-show="meals.totalCount > 0"
            class="has-goods">
          {{ meals.amount }}
        </p>
      </div>

      <button class="checkout-btn">去支付</button>
    </div>
  </div>
</template>

<style scoped>
.checkout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(240, 240, 240);
  z-index: 99999;
}

.close {
  height: 2.4rem;
  line-height: 2.4rem;
  padding-left: 0.8rem;
  font-size: 1.44rem;
  font-weight: bold;
}

.details {
  background-color: #fff;
  margin: 0 0.8rem;
  border-radius: 1.6rem;
  padding: 0 0.8rem;
}

.details header {
  height: 4rem;
  line-height: 4rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px dashed #e6e6e6;
}

.details footer {
  position: relative;
  height: 5.6rem;
  line-height: 5.6rem;
  text-align: right;
  font-size: 1.04rem;
  border-top: 1px dashed #e6e6e6;
}

.details footer::before,
.details footer::after {
  content: "";
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;
  background-color: rgb(240, 240, 240);
  border-radius: 50%;
  left: -1.2rem;
  top: -0.4rem;
}

.details footer::after {
  left: auto;
  right: -1.2rem;
}

.details footer span {
  font-weight: bold;
  font-size: 1.2rem;
}

.list {
  max-height: 36rem;
  overflow: auto;
}

.item {
  display: flex;
}

.img-wrap {
  width: 6.4rem;
}

.info {
  flex: auto;
}

.title {
  margin: 1.04rem 0;
  font-size: 1.04rem;
}

.count {
  display: flex;
  justify-content: space-between;
}

.amount {
  font-size: 1.04rem;
  font-weight: bold;
}

.amount::before {
  content: "￥";
  font-weight: normal;
}

.bar {
  width: 28.4rem;
  height: 4rem;
  position: fixed;
  background-color: rgb(58, 58, 58);
  bottom: 1.6rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 2.4rem;
}

.total-amount {
  margin-left: 1.6rem;
  line-height: 4rem;
}

.no-goods,
.has-goods {
  color: rgb(148, 148, 148);
  font-size: 1.44rem;
  font-weight: bold;
}

.has-goods {
  color: #fff;
}

.has-goods::before {
  content: "合计：￥";
  font-size: 1.04rem;
}

.checkout-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  height: 100%;
  border-radius: 2.4rem;
  border: none;
  background-color: rgb(248, 188, 0);
  font-size: 1.44rem;
}
</style>
