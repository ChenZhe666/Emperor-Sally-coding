// import axios from 'axios'
// import { ElMessage } from 'element-plus'
// import loading from './loading'
// import store from '../store'
// import router from '../router'

// const instance = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API,
//   timeout: 2000
// })

// // 请求拦截器
// instance.interceptors.request.use(
//   (config) => {
//     console.log(config)
//     // 开启loading
//     loading.open()
//     // 调用接口要传的参数
//     const { icode, time } = getTestICode()
//     config.headers.icode = icode
//     config.headers.codeType = time

//     return config
//   },

//   (error) => {
//     // 关闭loading
//     loading.close()
//     console.log(error)
//     return Promise.reject(error)
//   }
// )

// // 响应拦截器
// instance.interceptors.response.use(
//   (res) => {
//     console.log(res)
//     loading.close()
//     const { data } = res.data
//     if (res.data.success === true) {
//       ElMessage.success('登陆成功')
//       return data
//     } else if (res.data.success === false) {
//       ElMessage.error('用户名或密码错误')
//     } else {
//       ElMessage('接口请求失败')
//     }

//     // TODO 全局响应处理

//     return res
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )

// // 获取icode
// function getTestICode() {
//   const now = parseInt(Date.now() / 1000)
//   const code = now + 'LGD_Sunday-1991'
//   return {
//     icode: code,
//     time: now
//   }
// }

// export default instance

// 导入axios
import axios from 'axios'

// import store from '../store'

// import router from '../router'

// import { isCheckTimeout } from '../../src/utils/auth'

// import md5 from 'md5'

import loading from './loading'

// import { ElMessage } from 'element-plus'

// 创建axios实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    loading.open()
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = token
    return config
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log(response)
    // 关闭loading加载
    loading.close()
    return response
  },
  (error) => {
    // 关闭loading加载
    loading.close()

    return Promise.reject(error)
  }
)
// 导出axios实例对象
export default service
