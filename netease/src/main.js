import Vue from 'vue'
import App from './App'

// 引入表单验证的插件
import './config/validate'

// 引入路由器对象
import router from './router'
// 引入Vuex
import store from './store'

// 引入vant的组件
import {
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  CountDown,
  Sidebar,
  SidebarItem,
  Dialog,
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(CountDown)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Dialog)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 注册路由器
  router,
  // 注册Vuex仓库
  store
})
