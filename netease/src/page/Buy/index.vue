<template>
  <div class="buyContanier">
    <div class="buy_head">
      <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
      <span>值得买</span>
      <div class="head_right">
        <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        <i
          class="iconfont icon-gouwuche2"
          @click="$router.push('/shopcart')"
        ></i>
      </div>
    </div>
    <div class="buy_swiper">
      <div class="swiper_title">
        <span>值得买</span>
        <span>严选好物 用心生活</span>
      </div>
      <div class="swiper-container" ref="categorySwiper">
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
      <vue-waterfall-easy
        :imgsArr="imgsArr"
        @scrollReachBottom="getData"
        :mobileGap="10"
        :imgWidth="100"
        :maxCols="2"
      >
        <!-- 默认插槽 进行自定义图片的描述信息    props.value ：遍历参数imgsArr的元素值-->
        <div class="img-info" slot-scope="props">
          <div class="info">
            <p class="info-title">{{ props.value.title }}</p>
            <div class="info-user">
              <div class="userinfo">
                <img class="info-avatar" :src="props.value.avatar" alt="" />
                <span class="info-nickname">{{ props.value.nickname }}</span>
              </div>
              <div class="usercount">
                <img
                  class="info-icon"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <span class="info_readCount">{{ props.value.readCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import BScroll from 'better-scroll'
import { reqBuyCateLists, reqAutoWaterfall } from '../../api'
export default {
  name: 'Buy',
  components: {
    vueWaterfallEasy
  },
  data() {
    return {
      navList: [],
      imgsArr: [
        {
          look: {
            picUrl:
              'https://yanxuan.nosdn.127.net/17b1f75f167c06763a550486f197d852.jpg',
            avatar:
              'http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg',
            nickname: '选妹',
            readCount: 17801,
            title: '严选4周年经典品榜'
          }
        },
        {
          look: {
            picUrl:
              'https://yanxuan.nosdn.127.net/c45db53de9b98dd12342e433b69a68a0.jpeg',
            avatar:
              'http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg',
            nickname: '选妹',
            readCount: 80016,
            title: '复工防护全面指南'
          }
        },
        {
          look: {
            picUrl:
              'https://yanxuan.nosdn.127.net/805d9c90bff5401197160c64765a9cf5.jpg',
            avatar:
              'http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg',
            nickname: '选弟',
            readCount: 10847,
            title: '如期而至的不止春天，还有严选这杯明前头采茶~'
          }
        }
      ] //存放所有已加载图片的数组（即当前页面会加载的所有图片）
    }
  },

  async mounted() {
    // 获得上面的商品数据
    const result = await reqBuyCateLists()
    // console.log(result)
    this.navList = result.data.navList
  },
  created() {
    this.initscroll() // 初始化滑动对象
    this.imgsArr = this.initImgsArr() //初始化第一次（即页面加载完毕时）要加载的图片数据
    this.getData() //滚动条滚动到底部时,用于请求新的图片数据
  },
  watch: {
    navList: function() {}
  },
  methods: {
    // 初始化滑动对象
    initscroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.categorySwiper, {
            click: true, // 可点击
            probeType: 3, // 可滑动 滑动的类型
            scrollX: true, // 水平滑动
            bounce: false, // 设置不回弹
            scrollbar: {
              // 滚动条
              fade: false, //显示
              interactive: false
            },
            preventDefault: false // 阻止了浏览器默认选中行为
          })
        } else {
          this.scroll.refresh()
        }
        // console.log(this.scroll)
      })
    },
    // 初始化首屏数据
    initImgsArr() {
      //初始化图片数组的方法，把要加载的图片装入
      let arr = []
      this.imgsArr.forEach(item => {
        // console.log(item.look.picUrl)
        arr.push({
          src: item.look.picUrl,
          avatar: item.look.avatar,
          link: '',
          nickname: item.look.nickname,
          title: item.look.title,
          readCount:
            Math.floor(item.readCount / 1000) <= 0
              ? item.look.readCount
              : Math.floor(item.look.readCount / 1000) + 'k'
        })
      })

      return arr
    },
    // 触底发送请求新的数据
    async getData() {
      // 获得瀑布流触底加载的图片信息
      const fetchDatas = await reqAutoWaterfall()
      this.fetchImgsArr = fetchDatas.data.result
      // console.log(this.fetchImgsArr)
      let arr = []
      this.fetchImgsArr.forEach(item => {
        // console.log(item.look)
        if (item.look) {
          arr.push({
            src: item.look.picUrl ? item.look.picUrl : '',
            avatar: item.look.avatar,
            link: '',
            nickname: item.look.nickname,
            title: item.look.title,
            readCount:
              Math.floor(item.look.readCount / 1000) <= 0
                ? item.look.readCount
                : Math.floor(item.look.readCount / 1000) + 'k'
          })
        }
      })
      this.imgsArr = this.imgsArr.concat(...arr)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.buyContanier
  width 100%
  height 100%
  background-color #eee
  position relative
  .buy_head
    position absolute
    left 0
    top 0
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
    position absolute
    left 0
    top 120px
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
      border-radius 20px
      position relative
      overflow hidden
      >.swiper-wrapper
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
      // .bscroll-horizontal-scrollbar
      //   width 300px
      //   height 4px
      //   position absolute
      //   left 200px
      //   bottom 20px
      //   opacity 1
      //   background-color #D9D9D9
      //   .bscroll-indicator
      //     background #DD1A21
  .waterfall
    position absolute
    left 0
    top 980px
    width 95%
    height 100%
    margin 0 2.5%
    ::-webkit-scrollbar
      width: 0 !important
    .img-inner-box
      overflow-x hidden
      background-color #fff
      .info
        padding 30px 20px
        display flex
        flex-direction column
        justify-content space-between
        .info-title
          word-wrap break-word
          font-size 24px
          line-height 1.5
          color #333
          margin-bottom 20px
        .info-user
          display flex
          justify-content space-between
          align-items center
          .userinfo
            display flex
            justify-content center
            align-items center
            .info-avatar
              width 50px
              height 50px
              border-radius 50%
            .info-nickname
              font-size 24px
              color #7f7f7f
          .usercount
            display flex
            justify-content center
            align-items center
            .info-icon
              width 40px
              height 40px
            .info_readCount
              font-size 24px
</style>
