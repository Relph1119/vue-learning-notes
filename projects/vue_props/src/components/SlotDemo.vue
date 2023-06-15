<template>
  <div>
    slotDemo组件
<!--    <h1><slot>插槽的默认内容</slot></h1>-->
    <h1><slot name="s1"></slot></h1>
    <div>
      <slot
        name="s2"
        :gender="gender"
        :age="age"
        :stuName="stu.name">

      </slot>
    </div>
<!--    <h3><slot></slot></h3>-->
  </div>
</template>

<script setup>
const stu = {
  name: "孙悟空",
  age: 18,
  gender: "男"
}

const name = "孙悟空";
const age = 18;
const gender = "男";
</script>

<style scoped>

</style>
