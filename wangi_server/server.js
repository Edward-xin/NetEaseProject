let Koa = require('koa')
let KoaRouter = require('koa-router')
let bodyParser = require('koa-bodyparser')
// 引入mysql模块 下载npm i mysql2
// const mysql = require('mysql2')

// // 创建连接 （连接上本地的mysql服务）
// const config = {
//   host: 'localhost', // 域名
//   port: 3306, // 端口号
//   user: 'root', // 用户名
//   password: 'naozhong.5', // 密码
//   database: 'login' // 数据库名称
// }
// const connection = mysql.createConnection(config)

// let phonedata
// // 对数据库进行操作
// connection.query(
//   `select phone,pwd from users_phone`,
//   // `insert into users(username, password) values ('peihua', 123)`,
//   function(err, result, fileds) {
//     /*
//       err 就是nodejs错误优先机制，代表错误原因
//       result 就是查询结果
//       fields 表的列数据（一般用不上）
//     */
//     // console.log(err, result, fileds);
//     if (!err) {
//       phonedata = result
//       console.log(result)
//     } else {
//       console.log(err)
//     }
//   }
// )

// connection.query(
//   `select phone from users_phone where`,
//   // `insert into users(username, password) values ('peihua', 123)`,
//   function(err, result, fileds) {
//     if (!err) {
//       phonedata = result
//       console.log(result)
//     } else {
//       console.log(err)
//     }
//   }
// )

// 断开数据库连接
// connection.end()

// 实例化koa和koa-router
const koa = new Koa()
const koaRouter = new KoaRouter()

koa.use(bodyParser())

// 引入数据
let demoData = require('./datas/demo')
let homeData = require('./datas/index.json')
let cateNavDatas = require('./datas/cateNavDatas.json')
let cateLists = require('./datas/cateLists.json')
let phonedata = require('./login/phone.json')
let emaildata = require('./login/email.json')
let sms_util = require('./util/sms_util')

koaRouter.get('/demo', (ctx, next) => {
  ctx.body = demoData
})

koaRouter.get('/test', (ctx, next) => {
  // 1. 获取路由参数： query对象
  const req = ctx.query
  console.log(req)
  // 2. 返回路由数据
  ctx.body = '测试返回内容'
})

koaRouter.get('/test2/:id', async (ctx, next) => {
  const userId = ctx.params.id
  ctx.body = `user id is:${userId}`
})

// 获取首页数据的接口
koaRouter.get('/home', ctx => {
  // const req = ctx.query.req
  // console.log(req)
  ctx.body = homeData
})

// 获取分类页面数据的接口
koaRouter.get('/category', ctx => {
  // const req = ctx.query.req
  // console.log(req)
  ctx.body = { cateNavDatas, cateLists }
})

// 获取手机密码登录页面数据的接口
koaRouter.post('/phone', ctx => {
  // 获取前端发送请求传过来的参数
  // console.log(ctx.request.body)
  const datas = ctx.request.body
  // 手机号码比对 返回一个对象
  const checkPhone = phonedata.data.find(obj => obj.phone === datas.phone)
  // console.log(checkPhone)

  // 如果手机号存在继续比对密码
  if (checkPhone) {
    // 密码比对
    if (datas.pwd === checkPhone.pwd) {
      // 比对成功返回手机号和
      ctx.body = checkPhone
    }
  }
})

// 获取邮箱密码页面数据的接口
koaRouter.post('/email', ctx => {
  // 获取前端发送请求传过来的参数
  // console.log(ctx.request.body)
  const datas = ctx.request.body
  // 手机号码比对 返回一个对象
  const checkPhone = emaildata.data.find(obj => obj.email === datas.email)
  // console.log(checkPhone)

  // 如果手机号存在继续比对密码
  if (checkPhone) {
    // 密码比对
    if (datas.pwd === checkPhone.pwd) {
      // 比对成功返回邮箱号和密码
      ctx.body = checkPhone
    }
  }
})

const users = {}

// /*
// 发送验证码短信
// */
// koaRouter.post('/sendcode', function(ctx, next) {
//   //1. 获取请求参数数据
//   var phone = ctx.request.query
//   console.log(phone)
//   //2. 处理数据
//   //生成验证码(6位随机数)
//   var code = sms_util.randomCode(6)
//   //发送给指定的手机号
//   console.log(`向${phone}发送验证码短信: ${code}`)
//   sms_util.sendCode(phone, code, function(success) {
//     //success表示是否成功
//     if (success) {
//       users[phone] = code
//       console.log('保存验证码: ', phone, code)
//       ctx.body({ code: 0 })
//     } else {
//       //3. 返回响应数据
//       ctx.body({ code: 1, msg: '短信验证码发送失败' })
//     }
//   })
// })

// 路由中所有的相关的方法和路由
koa.use(koaRouter.routes()).use(koaRouter.allowedMethods())
// 监视窗口
koa.listen('5001', () => {
  console.log('服务器地址: http://localhost:5001')
})
