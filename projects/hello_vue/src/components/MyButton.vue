<template>
  <div>
    <h2>子组件</h2>
    <button @click="count++">点我一下</button> {{count}}
  </div>
</template>

<script>
    export default {
        data(){
            return {
                count:0
            }
        }
    }
</script>
