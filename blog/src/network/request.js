/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-22 16:46:40
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-23 13:04:25
 */ 
import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    baseURL: 'http://localhost:3000/fronted',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)

} 
