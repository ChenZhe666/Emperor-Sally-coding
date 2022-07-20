<template>
  <div class="">
    <el-menu
      :style="{ width: status == true ? '64px' : '200px' }"
      :collapse="status"
      collapse-transition
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
          <el-menu-item :index="ele.frontpath" @click="tag(ele)">
            <el-button
              class="btn"
              style="border: none; background: none; padding: 0"
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
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const status = computed(() => {
  return store.state.status
})

const tag = (ele) => {
    // console.log(name);
    // console.log(url);
     console.log(ele);
     store.commit('tagview',ele)
}
// localStorage.getItem('flag')
console.log(status)

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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  transition: 0.5s;
}

.btn {
  color: #303133 !important;
}
</style>
