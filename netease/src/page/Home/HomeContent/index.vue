<template>
  <div class="homeContent">
    <!-- 轮播图 -->
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
      <div class="swiper-pagination"></div>
    </div>
    <div class="tips">
      <ul>
        <li v-for="(policyDesc, index) in policyDescList" :key="index">
          <i
            :style="{
              backgroundImage: policyDesc.icon
            }"
          ></i>
          <span>{{ policyDesc.desc }}</span>
        </li>
      </ul>
    </div>
    <div class="shop_categroy">
      <ul>
        <li v-for="(kingkong, index) in kingKongList" :key="index">
          <img :src="kingkong.picUrl" alt="" />
          <span>{{ kingkong.text }}</span>
        </li>
      </ul>
    </div>
    <div class="bigImg">
      <div class="bigImg_top">
        <div class="change_left">
          <img
            src="https://yanxuan-item.nosdn.127.net/1b8f18fe0bba73fd1e3d061f31cccc66.png?imageView&thumbnail=168x0&quality=75"
            alt=""
          />
          <div class="price">
            <span>￥109</span>
            <span class="price_line">￥129</span>
          </div>
        </div>
      </div>
      <div class="bigImg_bottom">
        <div class="link_top">
          <a href="javaScript:"></a>
          <a href="javaScript:"></a>
        </div>
        <div class="link_bottom">
          <a href="javaScript:">
            <p>48H限时购</p>
            <p>女王专属7折起</p>
            <img
              src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=160x160"
              alt=""
            />
          </a>
          <a href="javaScript:">
            <p>48H限时购</p>
            <p>女王专属7折起</p>
            <img
              src="https://yanxuan-item.nosdn.127.net/0c807260926eb396d65e8d697d923bbf.png?quality=75&type=webp&imageView&thumbnail=160x160"
              alt=""
            />
          </a>
          <a href="javaScript:">
            <p>48H限时购</p>
            <p>女王专属7折起</p>
            <img
              src="https://yanxuan-item.nosdn.127.net/1790cd4cd47dbf233dd6bc88cada9bc1.png?quality=75&type=webp&imageView&thumbnail=160x160"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    <div class="xinren">
      <p class="xinren_head">— 新人专享礼 —</p>
      <div class="xinren_content">
        <div class="xinren_left">
          <p>新人专享礼包</p>
          <img
            src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
            alt=""
          />
        </div>
        <ul class="xinren_right">
          <div
            class="fuli"
            @click="$router.push(indexActivityModule[0].targetUrl)"
          >
            <div class="fuli_text">
              <p>{{ indexActivityModule[0].title }}</p>
              <p>{{ indexActivityModule[0].subTitle }}</p>
            </div>
            <img :src="indexActivityModule[0].picUrl" alt="" />
            <div class="fuli_price">
              <p>{{ indexActivityModule[0].activityPrice }}</p>
              <p>{{ indexActivityModule[0].originPrice }}</p>
            </div>
          </div>
          <div
            class="pintuan"
            @click="$router.push(indexActivityModule[1].targetUrl)"
          >
            <p>{{ indexActivityModule[1].title }}</p>
            <div class="baoyou">{{ indexActivityModule[1].tag }}</div>
          </div>
        </ul>
      </div>
    </div>
    <div class="leimu">
      <div class="leimu_head">{{ categoryHotSellModule.title }}</div>
      <ul class="leimu_content">
        <li
          v-for="(categories, index) in categoryHotSellModule.categoryList"
          :key="index"
          @click="$router.push(categories.targetUrl)"
        >
          <p>{{ categories.categoryName }}</p>
          <img :src="categories.showPicUrl" alt="" />
        </li>
      </ul>
    </div>
    <div class="xianshi">
      <div class="xianshi_head">
        <span>限时购</span>
        <van-count-down :time="flashSaleModule.nextStartTime">
          <template v-slot="timeData" format="HH : mm : ss ">
            <span class="item">{{ timeData.hours }}</span
            >: <span class="item">{{ timeData.minutes }}</span
            >:
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
        <span class="more"
          >更多
          <i class="jiantou"></i>
        </span>
      </div>
      <div class="xianshi_content">
        <ul>
          <li
            v-for="(itemlist, index) in flashSaleModule.itemList"
            :key="index"
          >
            <div class="xianshi_img">
              <img :src="itemlist.showPicUrl" alt="" />
            </div>
            <div class="xianshi_price">
              <span>￥{{ itemlist.activityPrice }}</span>
              <span>￥{{ itemlist.originPrice }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="xinpin">
      <div class="xinpin_head">
        <span>新品首发</span>
        <span class="more"
          >更多
          <i class="jiantou"></i>
        </span>
      </div>
      <div class="xinpin_content">
        <ul>
          <li>
            <div class="xinpin_img">
              <img
                src="https://yanxuan-item.nosdn.127.net/7e338fd0d5679ad6f73e6f277f9edd95.png?type=webp&imageView&quality=65&thumbnail=330x330"
                alt=""
              />
            </div>
            <div class="xinpin_text">
              <p>复工装备随身防护 日本空气净化除菌卡</p>
              <p>￥79</p>
              <div class="manjian">满99减10</div>
            </div>
          </li>
          <li>
            <div class="xinpin_img">
              <img
                src="https://yanxuan-item.nosdn.127.net/7e338fd0d5679ad6f73e6f277f9edd95.png?type=webp&imageView&quality=65&thumbnail=330x330"
                alt=""
              />
            </div>
            <div class="xinpin_text">
              <p>复工装备随身防护 日本空气净化除菌卡</p>
              <p>￥79</p>
              <div class="manjian">满99减10</div>
            </div>
          </li>
          <li>
            <div class="xinpin_img">
              <img
                src="https://yanxuan-item.nosdn.127.net/7e338fd0d5679ad6f73e6f277f9edd95.png?type=webp&imageView&quality=65&thumbnail=330x330"
                alt=""
              />
            </div>
            <div class="xinpin_text">
              <p>复工装备随身防护 日本空气净化除菌卡</p>
              <p>￥79</p>
              <div class="manjian">满99减10</div>
            </div>
          </li>
          <li>
            <div class="xinpin_img">
              <img
                src="https://yanxuan-item.nosdn.127.net/7e338fd0d5679ad6f73e6f277f9edd95.png?type=webp&imageView&quality=65&thumbnail=330x330"
                alt=""
              />
            </div>
            <div class="xinpin_text">
              <p>复工装备随身防护 日本空气净化除菌卡</p>
              <p>￥79</p>
              <div class="manjian">满99减10</div>
            </div>
          </li>
          <li>
            <div class="xinpin_img">
              <img
                src="https://yanxuan-item.nosdn.127.net/7e338fd0d5679ad6f73e6f277f9edd95.png?type=webp&imageView&quality=65&thumbnail=330x330"
                alt=""
              />
            </div>
            <div class="xinpin_text">
              <p>复工装备随身防护 日本空气净化除菌卡</p>
              <p>￥79</p>
              <div class="manjian">满99减10</div>
            </div>
          </li>
          <li>
            <div class="xinpin_img">
              <img
                src="https://yanxuan-item.nosdn.127.net/7e338fd0d5679ad6f73e6f277f9edd95.png?type=webp&imageView&quality=65&thumbnail=330x330"
                alt=""
              />
            </div>
            <div class="xinpin_text">
              <p>复工装备随身防护 日本空气净化除菌卡</p>
              <p>￥79</p>
              <div class="manjian">满99减10</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="jingxuan">
      <div class="jingxuan_content">
        <ul>
          <li
            class="jingxuan_item"
            v-for="(scene, index) in sceneLightShoppingGuideModule"
            :key="index"
            @click="$router.push(scene.styleItem.targetUrl)"
          >
            <div class="jingxuan_text">
              <p>{{ scene.styleItem.title }}</p>
              <p>{{ scene.styleItem.desc }}</p>
            </div>
            <ul class="jingxuan_img">
              <li
                v-for="(pic, index) in scene.styleItem.picUrlList"
                :key="index"
              >
                <img :src="pic" alt="" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="down">
        <div>下载APP</div>
        <div>电脑版</div>
      </div>
      <div class="banquan">
        <p>网易公司版权所有 &copy; 1997-2020</p>
        <p>食品经营许可证: JY13301080111719</p>
      </div>
    </div>
  </div>
</template>

<script>
// 引入Swiper及样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { reqHomeData } from '../../../api'
export default {
  name: 'HomeContent',
  data() {
    return {
      // time: 24 * 60 * 60 * 1000
      kingKongList: [], // 用来存储数据
      policyDescList: [],
      categoryHotSellModule: {},
      flashSaleModule: {},
      sceneLightShoppingGuideModule: {},
      indexActivityModule: []
    }
  },
  async mounted() {
    const data = await reqHomeData()
    const {
      kingKongModule: { kingKongList },
      policyDescList,
      categoryHotSellModule,
      flashSaleModule,
      sceneLightShoppingGuideModule,
      indexActivityModule
    } = data
    this.kingKongList = kingKongList
    this.policyDescList = policyDescList
    this.categoryHotSellModule = categoryHotSellModule
    this.flashSaleModule = flashSaleModule
    this.sceneLightShoppingGuideModule = sceneLightShoppingGuideModule
    this.indexActivityModule = indexActivityModule
    // console.log(data)
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
  },
  methods: {}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.homeContent
  width 100%
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
    padding 10px 50px
    background-color #fff
    ul
      display flex
      i
        display inline-block
        width 40px
        height 40px
        vertical-align middle
      span
        font-size 24px
        color #333
        margin 0 40px 0 10px
  .shop_categroy
    width 100%
    background-color #fff
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
  .bigImg
    width 100%
    height 830px
    background-color #cc3256
    .bigImg_top
      position relative
      width 100%
      height 300px
      background url(https://yanxuan.nosdn.127.net/481a123e40483888a1dc13db0280611f.gif?imageView&quality=75) no-repeat center/100% 100%
      .change_left
        position absolute
        left 85px
        top 45px
        img
          width 200px
          height 200px
        .price
          position absolute
          left 10px
          bottom  0
          width 180px
          height 40px
          border-radius 10px
          background-color #F48F18
          text-align center
          transform scale(0.8)
          span
            font-size 12px
            color #fff
            &.price_line
              color #ededed
              text-decoration line-through
    .bigImg_bottom
      padding 20px
      width 100%
      height 500px
      display flex
      flex-direction column
      .link_top
        width 100%
        height 45%
        display flex
        a
          display block
          width 47%
          height 100%
          &:nth-of-type(1)
            margin-right 10px
            background url(https://yanxuan.nosdn.127.net/48f036a0cbf8c6f649c3a057b2849ed8.png?quality=75&type=webp&imageView&thumbnail=375x0) no-repeat center/100% 100%
          &:nth-of-type(2)
            background url(https://yanxuan.nosdn.127.net/47e34fcdfb2f52e325feac5ed42daf39.png?quality=75&type=webp&imageView&thumbnail=375x0) no-repeat center/100% 100%
      .link_bottom
        width 100%
        height 50%
        display flex
        margin-top 10px
        a
          display block
          width 31%
          height 100%
          margin-right 10px
          background url(https://yanxuan.nosdn.127.net/00ce570b5344d3ab52e98427df5aaf3c.png?quality=75&type=webp&imageView&thumbnail=250x0) no-repeat center/100% 100%
          text-align center
          line-height 100%
          p
            color #ab0933
            font-size 18px
            margin-top 5px
            &:nth-of-type(1)
              font-weight bold
          img
            width 180px
            height 180px
  .xinren
    width 100%
    height 650px
    margin-top 30px
    background-color #fff
    display flex
    flex-direction column
    .xinren_head
      width 100%
      height 100px
      text-align center
      line-height 100px
    .xinren_content
      padding 0 20px
      width 100%
      height 80%
      box-sizing border-box
      display flex
      .xinren_left
        width 50%
        height 100%
        margin-right 10px
        background-color #F9E9CF
        text-align center
        p
          padding 50px 0 50px 30px
          text-align left
        img
          width 300px
          height 300px
      .xinren_right
        width 50%
        height 100%
        .fuli
          width 100%
          height 50%
          background-color #FBE2D3
          position relative
          display flex
          .fuli_text
            padding 30px 0 0 30px
            p:nth-of-type(2)
              color #7F7F7F
              font-size 14px
              margin-top 20px
          img
            position absolute
            bottom 0
            right 0
            width 230px
            height 230px
          .fuli_price
            position absolute
            right 30px
            top 20px
            width 100px
            height 100px
            border-radius 50%
            background-color #F59524
            opacity .8
            text-align center
            box-sizing border-box
            padding 20px 0
            p
              color #fff
              font-size 14px
              &:nth-of-type(2)
                text-decoration line-through
                transform scale(.85)
        .pintuan
          width 100%
          height 50%
          background-color #FFECC2
          padding 40px 0 0 30px
          box-sizing border-box
          .baoyou
            width 140px
            height 40px
            background-color #CBB693
            color #fff
            font-size 14px
            text-align center
            line-height 40px
  .leimu
    width 100%
    height 830px
    margin-top 30px
    display flex
    flex-direction column
    background-color #fff
    .leimu_head
      padding 40px 20px
    .leimu_content
      width 100%
      box-sizing border-box
      padding 10px 20px
      display flex
      flex-wrap wrap
      li:nth-of-type(1)
        background-color #F9F3E4
        margin-right 10px
      li:nth-of-type(2)
        background-color #EBEFF6
      li:nth-child(-n+2)
        width 49%
        height 250px
        line-height 250px
        display flex
        justify-content space-between
        p
          font-size 32px
          margin-left 20px
          position relative
          &::after
            position absolute
            left 0
            bottom 80px
            content: ""
            width 60%
            height 5px
            background-color #333
        img
          width 250px
          height 250px
      li:nth-child(n+3)
        display flex
        flex-wrap wrap
        width 24%
        margin 2% 1% 0 0
        height 200px
        background-color #F5F5F5
        justify-content center
        p
          font-size 24px
          padding-top 20px
          box-sizing border-box
        img
          width 150px
          height 150px
  .xianshi
    width 100%
    height 800px
    margin-top 30px
    background-color #fff
    .xianshi_head
      padding 40px 20px
      display flex
      .van-count-down
        margin-left 30px
        .item
          display: inline-block
          width: 50px
          height 40px
          line-height 40px
          margin-right: 10px
          color: #fff
          font-size: 14px
          text-align: center
          border-radius 10px
          background-color: #333
      .more
        margin-left auto
        font-size 32px
        color #333
        .jiantou
          display inline-block
          width 20px
          height 20px
          background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-caab97997c.png?imageView&type=webp) no-repeat center/100% 100%
    .xianshi_content
      ul
        padding 0 20px
        box-sizing border-box
        display flex
        flex-wrap wrap
        width 100%
        li
          width 31%
          margin-bottom 6%
          &:nth-of-type(3N+2)
            margin 0 3%
          .xianshi_img
            width 100%
            height 250px
            background-color #F5F5F5
            img
              width 100%
              height 250px
          .xianshi_price
            padding 10px 0 0 20px
            span
              font-size 24px
              &:nth-of-type(1)
                font-size 30px
                color #DD1A21
                margin-right 10px
              &:nth-of-type(2)
                text-decoration line-through
                color #7F7F7F
  .xinpin
    width 100%
    height 1100px
    margin-top 30px
    background-color #fff
    .xinpin_head
      padding 40px 20px
      display flex
      .more
        margin-left auto
        font-size 32px
        color #333
        .jiantou
          display inline-block
          width 20px
          height 20px
          background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-caab97997c.png?imageView&type=webp) no-repeat center/100% 100%
    .xinpin_content
      ul
        padding 0 20px
        box-sizing border-box
        display flex
        flex-wrap wrap
        width 100%
        li
          width 31%
          &:nth-of-type(3N+2)
            margin 0 3%
          .xinpin_img
            width 100%
            height 250px
            background-color #F5F5F5
            img
              width 100%
              height 250px
          .xinpin_text
            padding 20px 0
            box-sizing border-box
            p
              font-size 20px
              color #333
              line-height 1.5
              &:nth-of-type(2)
                font-size 40px
                color #DD1A21
            .manjian
              width 150px
              height 40px
              line-height 40px
              text-align center
              font-size 14px
              transform scale(.7)
              color #DD1A21
              border 3px solid #DD1A21
              border-radius 20px
  .jingxuan
    width 100%
    height 720px
    margin-top 30px
    background-color #fff
    .jingxuan_content
      ul
        padding 40px 20px
        box-sizing border-box
        display flex
        flex-wrap wrap
        width 100%
        .jingxuan_item
          width 49.5%
          height 320px
          background-color #F5F5F5
          display flex
          flex-direction column
          padding 40px 0 0 30px
          box-sizing border-box
          margin-bottom 5px
          &:nth-of-type(odd)
            margin-right 1%
          .jingxuan_text
            p:nth-of-type(2)
              margin-top 10px
              font-size 24px
              color #7f7f7f
          .jingxuan_img
            padding 0
            display flex
            // justify-content space-between
            img
              width 180px
              height 180px
  .footer
    background-color #414141
    width 100%
    height 300px
    display flex
    margin-bottom 100px
    flex-direction column
    align-items center
    justify-content center
    .down
      display flex
      color #fff
      font-size 28px
      margin-bottom 50px
      width 55%
      justify-content space-between
      >div
        border 1px solid #999
        width 150px
        text-align center
        padding 20px 30px
        // margin-right 80px
    .banquan
      color #999
      font-size 24px
      text-align center
      line-height 1.5
</style>
