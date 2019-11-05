import {p} from '@/service/utils/request'

// 登陆
export const signIn = (params) => {
  return p('login', params)
}
