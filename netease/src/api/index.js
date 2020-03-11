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

// 获取搜索页面数据
export const reqSearch = () =>
  ajax.post(WE + '/xhr/search/searchAutoComplete.json')

// 获取搜索页面初始化数据
export const reqSearchInit = () => ajax.get(WE + '/xhr/search/init.json')

// 获取个人页面数据
export const reqAutoLogin = () =>
  ajax({
    method: 'GET',
    url: BASE + '/login'
    // headers: {
    //   needToken: true // 需要携带token才可访问这个接口
    // }
  })
