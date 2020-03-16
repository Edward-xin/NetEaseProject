<template>
  <div class="loginContainer">
    <LoginHead />
    <div class="login_init" v-if="loginway === 0">
      <div class="logo">
        <img
          src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
      </div>
      <div class="login">
        <div class="phone" @click="loginway = 1">
          <i class="iconfont icon-shouji"></i>
          手机号快捷登录
        </div>
        <div class="email" @click="loginway = 2">
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

    <div class="phone_eamil_msg_Container" v-else-if="loginway === 1">
      <div class="logo">
        <img
          src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
      </div>
      <div class="form">
        <form>
          <div class="userinfo">
            <input
              type="tel"
              maxlength="11"
              placeholder="请输入手机号"
              v-model="phone"
              name="phone"
              v-validate="'required||changePhone'"
            />
            <i class="clearusername" v-show="phone" @click="clearName"></i>
            <input
              type="password"
              placeholder="请输入密码"
              v-model="pwd"
              name="pwd"
              v-validate="'required'"
            />
            <i class="clearpassword" v-show="pwd" @click="clearPwd"></i>
          </div>
          <div class="error" v-show="errors.has('phone') || errors.has('pwd')">
            {{ errors.first('phone') || errors.first('pwd') }}
          </div>
          <div class="msg">
            <span>忘记密码?</span>
            <span class="short" @click="loginway = 3">短信快捷登录</span>
          </div>
          <div class="login" @click="login">登录</div>
          <div class="loginway" @click="loginway = 0">
            其他登录方式
            <i></i>
          </div>
        </form>
      </div>
    </div>
    <div class="phone_eamil_msg_Container" v-else-if="loginway === 2">
      <div class="logo">
        <img
          src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
      </div>
      <div class="form">
        <form>
          <div class="userinfo">
            <input
              type="tel"
              placeholder="邮箱账号"
              v-model="email"
              name="email"
              v-validate="'required||changeEmail'"
            />
            <i class="clearusername" v-show="email" @click="clearEmail"></i>
            <input
              type="password"
              placeholder="密码"
              v-model="pwd"
              name="pwd"
              v-validate="'required'"
            />
            <i class="clearpassword" v-show="pwd" @click="clearPwd"></i>
          </div>
          <div class="error" v-show="errors.has('email') || errors.has('pwd')">
            {{ errors.first('email') || errors.first('pwd') }}
          </div>
          <div class="msg">
            <span>注册账号</span>
            <span>忘记密码</span>
          </div>
          <div class="login" @click="login">登录</div>
          <div class="loginway" @click="loginway = 0">
            其他登录方式
            <i></i>
          </div>
        </form>
      </div>
    </div>
    <div class="phone_eamil_msg_Container" v-else-if="loginway === 3">
      <div class="logo">
        <img
          src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
      </div>
      <div class="form">
        <form>
          <div class="userinfo">
            <input
              type="tel"
              maxlength="11"
              placeholder="请输入手机号"
              v-model="phone"
              name="phone"
              v-validate="'required||changePhone'"
            />
            <i class="clearusername" v-show="phone" @click="clearName"></i>
            <input
              type="password"
              placeholder="请输入短信验证码"
              v-model="smsCode"
              name="smsCode"
              v-validate="'required'"
            />
            <span class="sendcode" @click="sendcode">获取验证码</span>
          </div>
          <div
            class="error"
            v-show="errors.has('phone') || errors.has('smsCode')"
          >
            {{ errors.first('phone') || errors.first('smsCode') }}
          </div>
          <div class="msg">
            <span>遇到问题?</span>
            <span @click="loginway = 3">使用密码登录</span>
          </div>
          <div class="login" @click="login">登录</div>
          <div class="loginway" @click="loginway = 0">
            其他登录方式
            <i></i>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHead from '../../components/LoginHead'
import { reqPhoneLogin, reqEmailLogin } from '../../api'
export default {
  name: 'Login',
  data() {
    return {
      loginway: 0,
      pwd: '',
      phone: '',
      email: '',
      smsCode: ''
    }
  },
  components: {
    LoginHead
  },
  methods: {
    clearName() {
      this.phone = ''
    },
    clearPwd() {
      this.pwd = ''
    },
    clearEmail() {
      this.email = ''
    },
    clearSmsCode() {
      this.smsCode = ''
    },
    async login() {
      const { loginway, phone, pwd, email } = this

      let names
      // 判断登录方式
      if (loginway === 1) {
        // 手机密码登录
        names = ['phone', 'pwd']
      } else if (loginway === 2) {
        // 邮箱密码登录
        names = ['email', 'pwd']
      }
      // 表单整体校验 this.$validator.validateAll()这个方法返回的是promise
      const success = await this.$validator.validateAll(names)

      let result
      // 如果表单验证成功
      if (success) {
        // 判断登录方式
        if (loginway === 1) {
          // 手机密码登录
          result = await reqPhoneLogin({ phone, pwd })

          // console.log(result)
        } else if (loginway === 2) {
          // 邮箱密码登录
          result = await reqEmailLogin({ email, pwd })
          // console.log(result)
        }
        if (result) {
          // 把返回的数据存入vuex里
          this.$store.dispatch('saveUser', result)
          // 清空密码栏文本框
          this.pwd = ''
          // 跳转到个人中心页面
          this.$router.push('/personal')
        }
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.loginContainer
  width 100%
  height 100%
  .login_init
    width 100%
    height calc(100% - 120px)
    background-color #F2F5F4
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
        box-sizing border-box
        background #DD1A21
        color #fff
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
  .phone_eamil_msg_Container
    width 100%
    height calc(100% - 120px)
    background-color #fff
    .logo
      text-align center
      padding-top 50px
      box-sizing border-box
      img
        width 350px
        height 120px
    .form
      width 100%
      margin-top 200px
      padding 0 40px
      box-sizing border-box
      // .van-form
      //   // background-color red
      //   // height 200px
      .userinfo
        display flex
        flex-direction column
        position relative
        input
          width 100%
          padding 30px 0
          border-bottom 1px solid #c5cddb
          font-size 36px
        i
          width 50px
          height 50px
          background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-2154f24504.png?imageView&type=webp) center/100% 100%
        .clearusername
          position absolute
          right 20px
          top 30px
        .clearpassword
          position absolute
          right 20px
          top 150px
        .sendcode
          background-color #fff
          padding 10px
          font-size 32px
          border 1px solid #7F7F7F
          position absolute
          right 20px
          top 140px
      .error
        margin-top 30px
        color #DD1A21
        font-size 24px
      .msg
        padding 50px 0
        display flex
        justify-content space-between
        span
          font-size 32px
          color #7f7f7f
          .short
            color #333
      .login
        width 100%
        height 100px
        text-align center
        line-height 100px
        color #fff
        border-radius 10px
        background-color #DD1A21
      .loginway
        font-size 36px
        margin-top 100px
        display flex
        justify-content center
        align-items center
        i
          display block
          width 30px
          height 40px
          background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-6264a71cf0.png?imageView&type=webp) center center/100% 100%
</style>
