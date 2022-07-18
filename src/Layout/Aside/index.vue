<template>
  <div class=""></div>
</template>

<script setup>
import UserApi from '@/api/user.js'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const imgUrl = ref()
UserApi.getinfo().then((res) => {
  console.log(res)
  imgUrl.value = res.data.data.avatar
  store.commit('imgUrl',imgUrl.value)
  console.log(imgUrl)
})
</script>
