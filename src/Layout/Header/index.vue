<template>
  <div class="layout">
    <p class="iconfont">
      <el-icon><Eleme /></el-icon> <font>积云编程</font>
    </p>
    <div class="right">
      <p class="icon">
        <el-icon class="one"><Fold /></el-icon>
        <el-icon class="two"><Refresh /></el-icon>
      </p>
      <div class="admin">
        <el-icon class="steor"><FullScreen /></el-icon>
        <div class="navbar-right">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar shape="square" :size="25" :src="img" />
              <span class="text">admin</span>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="Modify">修改密码</el-dropdown-item>
                <el-dropdown-item command="profile">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getItem } from '@/utils/storage.js'
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import {
  Eleme,
  Fold,
  Refresh,
  FullScreen,
  ArrowDown
} from '@element-plus/icons-vue'
const store = useStore()
// import { useStore } from 'vuex';
// import { useRouter, useRoute } from 'vue-router';
const img = computed(() => {
  return store.state.img
})
console.log(img)
const router = useRouter()
const handleCommand = (command) => {
  switch (command) {
    case 'Modify':
      handleToHome()
      break
    case 'profile':
      handleLogout()
      break
  }
}
const handleToHome = () => {
  alert('66')
}

const handleLogout = () => {
  getItem('token')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .iconfont {
    width: 265px;
    font-size: 20px;
    text-align: center;
    font {
      color: white;
    }
    .el-icon {
      background-color: white;
      vertical-align: -5px;
      font {
        color: white;
        font-weight: lighter;
      }
    }
  }
  .right {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    .icon {
      width: 90px;
      height: 100%;
      align-items: center;
      display: flex;
      justify-content: space-around;
      color: white;
      cursor: pointer;
    }
    .one {
      width: 45px;
      height: 100%;
    }
    .one:hover {
      background-color: #5347e7;
      z-index: 11;
    }
    .two {
      width: 45px;
      height: 100%;
    }
    .two:hover {
      background-color: #5347e7;
      z-index: 11;
    }
    .steor {
      width: 45px;
      height: 100%;
      color: white;
    }
    .steor:hover {
      background-color: #5347e7;
      z-index: 11;
    }
  }
  .admin {
    // width: 200px;
    // margin-right: 50px;
    display: flex;
    color: white;
    // vertical-align: -5px;
    flex-direction: row;
    align-items: center;
    .text {
      position: absolute;
      top: 15px;
      color: white;
      margin-top: -10px;
      margin-left: 6px;
    }
  }
  .el-avatar {
    border-radius: 50%;
  }
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  width: 130px;
}
.el-icon--right {
  color: white;
}
</style>
