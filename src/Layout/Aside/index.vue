<template>
  <div class="">
    <el-menu
      active-text-color="#559eff"
      unique-opened
      class="el-menu-vertical-demo"
      default-active="index"
      text-color="#303133"
      router
    >
      <el-sub-menu :index="item.id" v-for="(item, index) in list" :key="index">
        <template #title>
          <el-button
            class="btn"
            style="border: none; background: none; padding: 0; color: #303133"
            :icon="item.icon"
            size="small"
          />
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group v-for="(ele, index) in item.child" :key="index">
          <el-menu-item :index="ele.frontpath">
            <el-button
            class="btn"
              style="border: none; background: none; padding: 0;"
              :icon="ele.icon"
              size="small"
            />
            <span> {{ ele.name }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup>
import UserApi from '@/api/user.js'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const imgUrl = ref()
const list = ref()
UserApi.getinfo().then((res) => {
  console.log(res)
  list.value = res.data.data.menus
  console.log(list)
  imgUrl.value = res.data.data.avatar
  store.commit('imgUrl', imgUrl.value)
  console.log(imgUrl)
})
</script>

<style lang="scss" scoped>
.btn {
  color: #303133!important;
}
</style>
