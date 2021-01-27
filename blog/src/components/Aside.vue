<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-19 10:02:12
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-05 16:36:23
--> 
<template>
  <aside>
    <!-- 联系我 -->
    <section >
      <h4>CONTACT ME</h4>
      <div>
        <img src="../assets/images/headerImg.jpg"/>
      </div>
    </section>
    <!-- 分类 -->
    <section class="category">
      <h4>CATEGORY</h4>
      <router-link :to="`/category/${item.id}`" 
                    tag="a" v-for="(item,index) in categoryList" 
                    :key="index"
                     >
                    {{item.name}}
        <span class="right">共{{item.times}}篇</span>
      </router-link>
    </section>
  </aside>
</template>


<script>
  import {getCategoryNum} from '../network/article'

  export default {
     name: "Aside",
     data() {
       return {
         categoryList:[],
         tagList:[]
       }
     },
     created(){
       this.getCategoryNum()
     },
     methods:{
       getCategoryNum(){
         getCategoryNum().then(res => {
           this.categoryList = res.data
         })
       },
     }
  }
</script>

<style scoped>
 aside{
   margin-top:20px;
  
   
 }
 section {
    padding-top:20px;
    padding-bottom: 20px;
 }
 .category {
    border-top:1px solid #eee;
 }
 h4{
   padding-bottom: 20px;
 }
.tags a{
    display:inline-block;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    padding: 0 10px;
    color: #bfbfbf;
    line-height: 24px;
    font-size: 12px;
    text-decoration: none;
    margin: 0 1px;
    margin-bottom: 6px;
    margin-right:6px;
}

.category a{
    display: block;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    padding: 0 10px;
    color: #bfbfbf;
    line-height: 24px;
    font-size: 12px;
    text-decoration: none;
    margin: 0 1px;
    margin-bottom: 6px;
    margin-right:6px;
}
a:hover{
  color:#777;
  border: 1px solid #777;
}
img{
  width: 150px;
  height:150px;
}
</style>