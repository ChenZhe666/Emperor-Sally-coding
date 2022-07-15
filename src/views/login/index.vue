<template>
  <div class="login">
    <div class="left">欢迎光临</div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  .left {
    flex: 66%;
    background-color: #6366f1;
    color: #fff;
    font-size: 45px;
    font-weight: 900;
    text-align: center;
    height: 100%;
    line-height: 600px;
  }
  .right {
    flex: 34%;
    background-color: #fff;
  }
}
</style>
