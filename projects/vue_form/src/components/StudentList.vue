<template>
  <table>
    <caption>学生列表</caption>
    <thead>
    <tr>
      <th>学号</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
      <th>住址</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(stu, index) in props.students">
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
  </table>
</template>

<script setup>
  const props = defineProps(["students"])
  const emits = defineEmits(["delStu"])
  // 定义一个删除学生的方法
  const delStuHandler = (index)=> {
    if(confirm("该操作不可恢复，请确认！")) {
      emits("delStu", index);
    }
  }
</script>

<style scoped>
table {
  width: 80%;
  border-collapse: collapse;
  text-align: center;
}

caption {
  font-size: 30px;
  font-weight: bold;
}

th, td {
  border: 1px solid black;
  font-size: 24px;
}
</style>
