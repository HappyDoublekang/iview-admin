import http from '../../util/http'
import { setToken } from '@/libs/util'

export default {
  state: {
    premissonList: [],
    token: ''
  },
  mutations: {
    // 获取路由权限列表
    setPremisson (state, data) {
      state.premissonList = data
    },
    // 设置token
    setToken (state, data) {
      state.token = data
      setToken(data)
    }
  },
  actions: {
    // 登录
    login ({ commit }, params) {
      return new Promise((resolve, reject) => {
        http
          .post('/44444', params)
          .then((res) => {
            commit('setToken', res.data.token)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 权限判断
    getRoutePermissionList ({ commit }) {
      return new Promise((resolve) => {
        http.get('/getRoutePermissionList').then((res) => {
          commit('setPremisson', res.list)
          resolve(res.list)
        })
      })
    },
    // 退出登录
    logout () {
      return new Promise((resolve) => {
        http.post('/logout').then(() => {
          resolve()
        })
      })
    }
  }
}
