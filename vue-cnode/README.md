# vue-cnode

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass --save-dev



#### view

- about 项目相关信息及地址，引入组件nvHead
- index 进入页面显示图片，延时一秒钟再加载list
- list 论坛首页。
  - 引入nvHead组件，传入page-type(searchKey.tab)  fixHead(true)  needAdd(true)
  - 引入backtop组件，返回顶部
  - 判断searchKey.tab是否等于sessionStorage.tab，相等则赋值给topics，不相等则用函数getTopics获取数据赋值topic
  - 滚动加载数据getScrollData()
  - getTabInfo() h3绑定class根据item.tab item.good item.top isClass显示不同的样式
  - getLastTimeStr() 过滤函数 调用timeago库算出距离现在时间
- login 登录页面 
  - 引入nvHead组件，传入page-type(‘登录)  need-res(true)  needAdd(false)
  - 引入alert.js 顶部弹出不正确的账户的提醒信息
  - 将正确的用户信息user存储到sessionStorage
  - vuex以载荷形式分发 this.$store.dispatch('setUserInfo', user);
- message 消息页面
   - 引入nvHead组件
   - 引入vuex.mapGetter使用对象展开运算符将 getter 混入 computed 对象中
- new 发布页面
  - 引入vuex.mapGetter获取userInfo
  - post请求发送title和content到api
- topic 文章详情
  - 获取url传的tab参数 this.topicId = this.$route.params.id;
  - addReply和upReplay两种回复方式