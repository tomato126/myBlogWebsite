<!--
 * @Author: Eureka
 * @Date: 2020-06-18 15:29:28
 * @LastEditTime: 2020-07-05 17:00:19
 * @LastEditors: Eureka
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\components\Header.vue
--> 
<template>
  <header class="app_header">
    <nav class="nav_between">
      <a class="left a_bold" href="/" title="Eureka">Eureka's blog</a>
      <ul class="ul_box">
        <router-link to="/home" tag="li">首页</router-link>
        <router-link to="/archive" tag="li">归档</router-link>
        <router-link to="/code" tag="li">Code</router-link>
        <router-link to="/about" tag="li">关于</router-link>
      </ul>
     
    </nav>
  </header>
</template>

<script>
export default {
  name:"Header"
}
</script>

<style scoped>
.app_header{
    background-color: #fff;
    height: 60px;
    width: 100%;
    line-height: 60px;
    z-index: 9999;
    box-shadow: 0 0px 1px #999;
}
.nav_between{
  width:70%;
  margin:0 auto;
  position:relative;
} 
.router-link-active{
  color:#409Eff;
}
.nav_between .a_bold{
  font-size: 1.5em;
  font-weight: bold;
  padding-right:30px;
}
.ul_box li{
  list-style: none;
  display: inline;
  padding-left:30px;
  font-weight: bold;
}
.ul_box li:hover {
  color:#409Eff;
  cursor: pointer;
}

</style>