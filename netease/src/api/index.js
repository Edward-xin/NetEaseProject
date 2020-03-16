import ajax from './ajax'

const BASE = '/api'
const WE = '/wangyi'

// 获取首页数据
export const reqHomeData = () => ajax.get(BASE + '/home')
// 获取首页\分类页 文本框placeholder数据
export const reqPlaceHolder = () =>
  ajax.post(WE + '/xhr/search/getTotalNumbersOfProducts.json')

// 获取分类页面数据
export const reqCategroyDatas = () => ajax.get(BASE + '/category')

// 获取值得买页面上面数据
export const reqBuyCateLists = () => ajax.get(WE + '/topic/v1/know/navWap.json')

// 获取值得买页面瀑布流数据
export const reqWaterfall = () => ajax.get(WE + '/topic/v1/find/recAuto.json')

// 关键字搜索接口
export const reqKeywordSearch = keyword =>
  ajax({
    method: 'GET',
    url: WE + '/xhr/search/searchAutoComplete.json?keywordPrefix=' + keyword,
    params: {
      keyword
    }
  })

// 获取搜索页面初始化数据
export const reqSearchInit = () => ajax.get(WE + '/xhr/search/init.json')

// 关键字搜索接口  https://m.you.163.com/search?keyword=%E7%8C%AB%E7%B2%AE&_stat_search=userhand
export const reqSearch = value =>
  ajax({
    method: 'GET',
    url: WE + `/search?keyword=${JSON.parse(value)}`,
    params: {
      value
    }
  })

// 手机号登录和密码登录的接口
export const reqPhoneLogin = ({ phone, pwd }) =>
  ajax({
    method: 'POST',
    url: BASE + '/phone',
    data: {
      phone,
      pwd
    }
  })

// 邮箱账号登录和密码登录的接口
export const reqEmailLogin = ({ email, pwd }) =>
  ajax({
    method: 'POST',
    url: BASE + '/email',
    data: {
      email,
      pwd
    }
  })

// 手机号和短信登录方式的接口
export const reqSmscodeLogin = ({ phone, code }) =>
  ajax({
    method: 'POST',
    url: BASE + '/sendcode',
    data: {
      phone,
      code
    }
  })

// // 自动登录的接口
// export const reqAutoLogin = () =>
//   ajax({
//     method: 'GET',
//     url: BASE + '/auto_login',
//     headers: {
//       needToken: true // 需要携带token才可访问这个接口
//     }
//   })
