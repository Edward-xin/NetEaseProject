<template>
  <div class="personalContainer">
    <div class="buy_head">
      <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
      <span></span>
      <div class="head_right">
        <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        <i
          class="iconfont icon-gouwuche2"
          @click="$router.push('/shopcart')"
        ></i>
      </div>
    </div>
    <div class="logo">
      <img
        src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
        alt=""
      />
    </div>
    <div class="login">
      <div class="phone">
        <i class="iconfont icon-shouji"></i>
        手机号快捷登录
      </div>
      <div class="email">
        <i class="iconfont icon-youxiang"></i>
        邮箱账号登录
      </div>
    </div>
    <div class="link">
      <ul>
        <li>
          <i class="iconfont icon-weixin"></i>
          微信
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
          QQ
        </li>
        <li>
          <i class="iconfont icon-weibo"></i>
          微博
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.personalContainer
  width 100%
  height 100%
  background-color #F2F5F4
  .buy_head
      width 100%
      height 120px
      line-height 120px
      background-color #fff
      display flex
      justify-content space-between
      align-items center
      i
        font-size 60px
        margin-right 30px
        &:nth-of-type(1)
          margin-left 30px
      span
        display block
        margin-left 200px
        width 400px
        height 120px
        zoom .5
        background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s88c52a8caf-e895499c8e.png?imageView&type=webp) no-repeat 0 -300px
  .logo
    text-align center
    padding 200px 0 250px
    img
      width 300px
      height 100px
  .login
    text-align center
    padding 0 5%
    >div
      width 100%
      height 120px
      margin-bottom 50px
      border 2px solid #DD1A21
      border-radius 2px
      font-size 36px
      color #DD1A21
      text-align center
      line-height 120px
    .phone
      color #fff
      box-sizing border-box
      background #DD1A21
      .icon-shouji
        font-size 50px
        vertical-align middle
    .icon-youxiang
      font-size 50px
      vertical-align middle
  .link
    position absolute
    left 0
    bottom 100px
    width 100%
    padding 0 15%
    box-sizing border-box
    ul
      display flex
      // justify-content space-between
      li
        font-size 32px
        padding 0 40px
        color #7F7F7F
        &:nth-of-type(2)
          border-left 1px solid #7F7F7F
          border-right 1px solid #7F7F7F
</style>
