<template>
  <div class="perContainer">
    <div class="personal_head">
      <img
        src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png"
        alt=""
      />
      <div class="user">
        <p>18859388361</p>
        <p>普通用户</p>
      </div>
    </div>
    <div class="zican">
      <p class="zican_title">我的资产</p>
      <ul class="zican_content">
        <li>
          <p>￥0</p>
          <p>回馈金</p>
        </li>
        <li>
          <p>￥0</p>
          <p>回馈金</p>
        </li>
        <li>
          <p>￥0</p>
          <p>回馈金</p>
        </li>
        <li>
          <p>￥0</p>
          <p>回馈金</p>
        </li>
        <li>
          <p>￥0</p>
          <p>回馈金</p>
        </li>
      </ul>
    </div>
    <div class="user_info">
      <ul class="info_list">
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
        <li class="info_item">
          <p></p>
          我的订单
        </li>
      </ul>
      <!-- <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid> -->
    </div>

    <div class="loginout">
      退出登录
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personal'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.perContainer
  width 100%
  padding-bottom 100px
  background-color #eee
  .personal_head
    background-color #C2A770
    width 100%
    height 300px
    display flex
    align-items center
    img
      width 150px
      height 150px
      border-radius 50%
      margin-left 50px
    .user
      color #fff
      margin-left 50px
      p
        white-space nowrap
        font-size 36px
        line-height 1.5
        &:nth-of-type(1)
          font-size 45px
  .zican
    width 100%
    height 300px
    background-color #fff
    .zican_title
      color #333
      font-size 32px
      padding 40px 0
      margin-left 40px
      box-sizing border-box
      border-bottom 1px solid #D9D9D9
    .zican_content
      display flex
      padding 40px 0
      li
        flex 1
        font-size 28px
        text-align center
        p:nth-of-type(1)
          font-size 36px
          font-weight bold
          margin-bottom 20px
  .user_info
    width 100%
    margin-top 20px
    background-color #fff
    .info_list
      display flex
      flex-wrap wrap
      .info_item
        width 33.33%
        margin-left -1px
        height 200px
        display flex
        flex-direction column
        justify-content center
        align-items center
        // text-align center
        // line-height 200px
        font-size 30px
        border-bottom 1px solid #D9D9D9
        border-right 1px solid #D9D9D9
        >p
          width 120px
          height 100px
          margin 0 0 20px 30px
          background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sb8183bd0d2-821c53ac4e.png?imageView&type=webp) no-repeat 0 -1380px/100px
  .loginout
    width 100%
    height 100px
    background-color #fff
    text-align center
    font-size 32px
    line-height 100px
    margin 40px 0 20px
</style>
