<template>
  <div class="searchContainer">
    <div class="search">
      <input type="text" v-model="value" :placeholder="initplaceholder" />
      <span class="clear" v-show="value" @click="clear"></span>
      <span @click="$router.back()">取消</span>
    </div>
    <div class="popular" v-show="!value">
      <p>热门搜索</p>
      <ul class="popular_list">
        <li
          class="popular_item"
          v-for="(hotkey, index) in hotKeywordVOList"
          :key="index"
        >
          <span>{{ hotkey.keyword }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reqSearchInit } from '../../api'
export default {
  name: '',
  data() {
    return {
      value: '',
      initplaceholder: '',
      hotKeywordVOList: []
    }
  },
  async mounted() {
    // const result = await reqSearch()
    // console.log(result)
    // 获取数据
    const initdatas = await reqSearchInit()
    console.log(initdatas.data.hotKeywordVOList)
    // 文本框动态的提示词placeholder
    this.initplaceholder = initdatas.data.defaultKeyword.keyword
    // 动态引入热门词语
    this.hotKeywordVOList = initdatas.data.hotKeywordVOList
  },
  methods: {
    clear() {
      this.value = ''
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
  .popular
    width 100%
    height 400px
    background-color #fff
    padding 0 0 40px 20px
    box-sizing border-box
    p
      margin-left 20px
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
        &:nth-of-type(-n+2)
          border-color #DD1A21
          color #DD1A21
</style>
