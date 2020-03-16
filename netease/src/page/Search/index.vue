<template>
  <div class="searchContainer">
    <div class="search">
      <input
        type="text"
        v-model="value"
        :placeholder="initplaceholder"
        @keyup.13="search"
      />
      <span class="clear" v-show="value" @click="clear"></span>
      <span @click="$router.back()">取消</span>
    </div>
    <div class="lishi" v-show="oldValList.length && !value">
      <div class="lishi_head">
        <span class="lishi_title">历史记录</span>
        <i class="clear_lishi" @click="clearSearchHistroy"></i>
      </div>
      <ul class="lishi_list">
        <li class="lishi_item" v-for="(old, index) in oldValList" :key="index">
          <span>{{ old }}</span>
        </li>
      </ul>
    </div>
    <div class="popular" v-show="!value">
      <p>热门搜索</p>
      <ul class="popular_list">
        <li
          class="popular_item"
          v-for="(hotkey, index) in hotKeywordVOList"
          :key="index"
          :class="hotkey.type === 0 ? 'active' : ''"
        >
          <span>
            {{ hotkey.keyword }}
          </span>
        </li>
      </ul>
    </div>
    <div class="keywordsdata" v-show="value">
      <ul class="keywordslist">
        <li
          class="keywordsitem"
          v-for="(keyword, index) in keywords"
          :key="index"
        >
          <p>{{ keyword }}</p>
        </li>
      </ul>
    </div>
    <!-- <div class="goodsdata">
      <ul class="goods_list">
        <li class="goods_item">
          <img src="" alt="" />
          <p></p>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { reqSearchInit, reqKeywordSearch, reqSearch } from '../../api'
export default {
  name: '',
  data() {
    return {
      value: '', // 搜索框的文本内容
      initplaceholder: '', // 初始化数据 文本框的placeholder
      hotKeywordVOList: [], // 热词
      keywords: [] // 关键词
    }
  },
  computed: {
    // 获取Vuex里oldValList-->value值的历史记录数组
    ...mapState({
      oldValList: state => state.search.oldValList
    })
  },
  async mounted() {
    // console.log(typeof this.oldValList)

    // 获取数据
    const initdatas = await reqSearchInit()
    // console.log(initdatas.data.hotKeywordVOList)
    // 文本框动态的提示词placeholder
    this.initplaceholder = initdatas.data.defaultKeyword.keyword
    // 动态引入热门词语
    this.hotKeywordVOList = initdatas.data.hotKeywordVOList
  },
  methods: {
    // 清空文本框
    clear() {
      this.value = ''
    },
    // 搜索操作
    async search() {
      // 发送请求
      const datas = await reqSearch(JSON.stringify(this.value))
      // console.log(datas)
      // 有数据 搜索成功-->用作历史记录
      if (datas) {
        // Vuex里历史记录一开始是空的 如果不为空
        // 再判断如果上一次的历史记录和这次的历史记录不相等 就存入到Vuex里
        if (this.oldValList && this.oldValList.indexOf(this.value) === -1) {
          // 调用Vuex里的action方法 把数据存入Vuex里的数组里
          this.$store.dispatch('saveOldValList', this.value)
        }
      }
    },
    // 清空历史搜索记录
    clearSearchHistroy() {
      // 清空Vuex和localStorage的数据
      this.$store.dispatch('resetOldValList')
    }
  },
  watch: {
    // 实时监听value值
    value(curVal) {
      // 定时器的作用：实现input连续输入，只发一次请求 防止频繁发送请求
      clearTimeout(this.timeout)
      this.timeout = setTimeout(async () => {
        // 发送请求 获取关键字数据 进行缓存
        await reqKeywordSearch(curVal).then(res => {
          // console.log(res)
          this.keywords = res.data
        })
      }, 300)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.searchContainer
  width 100%
  height 1563px
  background-color #eee
  .search
    width 100%
    height 120px
    padding 0 20px 0 40px
    box-sizing border-box
    background-color #fff
    display flex
    align-items center
    justify-content space-between
    input
      width 87%
      height 80px
      background-color #eee
      padding 0 80px 0 80px
      box-sizing border-box
      font-size 36px
    &::before
      content ""
      position absolute
      left 60px
      top 40px
      width 40px
      height 40px
      background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp) center/100% 100%
    .clear
      position absolute
      right 150px
      top 30px
      width 60px
      height 60px
      background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-2154f24504.png?imageView&type=webp) center/100% 100%
    span
      font-size 32px
  .lishi
    width 100%
    padding 0 20px 40px 40px
    background-color #fff
    margin-bottom 20px
    .lishi_head
      display flex
      justify-content space-between
      align-items center
      .lishi_title
        font-size 32px
        color #999
        line-height 100px
      .clear_lishi
        display inline-block
        width 70px
        height 70px
        margin-right 80px
        background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/del1-c917b2d4a8.png?imageView&type=webp) center center/100% 100%
    .lishi_list
      display flex
      flex-wrap wrap
      .lishi_item
        border 1px solid #d9d9d9
        color #333
        padding 10px 20px
        margin 0 40px 20px 0
        font-size 26px
  .popular
    width 100%
    height 400px
    background-color #fff
    padding 0 0 40px 40px
    box-sizing border-box
    p
      height 100px
      line-height 100px
      font-size 32px
      color #999
    .popular_list
      .popular_item
        float left
        border 1px solid #d9d9d9
        color #333
        padding 10px 20px
        margin 0 40px 40px 0
        font-size 26px
        &.active
          border-color #DD1A21
          color #DD1A21
  .keywordsdata
    width 100%
    background-color #fff
    .keywordslist
      .keywordsitem
        width 100%
        height 100px
        border-bottom 1px solid #D9D9D9
        line-height 100px
        margin-left 40px
        &:nth-of-type(n+2)
          margin-top 20px
        p
          font-size 32px
          color #333
</style>
