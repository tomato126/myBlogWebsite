<template>
    <div class="bg-wrapper">
        <div class="login-wrapper">
            <p class="login-title">Login</p>
            <div class="account">
                <el-input class="input-login" placeholder="账号" v-model="inputAccount" clearable style="width: 100%; height: 40px;"></el-input>
            </div>
            <div class="password">
                <el-input class="input-login" placeholder="密码" v-model="inputPassword" clearable show-password style="width: 100%; height: 40px;"></el-input>
            </div>
            <el-button plain class="button-login" @click="login">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            inputAccount: '',
            inputPassword: ''
        }
    },
    methods: {
        login () {
            if (this.inputAccount == '' || this.inputPassword == '') {
                this.$message({message: '账号或密码为空！！！', type: 'warning'})
                return
            }

            if (this.inputAccount == 'Eureka' && this.inputPassword == '123456') {
                this.$router.push('/manage') //TODO 这样直接输入对应的路由就能直接跳过登录
            } else {
                this.$message({message: '账号或密码错误！！！', type: 'warning'})
                return
            }
        }
    },
}
</script>

<style lang="less">
    .input-login {
            input {
                background: rgba(0, 0, 0, 0.4);
                color: #fff;
            }
        }
    .button-login {
        width: 100%;
        margin-top: 20px !important;
        background: rgba(0,0,0,0.4) !important;
        color: #fff !important;
    }
</style>

<style lang="less" scoped>
    .bg-wrapper {
        width: 100%;
        height: 100%;
        background: url(../assets/images/bg1.jpg);
        background-size: 100% 100%;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        .login-title {
            font-size: 36px;
            text-align: center;
            color: #fff;
            margin-bottom: 20px;
            margin-top: 10px;
        }
        span {
            margin-right: 20px;
        }
        .login-wrapper {
            height: 300px;
            width: 400px;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 6px;
            padding: 10px 60px 10px 60px;
        }
        .account {
            margin-bottom: 10px;
        }
    }
</style>
