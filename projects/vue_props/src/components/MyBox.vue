<script setup>
// 定义props
// const props = defineProps(["count", "obj"])
const props = defineProps({
  count: Number,
  obj: Object,
  isCheck: Boolean,
  maxLength: {
    type: String,
    required: true,
    default: "哈哈",
    validator(value) {
      return value !== "嘻嘻";
    }
  }
})

console.log(props)
</script>

<template>
  <div>
    <h2>我是子组件 MyBox {{ props.obj.count}}</h2>
    <button @click="props.obj.count++">MB的按钮</button>
    <hr/>
  </div>
</template>

<style scoped>
div {
  color: tomato;
}
</style>
