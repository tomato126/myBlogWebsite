<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-27 10:27:11
 * @LastEditors: Eureka
 * @LastEditTime: 2020-06-27 16:06:35
--> 
<template>
  <article class="article_id">
    <section>
       <h2 class="article-title" v-if="article.artTitle">{{article.artTitle}}</h2>
       <p class="article-info">
         <span>发布于：{{article.postdata}}</span>
         <span>{{article.viewNumber}}次浏览</span>
       </p>
    </section>
    <section class="article-content markdown-body">
        <div v-html="markdownRender"></div>
    </section>
    <!-- <section class="article-type">
        <p>文章归类于：
          <router-link :to="`/category/${article.category}`">码不停蹄</router-link>
        </p>
        <p class="art_tag">文章标签：
          <router-link :to="`/tag/${item}`" v-for="(item,index) in tagList" :key="index">javasrcipt</router-link>
        </p>
        <p class="art_tag">版权声明：
          <a href="https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh" target="_blank"> 自由转载-署名-非商用</a>
        </p>
    </section> -->
  </article>
</template>

<script>
   import {mdRender}  from '../../utils/utils'
   import {getArticleDetail} from '../network/article'

  export default {
   
     name: "articleDetail",
     data(){
       return {
         articleId:null,
         article:null
       }
     },
     created() {
       this.articleId = this.$route.params.id;
       this.getArticleDetail(this.articleId);
     },
     methods: {
       getArticleDetail(articleId) {
         getArticleDetail(articleId).then( res => {
           this.article = res.data[0]
           console.log(res.data[0])
         })
       }
     },
     computed: {
       markdownRender() {
        let mdStr = this.article.content
        return mdRender(mdStr)
      },
     }

  }
</script>

<style scoped>
  .el-message {
    top: 65px !important;
  }

  .article_id {
    background-color: #fff;
    padding: 15px;
  }
  .article-title {
      text-align: center;
      font-size: 20px;
      color: #666;
      margin: 16px 0;
    }

  .article-info {
      text-align: center;
      font-size: 12px;
      color: #999;
      padding-bottom: 15px;
  }
  .article-info span {
        padding: 0 6px;
    }

  .article-content {
      font-size: 14px;
      line-height: 34px;
  }
  .article-content pre{
        max-height: 400px;
  }
</style>