<template>
    <div class="login-page">
        <nv-head page-type="登录"  :need-add="false"
                 :need-res="true">
        </nv-head>
        <section class="page-body">
            <div class="label">
                <input class="txt" type="text" placeholder="由于服务器限制，请前往官网注册账号并使用Access Token" v-model="token" maxlength="36">
            </div>
            <div class="label">
                <a class="button" @click="login">登录</a>
            </div>
        </section>
    </div>
</template>

<script>
    import $ from 'jquery';
    import nvHead from '../components/header.vue';
    import nvAlert from '../components/nvAlert'
    export default {
        data() {
            return {
                token: ''
            };
        },
        methods: {
            login() {
                if (this.token === '') {
                    this.$alert('令牌格式错误,应为36位UUID字符串');
                    return false;
                }
                $.ajax({
                    type: 'POST',
                    url: 'https://cnodejs.org/api/v1/accesstoken',
                    data: {
                        accesstoken: this.token
                    },
                    dataType: 'json',
                    success: (res) => {
                        let user = {
                            loginname: res.loginname,
                            avatar_url: res.avatar_url,
                            userId: res.id,
                            token: this.token
                        };
                        window.window.sessionStorage.user = JSON.stringify(user);
                      // vuex以载荷形式分发
                        this.$store.dispatch('setUserInfo', user);
                        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                        this.$router.push({
                            path: redirect
                        });
                    },
                    error: (res) => {
                        var error = JSON.parse(res.responseText);
                        this.$alert(error.error_msg);
                    }
                });
            }
        },
        components: {
            nvHead
        }
    };
</script>
<style lang="scss">
    .page-body {
        padding: 50px 15px;
        min-height: 400px;
        background-color: #fff;
        .label {
            display: inline-block;
            width: 100%;
            margin-top: 15px;
            position: relative;
            left: 0;
            top: 0;
            .txt {
                padding: 12px 0;
                border: none;
                border-bottom: 1px solid #4fc08d;
                background-color: transparent;
                width: 100%;
                font-size: 14px;
                color: #313131;
            }
            .button {
                display: inline-block;
                width: 99%;
                height: 42px;
                line-height: 42px;
                border-radius: 3px;
                color: #fff;
                font-size: 16px;
                background-color: #4fc08d;
                border: none;
                border-bottom: 2px solid #3aa373;
                text-align: center;
                vertical-align: middle;
            }
            .file {
                position: absolute;
                top: 0;
                left: 0;
                height: 42px;
                width: 48%;
                outline: medium none;
                opacity: 0;
            }
        }
    }
</style>
