import request from "./request";

const getlogin = (data) => {
  return request.post(
    `/admin/login?username=${data.username}&password=${data.password}`
  )
}

const getinfo = () => {
  return request.post(
    '/admin/getinfo'
  )
}

//支付订单
const getstatis = () => {
  return request.get(
    '/admin/statistics1'
  )
}

const getstatisti = () => {
  return request.get(
    'admin/statistics3?type=week'
  )
}


export default {
  getlogin,
  getinfo,
  getstatis,
  getstatisti
}