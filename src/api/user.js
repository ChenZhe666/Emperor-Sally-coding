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

const getstatistitwo = () => {
  return request.get(
    'admin/statistics2'
  )
}

const getstatisti = (type) => {
  return request({url: 'admin/statistics3?type='+ type,method: 'get'}
  )
}

const getcategory = () => {
  return request.get(
    'admin/category'
  )
}

const getcategorylist = (data) => {
  return request.get(
    'admin/app_category_item/list?category_id=' + data
  )
}




export default {
  getlogin,
  getinfo,
  getstatis,
  getstatisti,
  getstatistitwo,
  getcategory,
  getcategorylist
}