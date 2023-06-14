<template>
  <h1>演示组合式API</h1>
  <h2>{{msg}}</h2>
  <h3>{{count}}</h3>
  <button @click="count++">点我一下</button>
  <h3>{{stu.name}} -- {{stu.age}} -- {{stu.gender}}</h3>
</template>

<script>
import {reactive} from "vue"

export default {
  // 钩子函数，可以通过这个函数向外暴露组件的配置
  setup() {
    let msg = "今天天气真不错！";
    let count = 0;

    const stu = reactive({
      name: "孙悟空",
      age: 18,
      gender: "男"
    });
    
    // 可以通过返回值指定哪些内容暴露给外部
    return {
      msg,
      count,
      stu
    }
  }
}
</script>

<style scoped>

</style>
