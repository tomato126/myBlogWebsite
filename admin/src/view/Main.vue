<template>
    <div class="manage-wrapper">
        <header>
            <el-menu 
                class="el-menu-main" 
                mode="horizontal"
                active-text-color="#000"
                router
                :default-active="activeItem"
                >
                <el-menu-item index="/blogs">文章管理</el-menu-item>
                <el-menu-item index="/categories">分类管理</el-menu-item>
                <el-menu-item index="/albums">相册管理</el-menu-item>
                </el-menu>
        </header>
        <div class="manage-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data() {
        return {
        }
    },
    computed: {
        activeItem () {
            if (this.$route.fullPath == '/manage') {
                return '/blogs'
            } else {
                return this.$route.fullPath
            }
        }
    },
    created () {
        if (this.$route.fullPath == '/manage') {
            this.$router.push('/blogs')
        }
    },
    methods: {
        
    },
}
</script>

<style lang="less" scoped>
    .manage-wrapper {
        width: 100%;
        height: 100%;
        background: url(../assets/images/bg1.jpg);
        background-size: 100% 100%;
        background-position: center;
        overflow: hidden;
    }
    .el-menu {
        background: rgba(255, 255, 255, 0.4);
        border: none !important;
    }
    .manage-content {
        width: calc(100% - 160px);
        height: 580px;
        margin: 20px 80px;
        border-radius: 4px;
    }
</style>