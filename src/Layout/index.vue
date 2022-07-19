<template>
  <div class="">
    <el-container>
      <el-header> <app-header></app-header></el-header>
      <el-container>
        <el-aside width="200px"> <app-aside></app-aside></el-aside>
        <el-container>
          <el-main> <app-main></app-main></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import AppAside from './Aside'
import AppMain from './Main'
import AppHeader from './Header'


// import { useStore } from 'vuex';
//  import { useRouter, useRoute } from 'vue-router';


</script>

<style lang="scss" scoped>
.el-container {
  height: 92.3vh;
}
.el-aside {
  width: 250px;
  background-color: #545c64;
}
.el-header {
  width: 100%;
  background-color: #4639cc;
}
.el-main {
  background-color: #b8e19b;
}
</style>
