<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-18 18:59:46
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-07 11:30:48
--> 
<template>
  <ArticleList :show-list="showList" :total-count = "totalCount" :changeList="getHomeArticleList"></ArticleList>
</template>

<script>
import ArticleList from '../../components/ArticleList'
import {getArticleList,getHomeArticleList} from "../../network/article"
  export default {
     name: "Home",
     components:{
       ArticleList
     },
     data() {
       return{
         showList:[],
         totalCount:0
       }
     },
     created(){
       //请求总数据
       this.getArticleList()
       //请求首页数据
       this.getHomeArticleList()
     },
      methods:{
       getArticleList(){
         getArticleList().then(res => {
           this.totalCount = res.data.length
         })
       },
       getHomeArticleList(PageIndex=1){
         getHomeArticleList(PageIndex).then(res => {
           //console.log(res) 
           this.showList = res.data
         })
       },
     }
  }
</script>

<style scoped>

</style>