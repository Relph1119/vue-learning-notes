<script setup>
import {reactive, ref} from "vue";
import TabItem from "./components/TabItem.vue";
import TabList from "./components/TabList.vue";
import Tab from "./components/Tab.vue";
const current = ref(0) //0表示球员,1表示球队

const players = reactive([
  {
    name: "梅西",
    img: "/images/messi.png",
    rate: 1,
    hot: 433760
  },
  {
    name: "C罗",
    img: "/images/ronaldo.png",
    rate: 2,
    hot: 333760
  },
  {
    name: "内马尔",
    img: "/images/neymar.png",
    rate: 3,
    hot: 333760
  }
])

const teams = reactive([
   {
    name: "法国",
    img: "/images/法国.jpg",
    rate: 1,
    hot: 333760
  },
  {
    name: "巴西",
    img: "/images/巴西.jpg",
    rate: 2,
    hot: 233760
  },
  {
    name: "荷兰",
    img: "/images/荷兰.jpg",
    rate: 3,
    hot: 133760
  }
])

const playerMaxHot = players[0].hot
const teamMaxHot = teams[0].hot
</script>

<template>
  <Tab>
    <template #0><TabList :items="players" :maxHot="playerMaxHot"></TabList></template>
    <template #1><TabList :items="teams" :maxHot="teamMaxHot"></TabList></template>
  </Tab>
</template>
