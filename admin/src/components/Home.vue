<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-07-08 07:35:01
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-08 08:18:11
--> 
<template>
  <div>hello</div>
</template>

<script>
  export default {
    name:"Home",
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>