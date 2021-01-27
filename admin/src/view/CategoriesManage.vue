<template>
    <div class="category-wrapper">
        <div>
            <el-input 
                type="text" 
                placeholder="请输入新增分类名" 
                v-model="categoryName" 
                maxlength="10" 
                show-word-limit  
                style="width: 300px; margin-right: 10px;"
                >
            </el-input>
            <el-button type="primary" @click="addCategory">新增分类</el-button>
        </div>
        <div class="category-table">
            <el-table :data="categoryList" style="width: 50%" border  height="440">
                <el-table-column prop="id" label="ID" width="100"></el-table-column>
                <el-table-column prop="name" label="分类名"></el-table-column>
                <el-table-column prop="operation" label="操作" v-if="false">
                    <template slot-scope="scope">
                        <el-button @click="editCategory(scope.row)" type="text" size="small">编辑</el-button>
                        <el-button @click="deleteCategory(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import * as service from '@/network/article'

export default {
    name: 'CategoriesManage',
    data () {
        return {
            categoryName: '',
            categoryList: []
        }
    },
    created () {
        this.getCategoryList()
    },
    methods: {
        getCategoryList () {
            service.getCategoryList().then(res => {
                this.categoryList = res.data
            })
        },
        editCategory (row) {
            console.log(row)
            this.$prompt('', '分类名修改', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValue: row.name
            }).then(({value}) => {
                //发送请求修改数据库
                let params = {id: row.id, name: value}
                service.modifyCategory(params).then(res => {
                    if (res.code === 1) {
                        this.$message({
                            type: 'success',
                            message: '修改成功！'
                        })
                    }
                })
                this.getCategoryList()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消修改'
                })
            })
        },
        addCategory () {
            if (this.categoryName == '') {
                this.$message({message: '新增分类名为空！！！', type: 'warning'})
                return
            }
            service.addCategory({name: this.categoryName}).then(() => {
                this.$message({
                    type: 'success',
                    message: '添加分类名成功'
                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .category-wrapper {
        padding: 20px;

        .category-table {
            margin-top: 10px;
        }
    }
</style>