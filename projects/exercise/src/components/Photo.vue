<template>
  <div class="photo">
    <img :src="props.src" :alt="props.alt">
    <span>{{props.rate}}</span>
  </div>
</template>

<script setup>
import {computed} from "vue"

/*
排名颜色：
1. rgb(254, 45, 70)
2. rgb(254, 102, 1)
3. rgb(247, 169, 1)
 */
const props = defineProps(["src", "alt", "rate"])

const color = computed(() => {
  if(props.rate === 1) {
    return "rgb(254, 45, 70)"
  } else if (props.rate === 2) {
    return "rgb(254, 102, 1)"
  } else {
    return "rgb(247, 169, 1)"
  }
})
</script>

<style scoped>
/* 容器 */
.photo {
  width: 150px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

/* 图片 */
.photo img {
  width: 100%;
  vertical-align: bottom;
}

/* 排名 */
.photo span {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: v-bind(color);
  top: 0;
  left: 0;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
}
</style>
