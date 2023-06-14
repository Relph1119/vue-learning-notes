<script setup>
import {reactive, ref} from "vue";
import TabItem from "./components/TabItem.vue";

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
  <div class="tab-wrapper">
    <header class="tab-head">
      <div @click="current = 0" class="tab-button" :class="{active:current === 0}">热门球员</div>
      <div @click="current = 1" class="tab-button" :class="{active:current === 1}">热门球队</div>
    </header>
    <div class="main">
      <div v-show="current === 0">
        <!-- 球员-->
        <div class="tab-list">
          <TabItem v-for="player in players" :item="player" :maxHot="playerMaxHot"></TabItem>
        </div>
      </div>
      <div v-show="current === 1">
        <!-- 球队 -->
        <div class="tab-list">
          <TabItem v-for="team in teams" :item="team" :maxHot="teamMaxHot"></TabItem>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-wrapper {
  width: 800px;
  padding: 20px;
  background-color: rgb(45, 83, 211);
}

.tab-head {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
}

.tab-button {
  background-color: #fff;
  font-size: 30px;
  padding: 10px 0;
  text-align: center;
  flex: auto;
  cursor: pointer;
  transition: 0.2s;
}

.tab-button:not(.active):hover {
  color: rgb(187, 3, 52);
}

.active {
  background-color: rgb(187, 3, 52);
  color: #fff;
}

.tab-list {
  margin: 20px;
}
</style>
