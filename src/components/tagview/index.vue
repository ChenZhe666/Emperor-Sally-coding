<template>
  <div class="">
    <!-- <template v-for="(item, index) in store.state.taglist" :key="index" >
 
  <el-tag class="ml-2" type="success">Tag 2</el-tag>
</template> -->
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const taglist = computed(() => {
  return store.state.status
})
console.log(taglist)
</script>

<style lang="scss"></style>
