// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import store from './vuex/user.js'
import filters from './filter/filters.js';
import Alert from './libs/alert';
import $ from 'jquery'
// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.sessionStorage.user) {
  store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user));
}


Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
