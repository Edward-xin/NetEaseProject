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
    <div class="home_category">
      <van-tabs
        line-width="60px"
        line-height="2px"
        title-active-color="#DD1A21"
        swipe-threshold="4"
        scrollspy="true"
      >
        <van-tab
          v-for="(item, index) in title"
          :title="title[index]"
          :key="index"
          to="/home"
        >
        </van-tab>
      </van-tabs>
    </div>
    <HomeContent />
  </div>
</template>

<script>
import HomeContent from './HomeContent'
import { reqPlaceHolder } from '../../api'
export default {
  name: 'Home',
  data() {
    return {
      title: [
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
      initPlaceHolder: '' //文本框placeholder数据
    }
  },
  components: {
    HomeContent
  },
  async mounted() {
    // 获取首页文本框placeholder数据
    const initPlaceHolder = await reqPlaceHolder()
    this.initPlaceHolder = initPlaceHolder.data
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.homeContainer
  width 100%
  background-color #eee
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
      // width 2000px

      // .van-tab--active
      //   color #DD1A21
      .van-tab__text
        font-size 32px
      // .van-tabs__line
      //   height 5px
    // background-color #fff
    // .home_categories
    //   height 80px
    //   width 200%
    //   line-height 80px
    //   display flex
    //   li
    //     display inline
    //     text-align center
    //     margin-left 30px
    //     font-size 32px
    //     &.active
    //       font-weight bold
    //       color #DD1A21
    //       border-bottom 5px solid #DD1A21
</style>
