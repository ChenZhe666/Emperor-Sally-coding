<template>
  <div class="login">
    <el-form ref="Form" :model="loginForm" :rules="rules" label-width="120px">
      <el-form-item prop="username" label="用户名">
        <el-input class="input" v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input class="input" type="password" v-model="loginForm.password" />
      </el-form-item>
      <el-form-item prop="code" label="验证码">
        <el-input class="Img" v-model="loginForm.code" />
        <img :src="list" @click="imgChange" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>获取密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { login, captcha } from '../../api/login'
// import  from '../../api/login'
const store = useStore()
const router = useRouter()
// const route = useRoute()
const list = ref({})

const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})

const rules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '密码不能为空'
    }
  ],
  img: [
    {
      required: true,
      trigger: 'blur',
      message: '验证码不能为空'
    }
  ]
})
const onSubmit = () => {
  login(loginForm).then((res) => {
    console.log(res.headers.authorization)
    localStorage.setItem('token', res.headers.authorization)
    if (loginForm.token !== '') {
      router.push('/home')
    }
    console.log(store.state.token)
  })
}

const imgChange = () => {
  captcha().then((res) => {
    list.value = res.data.data.captchaImg
  })
}
captcha().then((res) => {
  list.value = res.data.data.captchaImg
  loginForm.token = res.data.data.token
  store.commit('setToken', res.data.data.token)
})
</script>

<style scoped lang="scss">
.login {
  width: 500px;
  height: 200px;
  margin: 0 auto;
  margin-top: 250px;
  .input {
    width: 400px;
  }
  .Img {
    width: 200px;
  }
  img {
    margin-left: 60px;
  }
}
</style>
