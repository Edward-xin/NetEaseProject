import Vue from 'vue'
import Vuex from 'vuex'

// 引入模块
import search from './modules/search'
import login from './modules/login'

// 声明使用
Vue.use(Vuex)

// 实例化Vuex并暴露出去
export default new Vuex.Store({
  modules: {
    search,
    login
  }
})
