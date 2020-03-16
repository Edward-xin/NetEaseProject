<template>
  <div class="homeContainer">
    <div class="home_header">
      <img
        src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
        alt="logo"
      />
      <div @click="$router.push('/search')" class="header_searchbox">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品 , 共{{ initPlaceHolder }}款好物</span>
      </div>
      <div class="header_login" @click="$router.push('/login')">登录</div>
    </div>
    <div class="home_category" ref="category">
      <van-tabs
        :line-width="40"
        :line-height="2"
        title-active-color="#DD1A21"
        swipe-threshold="4"
        v-model="tabindex"
      >
        <van-tab
          v-for="(item, tabindex) in titleArr"
          :title="item"
          :key="tabindex"
        >
          <HomeContent v-show="tabindex === 0" />
          <div v-show="tabindex === 1">居家生活</div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="dropdown">
      <span
        class="iconfont icon-xiajiantou"
        @click="isShowdrop = !isShowdrop"
        :class="isShowdrop ? 'active' : 'reactive'"
      ></span>
    </div>
    <div class="drop" v-show="isShowdrop">
      <p>全部频道</p>
      <ul class="droplist">
        <li
          class="dropitem "
          v-for="(item, index) in titleArr"
          :key="index"
          :class="tabindex === index ? 'active' : ''"
          @click="handleDrop(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="gift">
      <a href="https://act.you.163.com/act/pub/qAU4P437asfF.html">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png?imageView&type=webp"
          alt=""
        />
      </a>
    </div>
    <div class="toTop" @scroll="goTop" ref="top">
      <a href="top">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png?imageView&type=webp"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import HomeContent from './HomeContent'
import { reqPlaceHolder } from '../../api'
export default {
  name: 'Home',
  data() {
    return {
      titleArr: [
        '推荐',
        '居家生活',
        '服饰鞋包',
        '美食酒水',
        '个护清洁',
        '母婴亲子',
        '运动旅行',
        '数码家电',
        '全球特色'
      ],
      initPlaceHolder: '', //文本框placeholder数据
      isShowdrop: false, // 下拉列表显示或隐藏
      tabindex: 0 // 各个tab的索引
    }
  },
  components: {
    HomeContent
  },
  async mounted() {
    // 获取首页文本框placeholder数据
    const initPlaceHolder = await reqPlaceHolder()
    this.initPlaceHolder = initPlaceHolder.data
    this.$nextTick(() => {
      let gift = document.querySelector('.gift')
      gift.style.transform = 'translateX(-50px)'
      // 数据一旦变化就会一直创建滑动对象 所以做判断 当没有滑动对象时才创建
      // 单例模式 只会创建一次滑动对象
      // if (!this.scroll) {
      //   this.scroll = new BScroll('.van-tabs__wrap', {
      //     // click: true,
      //     scrollX: true
      //   })
      // } else {
      //   // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      //   // 刷新
      //   this.scroll.refresh()
      // }
      // new BScroll(this.$refs.category, {
      //   click: true,
      // })
    })
  },
  methods: {
    goTop() {},
    // 点击下拉列表里的item触发
    handleDrop(index) {
      // 当前列表项的索引赋值给标签页tab项的索引 会切换tab
      // 并且此时tabindex===index会触发动态样式active
      this.tabindex = index
      // 此时要隐藏下拉列表
      this.isShowdrop = false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.homeContainer
  width 100%
  background-color #eee
  position relative
  // touch-action: none
  .home_header
    width 100%
    display flex
    padding 20px 40px
    align-items center
    background-color #fff
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
        font-size  40px
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
    .van-tabs__wrap
      height 60px
      .van-tab__text
        font-size 32px
  .drop
    position absolute
    left 0
    top 100px
    z-index 10
    width 100%
    height 420px
    background-color #fff
    padding 20px 40px
    box-sizing border-box
    p
      font-size 36px
      margin-bottom 40px
    .droplist
      display flex
      flex-wrap wrap
      .dropitem
        width 22%
        height 60px
        display flex
        justify-content center
        align-items center
        font-size 24px
        margin 0 20px 40px 0
        border 1px solid #CCC
        background-color #FAFAFA
        &.active
          color #DD1A21
          border-color #DD1A21
  .dropdown
    position absolute
    z-index 99
    right 0
    top 100px
    width 100px
    height 60px
    background-color #fff
    display flex
    justify-content center
    align-items center
    span
      color #81A6C9
      font-size 50px
      font-weight bold
      &.active
        transition all .3s
        transform rotate(180deg)
      &.reactive
        transition all .3s
  .gift
    position fixed
    right -130px
    bottom 250px
    transition all .2s linear
    img
      width 130px
  .toTop
    position fixed
    right 20px
    bottom 120px
    img
      width 100px
      height 100px
</style>
