<template>
  <h1>{{msg}}</h1>
  <h2>{{stu.name}} -- {{stu.age}} -- {{stu.gender}}</h2>
  <hr>
  <MyButton></MyButton>
  <MyButton></MyButton>
  <button @click="changeMsg">点我一下</button>
</template>

<script>
import MyButton from "./components/MyButton.vue"
import {shallowReactive} from "vue"

export default {
    data() {
      return {
        msg: "今天天气真不错！",
        // 深层响应式对象
        stu: {
          name: "孙悟空",
          age: 18,
          gender: "男",
          friend: {
            name: "猪八戒"
          }
        }
      }

      // return shallowReactive({
      //     msg: "大闸蟹今天没去玩游戏！",
      //     stu: {
      //       name: "孙悟空",
      //       age: 18,
      //       gender: "address",
      //       friend: {
      //         name: "猪八戒"
      //       }
      //     }
      // })
    },
    components: {
      MyButton
    },
    methods: {
      sum(a, b) {
        return a + b;
      },
      changeMsg() {
        this.msg = "新的消息"
      }
    },
  }
</script>



<style scoped>

</style>
