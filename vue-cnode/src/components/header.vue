<template>
  <div>
    <div class="page-cover" v-if="show&&fixHead" @click="showMenus">
    </div>
    <header :class="{'show':show&&fixHead,'fix-header':fixHead,'no-fix':!fixHead}" id="hd">
      <div class="nv-toolbar">
        <div class="toolbar-nav" @click="openMenu" v-if="fixHead">
        </div>
        <span v-text="pageType"></span>
        <i class="num" v-if="messageCount > 0"> {{messageCount}}</i>
        <a @click="addArt">
          <i v-if="needAdd" v-show="!messageCount || messageCount <= 0" class="iconfont add-icon" style="font-size:30px;line-height: 44px;right: 6px;top: -4px;cursor:pointer;
">+</i>
        </a>
        <router-link :to="{'name':'list'}">
        <i v-if="needRes" class="iconfont add-icon" style="font-size:20px;line-height: 44px;right: 6px;top: -4px;cursor:pointer;
">&#xe609;</i></router-link>
      </div>
    </header>
    <nv-alert :content="contents" :show="showA"></nv-alert>
    <nv-menu :show-menu="show" :page-type="pageType" :nick-name="nickname" :profile-url="profileimgurl" v-if="fixHead"></nv-menu>
  </div>
</template>

<script>
  import nvAlert from './nvAlert'
  export default {
    replace: true,
    props: {
      pageType: String,
      fixHead: Boolean,
      messageCount: Number,
      scrollTop: 0,
      needAdd: {
        type: Boolean,
        default: true
      },
      needRes: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        nickname: '',
        profileimgurl: '',
        show: false,
        showA: false,
        contents: '请先登录再进行操作',
       redirect : decodeURIComponent(this.$route.query || '/')
      };
    },
    methods: {
      openMenu() {
        // $('html, body, #page').addClass('scroll-hide');
        document.getElementById('overflow-control').style.overflow = 'hidden'
        this.show = !this.show;
        console.log(this.redirect)
      },
      showMenus() {
        this.show = !this.show;
        document.getElementById('overflow-control').style.overflow = 'auto'
        // $('html, body, #page').removeClass('scroll-hide');
      },
      addArt() {
        if(window.window.sessionStorage.user){
          this.$router.push({
            path: 'add'
          });
          console.log('0')
        }else{
          this.showA = true
          this.show = true
          var _this = this
          setTimeout(function (){
            _this.showA = false
          },1000);
        }
      },
    },
    components: {
      'nvMenu': require('./menu.vue').default,
      nvAlert
    }
  };
</script>
