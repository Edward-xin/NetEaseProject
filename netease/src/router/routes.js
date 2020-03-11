/**
 * 存放所有路由的数组
 */
// 引入路由组件
import Home from '../page/Home'
import Category from '../page/Category'
import Buy from '../page/Buy'
import ShopCart from '../page/ShopCart'
import Personal from '../page/Personal'
import Search from '../page/Search'
import Login from '../page/Login'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/buy',
    component: Buy,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home'
  }
]
