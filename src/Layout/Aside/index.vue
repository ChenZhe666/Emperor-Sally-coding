<template>
  <div class="">
    <el-menu
      unique-opened
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="index"
      text-color="#fff"
    >
      <el-sub-menu :index="item.id" v-for="(item, index) in list" :key="index">
        <template #title>
         <el-button type="danger" :icon="item.icon" circle />
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group v-for="(ele, index) in item.child" :key="index">
        
          <el-menu-item :index="ele.id">
           <el-button type="danger" :icon="ele.icon" circle />
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
import {
  help
} from '@element-plus/icons-vue'

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
