<template>
  <div class="">
    <el-tooltip content="全屏缩放" effect="dark" placement="bottom" fullscreen>
      <screenfull
        id="screenfull"
        class="el-icon-full-screen"
        @click="isScreenFull"
      />
    </el-tooltip>
  
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default {}
</script>

<style lang="scss"></style>
