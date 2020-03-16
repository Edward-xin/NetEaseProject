import Vue from 'vue'
import VeeValidate from 'vee-validate'
// 汉化
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    pwd: '密码',
    email: '邮箱',
    smsCode: '短信验证码'
  }
})
// 扩展方法 验证手机号码
VeeValidate.Validator.extend('changePhone', {
  // 提示信息
  getMessage: () => `手机号格式错误`,
  validate: value => {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(
      value
    )
  }
})

// 扩展方法 验证邮箱
VeeValidate.Validator.extend('changeEmail', {
  // 提示信息
  getMessage: () => `邮箱账号格式错误`,
  validate: value => {
    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
      value
    )
  }
})
