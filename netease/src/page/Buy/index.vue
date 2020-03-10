<template>
  <div class="buyContanier">
    <div class="buy_head">
      <i class="iconfont icon-shouye "></i>
      <span>值得买</span>
      <div class="head_right">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche2"></i>
      </div>
    </div>
    <div class="buy_swiper">
      <div class="swiper_title">
        <span>值得买</span>
        <span>严选好物 用心生活</span>
      </div>
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(nav, index) in navList" :key="index">
            <img :src="nav.picUrl" alt="" />
            <p>{{ nav.mainTitle }}</p>
            <p>{{ nav.viceTitle }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="waterfall">
      <ul class="wrapfall">
        <li v-for="(fdata, index) in waterfalldatas.data" :key="index">
          <ul>
            <li v-for="(topic, index) in fdata.topics" :key="index">
              <img :src="topic.picUrl" alt="" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { reqBuyCateLists, reqWaterfall } from '../../api'
export default {
  name: 'Buy',
  data() {
    return {
      navList: [],
      waterfalldatas: {}
    }
  },
  async mounted() {
    const result = await reqBuyCateLists()
    // console.log(result)
    this.navList = result.data.navList
    // console.log(this.navList)
    const waterfalldatas = await reqWaterfall()
    console.log(waterfalldatas.data.topics)
    console.log(waterfalldatas)
    this.$nextTick(() => {
      // 创建滑动对象
      this.navScroll = new BScroll('.swiper-container', {
        click: true, // 可点击
        probeType: 3, // 可滑动 滑动的类型
        scrollX: true, // 水平滑动
        bounce: false, // 设置不回弹
        scrollbar: true
      })
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.buyContanier
  width 100%
  height 2000px
  background-color #eee
  .buy_head
    width 100%
    height 120px
    line-height 120px
    text-align center
    background-color #fff
    i
      font-size 60px
      margin-right 30px
      &:nth-of-type(1)
        float left
        margin-left 30px
    .head_right
      float right
    span
      font-size 44px
  .buy_swiper
    width 100%
    height 550px
    padding 80px 20px 0
    box-sizing border-box
    background url(./images/bg.png) no-repeat center/100% 100%
    .swiper_title
      display flex
      span
        color #ffffff
        &:nth-of-type(1)
          display block
          font-size 70px
          font-weight 700
          transform scaleX(.6)
        &:nth-of-type(2)
          line-height 2.5
    .swiper-container
      width 100%
      height 650px
      .swiper-wrapper
        width 200%
        height 100%
        background-color #fff
        border-radius 20px
        display flex
        flex-direction column
        flex-wrap wrap
        .swiper-slide
          width 10%
          height 200px
          margin 2.5% 1.25% 0
          text-align center
          p
            font-size 26px
            line-height 1.5
            &:nth-of-type(1)
              font-weight bold
            &:nth-of-type(2)
              color #999999
          img
            width 140px
            height 140px
  .waterfall
    width 95%
    height 1000px
    margin 320px 2.5% 0
    background-color #fff
    border-radius 20px
    // column-count: 2
    // column-gap 20px
    .wrapfall
      width 100%
      height 1000px
      // column-count: 2
      // column-gap 20px
      li
        width 50%
        height 200px
</style>
