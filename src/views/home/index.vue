<template>
  <div class="home">
    <!-- 侧边导航 -->
    <nav>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        unique-opened
        router
      >
        <el-menu-item index="/home"
          ><el-icon><HomeFilled /></el-icon>
          <template #title>首页</template>
        </el-menu-item>
        <el-sub-menu :index="index" v-for="(item, index) in list" :key="index">
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group
            v-for="(item, index) in item.children"
            :key="index"
          >
            <el-menu-item
              :index="item.path"
              @click="getTagView(item.title, item.path, index)"
              >{{ item.title }}</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </nav>
    <div class="right">
      <div class="right-one">
        <span>VueAdmin后台管理系统</span>
        <div class="remove">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar shape="square" :size="45" :src="avatar" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="profile">个人中心</el-dropdown-item>
                <el-dropdown-item command="logout" @click="remove" divided
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="right-two">
        <el-tag>首页</el-tag>
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          class="mx-1"
          @click="go(tag.path)"
          @close="handleClose(tag)"
          closable
        >
          {{ tag.name }}
        </el-tag>
      </div>
      <div class="right-three">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import { HomeFilled } from '@element-plus/icons-vue'
import { Menu, userInfo } from '../../api/login'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const list = ref({})
const avatar = ref({})
const tags = reactive([])
const Index = ref()
Menu().then((res) => {
  list.value = res.data.data.nav
  console.log(res)
  console.log(res.data.data.nav)
})

userInfo().then((res) => {
  console.log(res.data.data.avatar)
  avatar.value = res.data.data.avatar
  console.log(avatar)
})

const handleCommand = (i) => {}

const getTagView = (item, path, index) => {
  // tags.name = item
  // tags.path = path
  tags.push({ name: item, path: path })
  Index.value = index
}

const go = (path) => {
  router.push(`${path}`)
}

const remove = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
const handleClose = (tag) => {
  tags.splice(Index, 1)
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  nav {
    width: 13%;
    height: 100%;
    background-color: #545c64;
  }
  .right {
    width: 87%;
    height: 100%;

    .right-one {
      width: 100%;
      height: 8%;
      background-color: #17b3a3;
      text-align: center;
      position: relative;
      span {
        font-weight: 900;
        line-height: 8%;
        // margin-top: 25px;
      }
      .remove {
        position: absolute;
        right: 50px;
        top: 0;
      }
    }
    .right-two {
      width: 100%;
      height: 6%;
      background-color: pink;
    }
    .right-three {
      width: 100%;
      height: 86%;
      background-color: yellow;
    }
  }
}
</style>
