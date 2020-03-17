/**
 * 存放所有路由的数组
 */
// 路由懒加载
import { lazy } from 'react'
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
    // webpack4:webpackChunkName 构建后的名字 webpack5已经自带不需要
    component: lazy(() =>
      import(/* webpackChunkName: 'home' */ '../components/footerGuide')
    ),
    exact: true // 精确匹配 否则会匹配多个
  },
  {
    path: '/footerGuide',
    component: lazy(() =>
      import(/* webpackChunkName: 'home' */ '../components/footerGuide')
    ),
    exact: true
  },
  {
    path: '/home',
    component: lazy(() =>
      import(/* webpackChunkName: 'home' */ '../components/home')
    ),
    exact: true
  },
  {
    path: '/category',
    component: lazy(() =>
      import(/* webpackChunkName: 'home' */ '../components/category')
    ),
    exact: true
  }
  // {
  //   path: '/category',
  //   component: resolve => require(['../page/Category'], resolve)
  // },
  // {
  //   path: '/buy',
  //   component: resolve => require(['../page/Buy'], resolve)
  // },
  // {
  //   path: '/shopcart',
  //   component: resolve => require(['../page/ShopCart'], resolve)
  // },
  // {
  //   path: '/personal',
  //   component: resolve => require(['../page/Personal'], resolve)
  // },
  // {
  //   path: '/search',
  //   component: resolve => require(['../page/Search'], resolve)
  // },
  // {
  //   path: '/login',
  //   component: resolve => require(['../page/Login'], resolve)
  // },
  // {
  //   path: '/phone',
  //   component: resolve => require(['../page/Login/Phone'], resolve)
  // },
]
