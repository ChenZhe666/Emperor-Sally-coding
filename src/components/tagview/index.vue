<template>
  <div class="">
    <el-tag
      v-for="(item, index) in taglist"
      :key="index"
      @click="$router.push(item.path)"
      
    >
    <span>{{item.name}}</span> 
    <span class="spa" @click="del(index)" >x</span>
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


// console.log(localStorage.getItem('tag'))
// console.log(taglist)
const del = (id) => {
  taglist.value.splice(id,1)
}
</script>

<style lang="scss" scoped >
</style>
