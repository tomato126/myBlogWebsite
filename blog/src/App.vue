<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-18 11:20:05
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-07 13:04:33
--> 
<template>
  <div id="app">
    <Header></Header>
    <MainContent>   
    </MainContent>
    <Footer class="footer"></Footer>
  
  </div>
</template>

<script>
 import Header from "./components/Header"
 import MainContent from "./components/MainContent"
 import Footer from "./components/Footer" 


export default {
  name: 'App',
  components: {
    Header,
    MainContent,
    Footer
  }
}
</script>

<style>

 @import "./assets/css/base.css"; 
.footer{
  margin-top:20px;
}
  
</style>
