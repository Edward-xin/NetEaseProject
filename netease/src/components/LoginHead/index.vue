<template>
  <div class="login_head">
    <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
    <span></span>
    <div class="head_right">
      <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche2" @click="$router.push('/shopcart')"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginHead'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.login_head
  width 100%
  height 120px
  line-height 120px
  background-color #fafafa
  display flex
  justify-content space-between
  align-items center
  border-bottom 1px solid #d9d9d9
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
</style>
