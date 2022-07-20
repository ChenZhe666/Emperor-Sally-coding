<template>
  <div class="">
    <el-container>
      <el-header> <app-header></app-header></el-header>
      <el-container>
        <el-aside> <app-aside></app-aside></el-aside>
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
  width: 100%;
  height: 92.3vh;
}
.el-aside {
  width: auto;
  border: none;
  background-color: #fdfdfd;
}
.el-header {
  width: 100%;
  background-color: #4639cc;
}

</style>
