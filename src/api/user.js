import request from "./request";

const getlogin = (data) => {
  console.log(data, 'data')
  return request.post(
    `/admin/login?username=${data.username}&password=${data.password}`
  )
}
export default {
  getlogin
}