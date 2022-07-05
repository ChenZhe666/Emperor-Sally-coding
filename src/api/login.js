import http from './request'

/**
 * 登陆接口
 * @param {*} data
 * @returns
 */
export const login = (data) =>
  http.post(
    `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`
  )

export const captcha = () => http.get('/captcha')

export const userInfo = () => http.get('/sys/userInfo')

export const Menu = () => http.get('/sys/menu/nav')

// export default {
//   login,
//   captcha
// }
