
<template>
    <div>
        <el-table :data="tableData" style="width: 100%" border  height="440">
            <el-table-column prop="id" label="ID" width="100"></el-table-column>
            <el-table-column prop="artTitle" label="标题" width="360"></el-table-column>
            <el-table-column prop="category" label="分类"></el-table-column>
            <el-table-column prop="postdata" label="发布时间"></el-table-column>
            <el-table-column prop="operation" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="editBlog(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="deleteBlog(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination" style="background: #fff">
            <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="pageNo"
                :page-size="pageSize"
                layout="total, prev, pager, next"
                :total="total">
                </el-pagination>
        </div>
        
    </div>
</template>

<script>
import * as service from '@/network/article'

export default {
    name: "BlogHome",
    props: {
        queryTitle: {},
        queryCategory: {}
    },
    data() {
        return {
            tableData: [],
            total: 0,
            pageNo: 1,
            pageSize: 10
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData () {
            this.getTableData()
        },
        getTableData () {
            let params = {title: this.queryTitle, category: this.queryCategory, page: this.pageNo, pageSize: this.pageSize}
            service.getHomeArticleList(params).then(res => {
                this.tableData = res.data.list
                this.total = res.data.total
            })
        },
        editBlog (rowInfo) {
            this.$router.push({
                path: '/editBlog',
                query: {
                    blogId: rowInfo.id
                }
            })
        },
        deleteBlog (rowInfo) {
            let deleteId = rowInfo.id
            service.deleteBlog({id: deleteId}).then(res => {
                if (res.code == 1) {
                    this.$message({message: res.data.msg, type: 'success'})
                    this.getData()
                } else if (res.code == 0) {
                    this.$message({message: res.data.msg, type: 'error'})
                }
            })
        },
        handleCurrentChange (page) {
            this.pageNo = page
            this.getTableData()
        }
    },
};
</script>

<style scoped lang="less">
    .table-row-height {
        padding: 5px 0 !important;
        color: red;
    }
    .blog-pagination {
        margin-top: 12px;
        float: right;
    }
</style>