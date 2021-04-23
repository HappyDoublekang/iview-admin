/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import router from '../../router/index'
import { vue } from '../../main'
import Cookies from 'js-cookie'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api/'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = 'http://192.168.81.235:8848/api/'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '/api/'
}

// 请求超时时间
axios.defaults.timeout = 100

axios.defaults.headers.common['Pragma'] = 'no-cache'
axios.defaults.headers.common['Cache-Control'] = 'no-cache' // 头部添加不使用缓存，避免IE存在在当前页面没刷新的情况下再次请求接口直接拿缓存
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // requestSuccessFunc(config);
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const getResult = (response) => {
  switch (response.data.code) {
    case 200: {
      return Promise.resolve(response.data.data || {})
    }
    case 500: {
      // if (response.data.isShowMsg == 1) {
      const msg = response.data.msg
      vue.$Message.warning(vue.$t(msg))
      // }
      return Promise.reject(response.data.msg)
    }
    // 服务器返回的数据，要在输入框下面展示
    case 400: {
      return Promise.reject(response.data)
    }
    // token 过期
    case 401: {
      Cookies.remove('token')
      location.reload()
      // message.error(response.data.msg);
      return
    }
    // 没有数据
    case 404: {
      router.replace({
        name: '404'
      })
      return Promise.reject(response.data)
    }
    default:
      return Promise.reject(response.data)
  }
}

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.headers['content-type'] === 'application/force-download') {
      return Promise.resolve(response)
    }
    if (response.headers['content-type'] === 'application/pdf') {
      return Promise.resolve(response)
    }
    // return response;
    if (response.headers.authorization) {
      Cookies.set('token', response.headers.authorization)
      // sessionStorage.setItem();
    }
    // 处理当下载文件失败时，因为请求的类型为blob，不能正确解析数据 需要以下做法才能正确解析
    if (
      response.request.responseType === 'blob' &&
      response.data instanceof Blob &&
      response.data.type &&
      response.data.type.toLowerCase().indexOf('json') !== -1
    ) {
      let reader = new FileReader()
      reader.onload = () => {
        response.data = JSON.parse(reader.result)
        return getResult(response)
      }

      reader.onerror = () => {}

      reader.readAsText(response.data)
    }

    return getResult(response)
  },
  // 服务器状态码不是200的情况
  (err) => {
    if (err.message.includes('timeout')) {
      vue.$Message.warning(vue.$t('timeOut'))
    }
    switch (err.response.data.status) {
      case 500:
        router.replace({
          name: '404'
        })
        break
      case 401:
        Cookies.remove('token')
        location.reload()
        break
      // 没有数据
      case 404:
        router.replace({
          name: '404'
        })
        break
      default:
        router.replace({
          name: '404'
        })
        break
    }
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const get = (url, params = {}) => {
  return axios.get(url, {
    params: params
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const post = (url, params = {}) => {
  return axios.post(url, params)
}

/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const put = (url, params = {}) => {
  return axios.put(url, params)
}

/**
 * delete方法，对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const del = (url = {}) => {
  return axios.delete(url)
}

export default {
  post,
  get,
  put,
  del
}
