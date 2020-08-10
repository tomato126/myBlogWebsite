<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-19 10:43:45
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-07 09:34:46
--> 
<template>
  <div class="app-main">
    <div class="main-left">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <Aside class="main-right"></Aside>
  </div>
  
</template>

<script>
  import Aside from './Aside'

  export default {
     name: "MainContent",
     components: {
         Aside
     }
  }
</script>

<style scoped>
 .app-main{
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
 }
  .main-left{
    flex: 1;
    overflow: hidden;
    margin-top:30px;
    margin-right:60px;
  }
  .main-right{
    overflow: hidden;
    margin-top:30px; 
    width:250px;
  }                                                                                                                    
</style>