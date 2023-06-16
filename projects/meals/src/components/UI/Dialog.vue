<script setup>
import Mask from "./Mask.vue";
import {defineProps} from "vue";

const props = defineProps(["msg"])

</script>

<template>
  <Mask>
    <div class="dialog">
      <p class="msg">{{ props.msg }}</p>
      <div class="btn">
        <button @click="$emit('hide')" class="cancel">取消</button>
        <button @click="
                        () => {
                            $emit('ok')
                            $emit('hide')
                        }
                    " class="ok">确认</button>
      </div>
    </div>
  </Mask>
</template>

<style scoped>
.dialog {
  position: absolute;
  width: 28rem;
  height: 16rem;
  background-color: #fff;
  border-radius: 1.6rem;
  margin: auto;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
}

.msg {
  height: 10.4rem;
  font-size: 1.6rem;
  text-align: center;
  line-height: 12rem;
}

.btn {
  display: flex;
  justify-content: space-around;
}

button {
  width: 12rem;
  height: 3.2rem;
  border-radius: 1.4rem;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 1.2rem;
}

.ok {
  background-color: rgb(248, 188, 0);
  border: none;
}
</style>
