import ajax from './ajax'

const BASE = '/api'
const WE = '/wangyi'

// 获取首页数据
export const reqHomeData = () => ajax.get(BASE + '/home')

// 获取分类页面数据
export const reqCategroyDatas = () => ajax.get(BASE + '/category')

// 获取值得买页面上面数据
export const reqBuyCateLists = () => ajax.get(WE + '/topic/v1/know/navWap.json')

// 获取值得买页面瀑布流数据
export const reqWaterfall = () => ajax.get(WE + '/topic/v1/find/recManual.json')
