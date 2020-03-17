import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
// import { withRouter } from 'react-router-dom'

import './index.less'
import Home from '../home'

// withRouter高阶组件 提供路由组件的三大属性
// @withRouter
class FooterGuide extends Component {
  state = {
    selectedTab: 'homeTab' // 默认选中首页
  }

  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="#666" // 没有选中的字体颜色
          tintColor="#DD1A21"
          barTintColor="#fff"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 -125px / 100% 250px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 -100px / 100% 250px no-repeat'
                }}
              />
            }
            // 是否被选中
            selected={this.state.selectedTab === 'homeTab'}
            // 点击item触发
            onPress={() => {
              // this.props.history.push('/home')
              this.setState({
                selectedTab: 'homeTab'
              })
            }}
          >
            <Home />
          </TabBar.Item>

          <TabBar.Item
            title="分类"
            key="category"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 -75px / 100% 250px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 -50px / 100% 250px no-repeat'
                }}
              />
            }
            // 是否被选中
            selected={this.state.selectedTab === 'categoryTab'}
            // 点击item触发
            onPress={() => {
              this.setState({
                selectedTab: 'categoryTab'
              })
            }}
          ></TabBar.Item>
          <TabBar.Item
            title="值得买"
            key="buy"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 -175px / 100% 250px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 -150px / 100% 250px no-repeat'
                }}
              />
            }
            // 是否被选中
            selected={this.state.selectedTab === 'buyTab'}
            // 点击item触发
            onPress={() => {
              this.setState({
                selectedTab: 'buyTab'
              })
            }}
          ></TabBar.Item>

          <TabBar.Item
            title="购物车"
            key="shopcart"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 -25px / 100% 250px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 0 / 100% 250px no-repeat'
                }}
              />
            }
            // 是否被选中
            selected={this.state.selectedTab === 'shopcartTab'}
            // 点击item触发
            onPress={() => {
              this.setState({
                selectedTab: 'shopcartTab'
              })
            }}
          ></TabBar.Item>

          <TabBar.Item
            title="个人"
            key="personal"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 -225px / 100% 250px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 0 -200px / 100% 250px no-repeat'
                }}
              />
            }
            // 是否被选中
            selected={this.state.selectedTab === 'personalTab'}
            // 点击item触发
            onPress={() => {
              this.setState({
                selectedTab: 'personalTab'
              })
            }}
          ></TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default FooterGuide
