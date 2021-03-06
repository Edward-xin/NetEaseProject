import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import routes from './routes'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 声明使用
Vue.use(VueRouter)

// 向外暴露路由器对象
export default new VueRouter({
  mode: 'history', // 去掉地址栏的#符号
  routes
})
