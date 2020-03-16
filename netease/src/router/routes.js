/**
 * 存放所有路由的数组
 */
// 路由懒加载 resolve => require(['../page/Category'], resolve)
// 引入路由组件
// import Home from '../page/Home'
// import Category from '../page/Category'
// import Buy from '../page/Buy'
// import ShopCart from '../page/ShopCart'
// import Personal from '../page/Personal'
// import Search from '../page/Search'
// import Login from '../page/Login'
// import Phone from '../page/Login/Phone'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: resolve => require(['../page/Home'], resolve),
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/category',
    component: resolve => require(['../page/Category'], resolve),
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/buy',
    component: resolve => require(['../page/Buy'], resolve),
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shopcart',
    component: resolve => require(['../page/ShopCart'], resolve),
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: resolve => require(['../page/Personal'], resolve),
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: resolve => require(['../page/Search'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['../page/Login'], resolve)
  }
]
