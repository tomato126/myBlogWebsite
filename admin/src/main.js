/*
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-07-07 14:03:00
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-08 09:50:51
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import less from 'less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(less)
Vue.use(mavonEditor)

Date.prototype.Format = function (fmt) {
    var o = {
		"M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
	}
	
	if (/(y+)/.test(fmt)) 
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
	}
    return fmt;
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
