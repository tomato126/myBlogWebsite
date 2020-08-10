<!--
 * @Descripttion: 
 * @version: 
 * @Author: Eureka
 * @Date: 2020-06-18 18:54:52
 * @LastEditors: Eureka
 * @LastEditTime: 2020-07-07 13:46:40
--> 
<template>
  <div>
    <article>
      <section class="archive-title">
        <p class="archive-desc">"凡是过往皆是序章，所有将来皆为可盼"</p>
        <p class="archive-tips">共留下<span>{{archiveList.total}}</span>个足迹</p>
      </section>
      <section class="time-list-wrap" v-if="archiveList.total > 0">
        <div class="article-list" v-for="(item,index) in returnDateArr(archiveList.list)" :key="index">
          <div class="year"> <el-divider content-position="left">YEAR-{{item}}</el-divider></div>
          <ul class="art-list-detail">
             <li class="art-detail-item" v-for="(list,listIndex) in returnArtList(archiveList.list,item)" :key="listIndex">
              <span class="date">{{list.postdata}}</span>
              <router-link :to="`/article/${list.id}`">{{list.artTitle}}</router-link>
              <span class="views">
                <i class="iconfont">&#xe607;</i>
                {{list.viewNumber}}
              </span>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import {getArchive} from "../../network/article"
 import "../../assets/iconfont/iconfont.css"
  export default {
     name: "Archive",
     data() {
       return{
         archiveList:[]
       }
     },
     created() {
       this.getArchive()
     },
     methods:{
       getArchive() {
         getArchive().then(res => {
           var alist = res.data
           const archiveCount = res.data.length;
           function getDateArr(arr) {
                let year_obj = {};
                console.log(111)
                for (var i = 0, len = arr.length; i < len; i++) {
                    let Year_index = arr[i].postdata.indexOf('-');
                    let year_date = arr[i].postdata.substr(0, Year_index);
                    if (!year_obj[year_date]) {
                        year_obj[year_date] = [];
                        year_obj[year_date].push(arr[i])
                    } else {
                        year_obj[year_date].push(arr[i])
                    }

                }
                return year_obj
            }
            let result = {
              list: getDateArr(alist),
              total: archiveCount,
            }
            this.archiveList = result
            console.log(this.archiveList)

         })
       },
       returnDateArr(obj){
        let dateArr =[]
        for (let dates in obj){
          dateArr.push(dates)
        }
        return dateArr.reverse()
      },
      returnArtList(obj,date){
        return obj[date]
      },
     }

  }
</script>

<style scoped>
  .archive-title {
      text-align: center;
      padding: 15px 0;
  }
  .archive-tips {
        padding-top: 8px;
        font-size: 16px;
        color: #999;
  }
  .archive-tips span {
          padding: 0 8px;
          color: orange;
          font-weight: bold;
          font-style: italic;
  }
  .time-list-wrap .art-list {
        padding:0 15px;
        font-size: 13px;
  }
  .year{
    width: 100%;
  }
  .el-divider__text{
            font-size: 20px;
            font-weight: bold;
  }
   .art-list-detail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 13px;
   }
  .date {
    padding-right: 10px;
    display: inline-block;
    width: 88px;
  } 
  a{
    text-decoration: underline;
  }
  a:hover{
    color:#0085A1;
  }
  .art-detail-item {
    line-height: 30px;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .views{
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right:50px;
  }
</style>