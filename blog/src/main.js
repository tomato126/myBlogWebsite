/*
 * @Author: Eureka
 * @Date: 2020-06-18 11:20:05
 * @LastEditTime: 2020-06-23 10:43:39
 * @LastEditors: Eureka
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Divider, Pagination} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(Divider)
Vue.use(Pagination)



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
