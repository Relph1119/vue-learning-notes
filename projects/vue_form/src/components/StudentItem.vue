<template>
  <tbody>
  <tr v-for="(stu, index) in students">
    <td>{{ stu.id }}</td>
    <td>{{ stu.name }}</td>
    <td>{{ stu.age }}</td>
    <td>{{ stu.gender }}</td>
    <td>{{ stu.address }}</td>
    <td>
      <!--        <a href="#" @click.prevent="$emit('delStu', index)">删除</a>-->
      <a href="#" @click.prevent="delStuHandler(index)">删除</a>
    </td>
  </tr>
  </tbody>
</template>

<script setup>
import {inject} from "vue";

const {
  students,
  delStudentByIndex
} = inject("student")

// 定义一个删除学生的方法
const delStuHandler = (index) => {
  if (confirm("该操作不可恢复，请确认！")) {
    delStudentByIndex(index);
  }
}
</script>

<style scoped>
td {
  border: 1px solid black;
  font-size: 24px;
}
</style>
