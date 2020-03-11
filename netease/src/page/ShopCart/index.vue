<template>
  <div class="shopcartContainer">
    <div class="shop_head">
      <span>购物车</span>
      <span>领券</span>
    </div>
    <ul class="shop_tips">
      <li>
        <i></i>
        <span>30天无忧无货</span>
      </li>
      <li>
        <i></i>
        <span>48小时快速还款</span>
      </li>
      <li>
        <i></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="shop_login">
      <div class="login-content">
        <p>去添加点什么吧</p>
      </div>
      <div class="btn" @click="$router.push('/login')">
        登录
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCart'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.shopcartContainer
  width 100%
  height 100%
  background-color #eee
  .shop_head
    width 100%
    height 100px
    background-color #fff
    display flex
    justify-content space-between
    align-items center
    padding 0 70px 0 40px
    box-sizing border-box
    span:nth-of-type(1)
      font-size 45px
    span:nth-of-type(2)
      font-size 36px
      color #DD1A21
  .shop_tips
    width 100%
    height 80px
    padding 0 40px
    box-sizing border-box
    display flex
    justify-content space-between
    li
      display flex
      align-items center
      span
        font-size 24px
        color #666
      i
        display inline-block
        margin-right 10px
        width 20px
        height 20px
        background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp) no-repeat center/100% 100%
  .shop_login
    position fixed
    width 100%
    height 1300px
    background-color #f4f4f4
    display flex
    flex-direction column
    justify-content center
    align-items center
    .login-content
      position relative
      width 300px
      height 250px
      padding-bottom 50px
      background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp) no-repeat center/cover
      p
        position absolute
        bottom -20px
        left 0
        width 100%
        text-align center
        font-size 32px
        color #999
    .btn
      width 65%
      height 100px
      line-height 100px
      margin-top 80px
      color #fff
      text-align center
      background-color #DD1A21
</style>
