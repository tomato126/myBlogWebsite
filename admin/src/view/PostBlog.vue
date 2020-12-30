<template>
    <div style="padding-top: 5px;">
        <div style="margin: 5px;">
            <el-button type="primary" icon="el-icon-arrow-left" @click="back" style="margin-right: 10px">文章列表</el-button>
            <el-input placeholder="标题" v-model="title" clearable style="width: 200px; margin-right: 10px"></el-input>
            <el-select v-model="category" placeholder="分类" clearable>
                <el-option
                    v-for="item in categoryList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
            </el-select>
            <el-button type="primary" style="margin-left: 10px;" v-if="false">保存</el-button>
            <el-button type="primary" style="margin-left: 10px;" @click="postBlog">发布</el-button>
        </div>
        <mavon-editor v-model="value" style="height: 500px; margin-top: 25px"/>
    </div>
</template>

<script>
import * as service from '@/network/article'
import getPostId from '@/utils/getPostId'
import getDate from '@/utils/getDate'

export default {
    name: 'PostBlog',
    data () {
        return {
            value: '',//文章内容
            categoryList: [],
            title: '',
            category: ''
        }
    },
    created () {
        this.getData()
    },
    methods: {
        getData () {
            this.getCategoryList()
        },
        getCategoryList () {
            service.getCategoryList().then(res => {
                this.categoryList = res.data
            })
        },
        back () {
           this.$router.go(-1)
        },
        postBlog () {
            //console.log(this.value)

            if (this.value == '') {
                this.$message({message: '文章内容为空！！！', type: 'warning'})
                return
            }

            if (this.title == '' || this.category == '') {
                this.$message({message: '标题或分类为空！！！', type: 'warning'})
                return
            }

            //发送请求将文章传至数据库
            let params = {
                id: getPostId(),
                title: this.title,
                category: this.category,
                tag: 'js',
                _posts: this.value,
                postDate: getDate(),
                viewNumber: 1,
            }
            service.postBlog(params).then(res => {
                if (res.code == 1) {
                    this.$message({message: res.data.msg, type: 'success'})
                    this.$router.go(-1)
                } else if (res.code == 0) {
                    this.$message({message: res.data.msg, type: 'error'})
                }
            })
        }
    },
}
</script>

<style lang="less" scoped>

</style>