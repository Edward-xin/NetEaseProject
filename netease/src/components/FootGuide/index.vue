<template>
  <div class="footGuideCotainer">
    <van-tabbar route v-model="active" active-color="#DD1A21">
      <van-tabbar-item replace to="/home">
        <div class="van-tabbar-item__icon">
          <i class="iconfont icon-shouye"></i>
        </div>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/category">
        <div class="van-tabbar-item__icon">
          <i class="iconfont icon-guizi"></i>
        </div>
        <span>分类</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/buy">
        <div class="van-tabbar-item__icon">
          <i class="iconfont icon-zhaopianshu"></i>
        </div>
        <span>值得买</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/shopcart">
        <div class="van-tabbar-item__icon">
          <i class="iconfont icon-gouwuche2"></i>
        </div>
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item @click="checkLogin">
        <div class="van-tabbar-item__icon">
          <i class="iconfont icon-geren"></i>
        </div>
        <span>个人</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FootGuide',
  data() {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState({
      phoneOremail: state => state.login.phoneOremail
    })
  },
  methods: {
    checkLogin() {
      // 如果Vuex里的phoneOremail没有从localStorge获得user数据那他就是''
      if (this.phoneOremail === '') {
        this.$router.push('/login')
      } else {
        this.$router.push('/personal')
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.van-tabbar
  height 100px
  position fixed
  z-index 999
  .van-tabbar-item
    text-align center
</style>
