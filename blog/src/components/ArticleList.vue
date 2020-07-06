<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-18 18:59:46
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-28 09:54:58
--> 
<template>
  <article>
    <section class="post_preview" v-for="(article,index) in showList" :key="index">
      <router-link :to="`/article/${article.id}`" tag="a">
     <!-- <div @click="itemClick"> -->
        <h2 class="post_title">{{article.artTitle}}</h2>
        <div class="post_content_preview">{{article.content}}
        </div>
        <div class="post_meta">
          <span>{{article.postdata}}</span>&nbsp;&nbsp;‧
          <span>{{article.viewNumber}}</span>&nbsp;&nbsp;‧
          <span>{{article.category}}</span>
        </div>
      <!-- </div> -->
      </router-link>
    </section>
     <el-pagination style="text-align:center"
     background
    layout="prev, pager, next"
    :page-size="3"
    :total="totalCount"
    @current-change = "changeList"
    >
  </el-pagination>
    <!-- <section v-else class="no-content">
      <p>不好意思，暂无内容</p>
    </section> -->
  </article>
</template>

<script>
  export default {
     name: "ArticleList",
     props:{
       showList:{
         type:Array,
         default(){
           return []
         }
       },
       totalCount:{
         type:Number,
         default(){
           return 0
         }
       },
       changeList:{
         type:Function,
       }
     },
  }
</script>

<style scoped>
 .post_preview{
   margin-bottom: 30px;
 }
 .post_title {
   margin-bottom: 10px;
 }
 .post_content_preview {
   color:#666;
   font-size: 14px;
   line-height: 24px;
   overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
 }
 .post_meta{
   color:#808080;
   margin-top:10px;
   border-bottom: 1px solid #ddd;
   padding-bottom: 15px;
 }
</style>