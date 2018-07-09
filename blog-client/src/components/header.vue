<template>
  <header :class="{'login':isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1><router-link to="/"></router-link></h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <router-link to="/" class="logo">博客妙妙屋</router-link>
      <div class="btns">
        <router-link to="/"><el-button type="primary">首页</el-button></router-link>
        <router-link to="/"><el-button type="primary">问答</el-button></router-link>
        <router-link to="/"><el-button type="primary">专栏</el-button></router-link>
        <router-link to="/"><el-button type="primary">讲堂</el-button></router-link>
        <router-link to="/"><el-button type="primary">发现</el-button></router-link>
        <el-input v-model="input" placeholder="搜索问题或关键字"></el-input>
      </div>
      <div class="user">
        <router-link to="/create"><i class="edit el-icon-edit"></i></router-link>
        <img :src="user.avatar" :alt="user.username" class="avatar" :title="user.username">
        <ul>
          <li><router-link to="/my"><button>我的</button></router-link></li>
          <li><a href="#" @click="onLogout"><button>注销</button></a></li>
        </ul>
      </div>

    </template>
  </header>
</template>

<script>
  import auth from '@/api/auth'
  import element from 'element-ui'
  window.auth = auth
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data(){
      return {}
    },
    computed: {
      ...mapGetters([
        'isLogin',
        'user'
      ])
    },
    created(){
      this.checkLogin()
    },
    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
      onLogout() {
        this.logout()
      }
    }
  }
</script>


<style lang="less">
  @import "../assets/base.less";
  @import "../assets/common.less";
  header {
    display: grid;
    height: 67px;
    border-top: 3px solid #009a61;
    grid-template-columns: 12% auto 12%;
    background: #fafafa;
    .logo {
      text-align: center;
      line-height: 67px;
    }
    .btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .el-button {
      color: #666;
      border: none;
      background: #FAFAFA;
    }
    .el-button:hover {
      border: none;
      color: #666;
      background-color: #F3F3F3;
    }
    .el-button:focus {
      border: none;
      color: #009A61;
      background-color: #F3F3F3;
    }
    .el-input {
      width: 30%;
    }
  }
  header.no-login{
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: grid;
    justify-items: center;

    h1 {
      color: #fff;
      font-size: 40px;
      margin: 60px 0 0 0;
      text-transform: lowercase;
      a {
        color: #fff;
      }
    }
    p {
      margin: 15px 0 0 0;
      color: #fff;
    }
    .btns {
      margin-top: 20px;
    }
    button {
      margin: 20px 5px 0;
    }
  }
  header.login{


    .user {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        margin-left: 20px;
        width: 40px;
        line-height: 67px;
      }
      .avatar {
        width: 40px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 50%;
        margin-left: 15px;
      }
      ul {
        display: none;
        position: absolute;
        right: 0;
        list-style: none;
        border: 1px solid #eaeaea;
        margin: 0;
        padding: 0;
        background-color: #fff;
        a {
          text-decoration: none;
          font-size: 12px;
          display: block;
          &:hover {
            background: #eaeaea;
          }
        }
      }
      &:hover ul {
        display: block;
      }
    }
  }
</style>
