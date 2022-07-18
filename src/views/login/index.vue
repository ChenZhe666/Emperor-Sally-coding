<template>
  <div class="login">
    <div class="left">欢迎光临</div>
    <div class="right">
      <div class="login-container">
        <el-form
          class="login-form"
          ref="Login"
          :model="loginForm"
          :rules="loginRules"
        >
          <el-form-item prop="username">
            用户名:<el-input v-model="loginForm.username" />
          </el-form-item>

          <el-form-item prop="password">
            密码:<el-input v-model="loginForm.password" />
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
import { ref, reactive } from 'vue'
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
      console.log(loginForm.value)
      const res = await UserAPi.getlogin(loginForm.value)
      console.log(res);
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
  }
}
</style>
