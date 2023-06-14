<script setup>
import {ref} from "vue";

const arr = ref(["孙悟空", "猪八戒", "沙和尚", "唐僧"])
const arr2 = ref([
  {
    id: 1,
    name: "孙悟空",
    age: 18
  },
  {
    id: 2,
    name: "猪八戒",
    age: 28
  },
  {
    id: 3,
    name: "沙和尚",
    age: 38
  }
])
</script>

<template>
  <button @click="arr.push('白骨精')">点我一下</button>
  <button @click="arr2.unshift({id:4, name:'唐僧', age: 16})">点我一下2</button>
  <ul>
    <li v-for="name in arr">{{ name }}</li>
  </ul>
  <hr>
  <ul>
    <li v-for="(name, index) in arr">{{ index }} -- {{ name }}</li>
  </ul>
  <hr>
  <div v-for="obj in arr2">
    {{obj.name}} -- {{obj.age}}
  </div>
  <hr>
  
  <!--
    在使用v-for时，可以为元素指定一个唯一的key
    有了key以后，元素再比较时就会按照相同的key去比较而不是顺序
  -->
  <div v-for="{id, name, age} in arr2" :key="id">
    {{id}} -- {{name}} -- {{age}}
    <input type="text" />
  </div>
</template>
