// rem适配
function Rem() {
  // 获取布局视口的宽度
  let width = document.documentElement.clientWidth
  // 计算出字体大小并设置
  let fontSize = width / 10
  document.documentElement.style.fontSize = fontSize + 'px'
}
Rem()
