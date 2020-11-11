
import axios from '../ajax'


// 获取菜单列表
export const findListTree = function (data) {
  return axios({
    url:'/api/test',
    method:'post',
    data
  })
}
