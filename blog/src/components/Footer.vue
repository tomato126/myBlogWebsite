<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-19 09:42:44
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-19 09:59:43
--> 
<template>
  <footer class="app-footer">
    <p class="copyright">Copyright© 2020-{{currentYear}} <a href="https://github.com/tomato126" target="_blank">
      Eureka's Blog</a></p>
  </footer>
</template>

<script>
  export default {
     name: "Footer",
     data() {
       return {
         currentYear: new Date().getFullYear()
       }
     }
  }
</script>

<style scoped>
  .app-footer{
  text-align: center;
  font-size: 12px;
  background-color: #fff;
  padding: 10px 0;
  min-width: 320px;
  color: #939393;
  }
  a{
    color: #939393;
  }
  .copyright a{
    font-style: italic;
}
</style>