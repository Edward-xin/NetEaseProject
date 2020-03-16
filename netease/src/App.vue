<template>
  <div class="page">
    <router-view />
    <FootGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>

<script>
import FootGuide from './components/FootGuide'
export default {
  name: 'App',
  components: {
    FootGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
*
  touch-action: pan-y
.page
  width 100%
  height 100%
  // overflow-x hidden
  // overflow-y: auto
</style>
