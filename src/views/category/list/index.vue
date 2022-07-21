<template>
  <div class="">
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="name" width="120" />
      <el-table-column fixed="right" width="400">
        <template #default="scope">
          <el-button type="primary" @click="add(scope.row.id)" >推荐商品</el-button>
          <el-switch
            :active-value="1"
            :inactive-value="0"
            v-model="scope.row.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
          <el-button type="primary">修改11</el-button>
          <el-button type="primary">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   <el-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
    <el-table :data="goods">
      <el-table-column property="id" label="ID" width="150" />
      <el-table-column property="cover" label="商品封面" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-drawer>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import UserApi from '../../../api/user'
const list = ref()
const goods = ref()
UserApi.getcategory().then((res) => {
  console.log(res)
  list.value = res.data.data
  console.log(list.value)
})
const table = ref(false)
const add = (id)=>{
    table.value = true
    console.log(id)
   UserApi.getcategorylist(id).then(res=>{
    console.log(res)
    goods.value = res.data.data
   })
}



</script>

<style lang="scss">
.el-table-column {
  display: flex;
}
</style>
