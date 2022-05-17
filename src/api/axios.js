import axios from 'axios'
import { Toast } from 'vant'
import { SUCCESS } from '@/config/index'
import qs from 'qs'

export const ajax = axios.create({
  baseURL: process.env.VUE_APP_NUTRITION_URL,
  timeout: 50000,
  headers: {
    // 'Content-Type': 'application/json'
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// request拦截器
ajax.interceptors.request.use(
  config => {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    })
    config.data = qs.stringify(config.data)
    return config
  },
  () => {
    Toast({
      type: 'fail',
      message: '网络错误'
    })
  }
)

// response拦截器
ajax.interceptors.response.use(
  response => {
    Toast.clear()
    if (response.data.code === SUCCESS) {
      return response.data
    } else {
      Toast({
        message: response.data.msg
      })
    }
  },
  error => {
    Toast({
      type: 'fail',
      message: '数据错误'
    })
    Toast.clear()
    return Promise.reject(error)
  }
)
