<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-07-07 14:03:00
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-08 09:54:53
--> 
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
    @import "./assets/css/base.css";
    html {
        height: 100%;
    }
    body {
        height: 100%;
    }
    #app {
        width: 100%;
        height: 100%;
    }
</style> 
    
