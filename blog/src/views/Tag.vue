<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-07-05 11:24:05
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-05 16:48:39
--> 
<template>
  <article class="Tagname">
    <section class="artList-by-type">
      <p class="type-title">与<span>{{this.showList[0].tag}}</span>标签相关的文章</p>
      <p class="type-total">共有<span>{{totalCount || 0}}</span>篇</p>
    </section>
    <list :show-list="showList" :total-count = "totalCount"></list>
  </article>
</template>

<script>
  import list from '../components/ArticleList'
  import {getArticleByTag} from "../network/article"
  export default {
     name: "Tag",
     components:{
       list
     },
     data(){
       return{
         TagID:null,
         showList:[],
         totalCount:0
       }
     },
     created(){
       this.TagID = this.$route.params.tag
       //console.log(this.$route.params)
       //请求总数据
       this.getArticleList(this.TagID)
       //请求首页数据
      /*  this.getShowList() */
     },
      methods:{
       getArticleList(TagID){
         getArticleByTag(TagID).then(res => {
           this.showList = res.data
           console.log(this.showList)
           this.totalCount = res.data.length
         })
       },
       /* getShowList(PageIndex=1){
         getShowList(PageIndex).then(res => {
           //console.log(res) 
           this.showList = res.data
         })
       }, */
     }
     
  }
</script>

<style scoped>
  .Tagname{
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