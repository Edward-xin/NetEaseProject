<template>
  <div class="homeContainer">
    <div class="home_header">
      <img
        src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
        alt="logo"
      />
      <div class="header_searchbox">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品, 共24053款好物</span>
      </div>
      <div class="header_login">登录</div>
    </div>
    <div class="home_category">
      <ul class="home_categories">
        <li class="active">推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个人清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>全球特色</li>
      </ul>
    </div>
    <HomeContent />
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import HomeContent from './HomeContent'
export default {
  name: 'Home',
  components: {
    HomeContent
  },
  mounted() {
    this.$nextTick(() => {
      // 创建滑动对象
      this.navScroll = new BScroll('.home_category', {
        click: true, // 可点击
        probeType: 3, // 可滑动 滑动的类型
        scrollX: true // 水平滑动
      })
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.homeContainer
  width 100%
  .home_header
    width 100%
    display flex
    padding 20px 40px
    align-items center
    img
      width 160px
      height 50px
    .header_searchbox
      width 500px
      height 65px
      text-align center
      background-color #ededed
      margin 0 20px
      border-radius 10px
      line-height 65px
      i
        font-size  32px
        color #666
        margin-right 10px
      span
        color #666
        font-size 32px
    .header_login
      width 80px
      height 40px
      border 2px solid #DD1A21
      color #DD1A21
      font-size 16px
      text-align center
      line-height 40px
      border-radius 10px
.home_category
  width 100%
  overflow hidden
  .home_categories
    height 80px
    width 200%
    line-height 80px
    display flex
    li
      display inline
      text-align center
      margin-left 30px
      font-size 32px
      &.active
        font-weight bold
        color #DD1A21
        border-bottom 5px solid #DD1A21
</style>
