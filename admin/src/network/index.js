import axios from 'axios'
import qs from 'qs'

function camelCase (str) {
    // 日期格式的原样返回 只检测年-月
    let reg = /^\d{4}-\d{2}/
    if (reg.test(str)) return str
    let rdashAlpha = /-([a-z]|[0-9])/ig
    let rmsPrefix = /^-ms-/
    let fcamelCase = function (all, letter) {
        return (letter + '').toUpperCase()
    }
    return str.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase)
}

// 对数组或者对象啊key值转成驼峰的形式
function changeHump (data) {
    let result = {}
    if (Array.isArray(data)) {
        result = []
    }

    for (var key in data) {
        let value = data[key]
        key = key.replace(/_/g, '-')
        key = camelCase(key)
        if (value instanceof Object) {
            value = changeHump(value)
        }
        result[key] = value
    }
    return result
}

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3000/fronted'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.transformRequest = [function (data, headers) {
    if (headers['Content-Type'] === 'application/x-www-form-urlencoded; charset=UTF-8') {
        data = qs.stringify(data)
    }
    return data
}]

axios.interceptors.request.use(config => {
  if (!('Content-Type' in config.headers)) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
    return changeHump(res.data)
}, (error) => {
    this.$message({message: '无网络，请您检查后再试！', type: 'error'}, )
    return Promise.reject(error)
})

export default axios
