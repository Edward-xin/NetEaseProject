<template>
  <div class="homeContent">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/3ba8ff890bd557b870733aa78f8d3466.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/6420135fe97bdf81cb7c12112885fcc9.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/29f2685c38cbb22b41c41b7f6155506f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/6420135fe97bdf81cb7c12112885fcc9.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/29f2685c38cbb22b41c41b7f6155506f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="tips">
      <i></i>
      <span>网络自营品牌</span>
      <i></i>
      <span>30天无忧退货</span>
      <i></i>
      <span>48小时快速退款</span>
    </div>
    <div class="shop_categroy">
      <ul>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            alt=""
          />
          <span>新品首发</span>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            alt=""
          />
          <span>新品首发</span>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            alt=""
          />
          <span>新品首发</span>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
            alt=""
          />
          <span>新品首发</span>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
            alt=""
          />
          <span>新品首发</span>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
            alt=""
          />
          <span>新品首发</span>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
            alt=""
          />
          <span>新品首发</span>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
            alt=""
          />
          <span>新品首发</span>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            alt=""
          />
          <span>全球特色</span>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
            alt=""
          />
          <span>个人清洁</span>
        </li>
      </ul>
    </div>
    <div class="footer_guide">
      <FootGuide />
    </div>
  </div>
</template>

<script>
// 引入Swiper及样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import FootGuide from '../../../components/FootGuide'
export default {
  name: 'HomeContent',
  components: {
    FootGuide
  },
  mounted() {
    this.$nextTick(() => {
      /* eslint-disable  */
      var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: true // 开启
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.homeContent
  display flex
  flex-direction column
  .swiper-container
    width 100%
    .swiper-wrapper
      width 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        img
          width 100%
          height 450px
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #fff
      .swiper-pagination-bullet
        width 50px
        height 6px
        border-radius 0
  .tips
    width 100%
    margin 20px 50px
    i
      display inline-block
      width 40px
      height 40px
      vertical-align middle
      &:nth-of-type(1)
        background url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png) no-repeat center/100% 100%
      &:nth-of-type(2)
        background url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png) no-repeat center/100% 100%
      &:nth-of-type(3)
        background url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png) no-repeat center/100% 100%
    span
      font-size 24px
      color #333
      margin 0 40px 0 10px
  .shop_categroy
    width 100%
    ul
      width 100%
      display flex
      flex-wrap wrap
      li
        width  130px
        margin 20px
        text-align center
        img
          width  130px
          height 130px
        span
          color #333
          font-size 24px
</style>
