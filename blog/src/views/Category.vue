<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-20 18:24:13
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-07 11:32:43
--> 
<template>
  <article class="categoryname">
    <section class="artList-by-type">
      <p class="type-title">归类在<span>{{showList[0] ? showList[0].category : ''}}</span>下的文章</p>
      <p class="type-total">共有<span>{{totalCount || 0}}</span>篇</p>
    </section>
    <list :show-list="showList" :total-count = "totalCount" :changeList="getCategoryArticleList"></list>
  </article>
</template>

<script>
  import list from '../components/ArticleList'
  import {getArticleByCategory,getCategoryArticleList} from "../network/article"
  export default {
     name: "Category",
     components:{
       list
     },
     data(){
       return{
         CategoryID:null,
         showList:[],
         totalCount:0
       }
     },
     created(){
       this.CategoryID = this.$route.params.category
       //console.log(this.$route.params)
       //请求总数据
       this.getArticleList(this.CategoryID)
       this.getCategoryArticleList()
     },
      methods:{
       getArticleList(CategoryID){
         getArticleByCategory(CategoryID).then(res => {
           //this.showList = res.data
           //console.log(123)
           this.totalCount = res.data.length
         })
       },
       getCategoryArticleList(PageIndex=1,CategoryID){
         CategoryID = this.CategoryID;
         getCategoryArticleList(PageIndex,CategoryID).then(res => {
           this.showList = res.data
         })
       },
     }
     
  }
</script>

<style scoped>
  .categoryname{
    display: flex;
    flex-direction: column;
  }
  .artList-by-type{
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 16px;
  }
  .type-title{
    padding-bottom: 10px;
  }
  .type-title span{
    color: orange;
    font-weight: bold;
    border-radius: 4px;
    padding: 5px;
    margin: 0 5px;
  }
  .type-total span{
        margin: 0 5px;
        color: orange;
        font-weight: bold;
  }
</style>