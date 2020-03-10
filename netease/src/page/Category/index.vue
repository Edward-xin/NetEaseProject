<template>
  <div class="categoryContainer">
    <div class="category_head">
      <div class="header_searchbox">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品, 共24053款好物</span>
      </div>
    </div>
    <div class="category_content">
      <div class="leftNav">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="item.name"
            v-for="(item, index) in categoryL1List"
            :key="index"
            @click="goRegion(index)"
          />
        </van-sidebar>
      </div>
      <div class="rightContent">
        <div class="banner">
          <img :src="categoryL1List[itemindex].bannerUrl" alt="" />
        </div>
        <ul class="subCateList" v-show="cateLists[itemindex]">
          <li class="subCate">
            <ul class="cateList" v-show="cateLists[itemindex].categoryList">
              <li
                class="cate"
                v-for="(cate, index) in cateLists[itemindex].categoryList"
                :key="index"
              >
                <img :src="cate.wapBannerUrl" alt="" />
                <p>{{ cate.name }}</p>
              </li>
            </ul>
            <p class="sub_text" v-show="cateLists[itemindex].name">
              {{ cateLists[itemindex].name }}
            </p>
            <ul class="subList" v-show="cateLists[itemindex].subCateList">
              <li
                class="subCate"
                v-for="(sub, index) in cateLists[itemindex].subCateList"
                :key="index"
              >
                <img :src="sub.wapBannerUrl" alt="" />
                <p>{{ sub.frontDesc }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import { reqCategroyDatas } from '../../api'
export default {
  name: 'Category',
  data() {
    return {
      activeKey: 0,
      categoryL1List: [],
      itemindex: 0,
      bannerUrl: '',
      cateLists: []
    }
  },
  async mounted() {
    const datas = await reqCategroyDatas()
    this.categoryL1List = datas.cateNavDatas.categoryL1List
    // console.log(this.categoryL1List)
    this.cateLists = datas.cateLists
    console.log(this.cateLists)
    this.bannerUrl = this.categoryL1List[this.itemindex].bannerUrl
    // console.log(this.bannerUrl)
    // this.$nextTick(() => {
    //   // 创建滑动对象
    //   this.navScroll = new BScroll('.rightContent', {
    //     click: true, // 可点击
    //     probeType: 2 // 可滑动 滑动的类型
    //   })
    // })
  },
  methods: {
    goRegion(index) {
      this.itemindex = index
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.categoryContainer
  width 100%
  position relative
  .category_head
    position fixed
    left 0
    top 0
    z-index 10
    width 100%
    height 100px
    border-bottom 1px solid #d9d9d9
    padding 15px 5%
    box-sizing border-box
    background-color #fff
    .header_searchbox
      width 100%
      height 70px
      text-align center
      background-color #ebedf0
      border-radius 10px
      line-height 70px
      i
        font-size  40px
        color #666
        margin-right 10px
      span
        color #666
        font-size 32px
  .category_content
    width 100%
    display flex
    overflow hidden
    .leftNav
      position fixed
      left 0
      top 100px
      z-index 10
      width 200px
      height 1360px
      border-right 1px solid #ebedf0
      .van-sidebar
        width 200px
        .van-sidebar-item
          padding 0
          width 200px
          height 110px
          line-height 110px
          text-align center
          font-size 30px
          background-color #fff
        .van-sidebar-item--select
          color #ab2b2b
          border-left 7px solid #ab2b2b
    .rightContent
      position absolute
      top 100px
      right 0
      width 680px
      padding 40px
      box-sizing border-box
      .banner
        img
          width 100%
          height 200px
      .subCateList
        margin-top 40px
        display flex
        flex-wrap wrap
        .subCate
          width 100%
          .sub_text
            font-size 30px
            font-weight bold
            padding-bottom 30px
            border-bottom 1px solid #ebedf0
          .subList,.cateList
            width 100%
            display flex
            flex-wrap wrap
            .subCate,.cate
              width 28%
              height 250px
              text-align center
              margin-top 40px
              &:nth-of-type(3n+2)
                margin 40px 8% 0
              p
                font-size 24px
              img
                  width 100%
                  height 150px
                  margin-bottom 10px
            .cate
              margin-top 10px
              &:nth-of-type(3n+2)
                margin 10px 8% 0
              img
                width 150px
                height 150px
</style>
