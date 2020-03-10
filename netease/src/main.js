import Vue from 'vue'
import App from './App'

// 引入路由器对象
import router from './router'

// 引入vant的组件
import { Tabbar, TabbarItem } from 'vant'
import { Tab, Tabs } from 'vant'
import { CountDown } from 'vant'
import { Sidebar, SidebarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(CountDown)
Vue.use(Sidebar)
Vue.use(SidebarItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 注册路由器
  router
})
