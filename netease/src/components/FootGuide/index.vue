<template>
  <div class="footGuideCotainer">
    <router-view />

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
      <van-tabbar-item replace to="/personal">
        <div class="van-tabbar-item__icon">
          <i class="iconfont icon-geren"></i>
        </div>
        <span>个人</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FootGuide',
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.van-tabbar
  height 100px
  .van-tabbar-item
    text-align center
</style>
