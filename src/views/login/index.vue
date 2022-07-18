<template>
  <div class="login">
    <div class="left">欢迎光临</div>
    <div class="right">
      <h1>欢迎回来</h1>
      <p>———— 账号密码登录 ————</p>
      <div class="login-container">
        <el-form
          class="login-form"
          ref="Login"
          :model="loginForm"
          :rules="loginRules"
        >
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" />
          </el-form-item>

          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" />
          </el-form-item>
        </el-form>

        <img :src="img" alt="" />
        <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserAPi from '../../api/user'
import { useRouter } from 'vue-router'
import { setItem } from '../../utils/storage.js'
import { ref, reactive } from 'vue'
const router = useRouter()
const loginForm = ref({
  username: 'admin',
  password: 'admin'
})
const Login = ref(null)
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '密码为必填项'
    }
  ]
})
const handleLoginSubmit = () => {
  Login.value.validate(async (valid) => {
    if (valid) {
      // console.log(loginForm.value)
      const res = await UserAPi.getlogin(loginForm.value)
      // console.log(res.data.data.token)
      setItem('token', res.data.data.token)
      router.push('/')
    } else {
      console.log('用户名或密码错误!!')
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  // background-color: red;
  display: flex;
  // align-items: center;
  .left {
    flex: 66%;
    background-color: #6366f1;
    color: #fff;
    font-size: 45px;
    font-weight: 900;
    text-align: center;
    height: 100%;
    line-height: 600px;
  }
  .right {
    flex: 34%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .el-input {
      width: 50%;
      height: 30px;
      margin-left: 25%;
      margin-top: 10px;
    }
    p {
      margin-top: 10px;
      color: #d2d5db;
    }
    .el-button {
      width: 46%;
      border-radius: 20px;
      align-items: center;
      flex: 1;
      line-height: 32px;
      position: relative;
      font-size: var(--font-size);
      min-width: 0;
    }
  }
}
</style>
