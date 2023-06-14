<template>
  <h1>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h1>
  <h2>评语：{{ info }}</h2>
  <button @click="updateAge">减龄</button>
  <hr/>
  <h3>{{name}}</h3>
  <hr/>
  <h3>{{arr[0]}} -- {{arr[1]}} -- {{arr[2]}}</h3>
</template>

<script>
import MyButton from "./components/MyButton.vue"
import {shallowReactive} from "vue"

export default {
  data() {
    return {
      stu: {
        name: "孙悟空",
        age: 18,
        gender: "男"
      },
      firstName: "悟空",
      lastName: "孙",
      arr: ["孙悟空", "猪八戒", "沙和尚"]
    }
  },
  components: {
    MyButton
  },
  methods: {
    updateAge() {
      if (this.stu.age === 18) {
        this.stu.age = 17;
      } else {
        this.stu.age = 18;
      }
    }
  },
  computed: {
    info() {
      return this.stu.age >= 18
          ? "你是一个成年人！"
          : "你是一个未成年人！";
    },
    // name() {
    //   return this.lastName + this.firstName
    // },
    name: {
      get() {
        return this.lastName + this.firstName
      },
      set(value) {
        console.log(value);
        this.lastName = value[0];
        this.firstName = value.slice(1)
      }
    }
  }
}
</script>


<style scoped>

</style>
