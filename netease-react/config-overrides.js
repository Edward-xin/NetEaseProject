const {
  override,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins,
  addDecoratorsLegacy
} = require('customize-cra')

module.exports = override(
  // 如果使用less就要放在最前面配置
  addLessLoader({
    javascriptEnabled: true
    // modifyVars: { "@primary-color": "#1DA57A" }//自定义主题
  }),
  // antd-mobile的按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  addPostcssPlugins([
    require('postcss-pxtorem')({
      rootValue: 75,
      propList: ['*']
    })
  ]),
  // ES7装饰器语法支持
  // 下@babel/plugin-proposal-decorators --dev
  addDecoratorsLegacy()
)
