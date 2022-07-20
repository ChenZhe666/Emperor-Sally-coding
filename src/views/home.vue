<template>
  <div class="">
    asdasdas
    
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import UserApi from '../api/user'
import { useRouter, useRoute } from 'vue-router'
UserApi.getstatis().then((res) => {
  console.log(res)
})
UserApi.getstatisti().then((res) => {
  console.log(res)
})

</script>

<style lang="scss"></style>