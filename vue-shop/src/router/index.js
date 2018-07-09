import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/components/cart';
import Address from '@/components/addrss';
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component:  Cart,
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    }
  ]
})
