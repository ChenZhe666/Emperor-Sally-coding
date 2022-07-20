<template>
  <div class="">
    <el-tag
      v-for="(item, index) in taglist"
      :key="index"
      @click="$router.push(item.path)"
      closable
    >
    {{item.name}}
    </el-tag>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const taglist = computed(() => {
  return store.state.taglist
})

console.log(localStorage.getItem('tag'))
console.log(taglist)
const del = () => {}
</script>

<style lang="scss"></style>
