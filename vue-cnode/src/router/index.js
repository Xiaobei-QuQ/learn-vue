import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/user';
Vue.use(Router)
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Home = resolve => {
  require.ensure(['../views/index.vue'], () => {
    resolve(require('../views/index.vue'));
  });
};

const List = resolve => {
  require.ensure(['../views/list.vue'], () => {
    resolve(require('../views/list.vue'));
  });
};

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/cnodevue',
      name: 'cnodevue',
      component: Home
    }, {
      path: '/list',
      name: 'list',
      component: List
    }, {
      path: '/topic/:id',
      name: 'topic',
      component(resolve) {
        require.ensure(['../views/topic.vue'], () => {
          resolve(require('../views/topic.vue'));
        });
      }
    }, {
      path: '/add',
      name: 'add',
      component(resolve) {
        require.ensure(['../views/new.vue'], () => {
          resolve(require('../views/new.vue'));
        });
      },
      meta: { requiresAuth: true }
    }, {
      path: '/message',
      name: 'message',
      component(resolve) {
        require.ensure(['../views/message.vue'], () => {
          resolve(require('../views/message.vue'));
        });
      },
      meta: { requiresAuth: true }
    }, {
      path: '/user/:loginname',
      name: 'user',
      component(resolve) {
        require.ensure(['../views/user.vue'], () => {
          resolve(require('../views/user.vue'));
        });
      }
    }, {
      path: '/about',
      name: 'about',
      component(resolve) {
        require.ensure(['../views/about.vue'], () => {
          resolve(require('../views/about.vue'));
        });
      }
    }, {
      path: '/login',
      name: 'login',
      component(resolve) {
        require.ensure(['../views/login.vue'], () => {
          resolve(require('../views/login.vue'));
        });
      }
    }, {
      path: '*',
      component: Home
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 处理左侧滚动不影响右边
  // $('html, body, #page').removeClass('scroll-hide');
  document.getElementById('overflow-control').style.overflow = 'auto'
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.userId) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});
export default router;
