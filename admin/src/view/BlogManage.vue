<template>
    <div class="blog-wrapper">
        <div class="blog-header">
            <el-input placeholder="标题" v-model="inputVal" clearable style="width: 200px; margin-right: 10px"></el-input>
            <el-select v-model="value" placeholder="分类" clearable>
                <el-option
                    v-for="item in categoryList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
            </el-select>
            <el-button type="primary" style="margin-left: 10px;">搜索</el-button>
            <el-button type="primary" style="margin-left: 10px;" @click="writeArtical">写文章</el-button>
        </div>
        <div class="blog-table">
            <BlogTable />
        </div>
    </div>
</template>

<script>
import * as service from '@/network/article'
export default {
    name: 'BlogManage',
    components: {
        BlogTable: () => import('@/components/BlogTable')
    },
    data() {
        return {
            inputVal: '',
            value: '',
            categoryList: []
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
        writeArtical () {
            this.$router.push('/postBlog')
        }
    },
}
</script>

<style lang="less" scoped>
    .blog-wrapper {
        padding: 20px;
    }
    .blog-table {
        margin-top: 20px;
    }
</style>