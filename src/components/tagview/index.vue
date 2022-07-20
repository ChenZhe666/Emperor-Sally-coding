<template>
  <div class="">
    <!-- <el-tag v-for="(item, index) in taglist" :key="index">
      <span class="tagview">{{ item }}</span>
    </el-tag> -->
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const taglist = localStorage.getItem('tag')

console.log(localStorage.getItem('tag'))
console.log(taglist)
const del = () => {}
</script>

<style lang="scss"></style>
