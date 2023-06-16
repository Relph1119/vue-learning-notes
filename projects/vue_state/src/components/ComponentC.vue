<template>
  <h4>
    ComponentC --
    {{name}} --
    {{age}} --
    {{title}} --
    {{skills}}
<!--    {{countStore.count}} &#45;&#45;-->
<!--    <button @click="countStore.increment">按钮</button>-->
    <button @click="stuStore.growUp">长大</button>

    <hr />
    <button @click="stuStore.name='孙大圣'">修改</button>
    <button @click="clickHandler">patch修改</button>
    <button @click="stuStore.$reset()">重置</button>
  </h4>
</template>

<script setup>
import {inject} from "vue";
import {useStudentStore} from "../store/studentStore";
import {storeToRefs} from "pinia";

const stuStore = useStudentStore()

/*
    store实例本身就是一个reactive对象，
        可以通过它直接访问state中的数据

    但是如果直接将state中数据解构出来，那么数据将会丧失响应性

    可以通过storeToRefs()来对store进行解构，
        它可以将state和getters中的属性解构为ref属性，从而保留其响应性

    state的修改：
        1. 直接修改
        2. 通过$patch
        3. 通过$patch传函数的形式的修改
        4. 直接替换state
        5. 重置state
*/
// const {name, age} = stuStore

const {name, age, title, skills} = storeToRefs(stuStore)

// import {countStore} from "../store/count"

// const {count, increment} = inject("count")

const clickHandler = () => {
  // stuStore.$patch({
  //   name: "孙小圣",
  //   age: 20,
  //   skills: ["救命猴毛"]
  // })

  // stuStore.$patch(state => {
  //   state.skills.push("救命猴毛");
  // })

  // stuStore.skills.push("救命猴毛")

  // 等价于stuStore.$patch({name: "孙小圣"})
  stuStore.$state = {
    name: "孙小圣"
  }
}

</script>
