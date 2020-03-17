import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'

import './index.less'

export default class Home extends Component {
  renderContent = tab => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px',
        backgroundColor: '#fff'
      }}
    >
      <p>Content of {tab.title}</p>
    </div>
  )
  render() {
    const tabs = [
      { title: '推荐' },
      { title: '居家生活' },
      { title: '服饰鞋包' },
      { title: '美食酒水' },
      { title: '个护清洁' },
      { title: '母婴亲子' },
      { title: '运动旅行' },
      { title: '数码家电' },
      { title: '全球特色' }
    ]
    return (
      <div className="homeContainer">
        <div className="home_header">
          <img
            src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
            alt="logo"
          />
          <div className="header_searchbox">
            <i className="iconfont icon-sousuo"></i>
            <span>搜索商品 , 共233款好物</span>
          </div>
          <div className="header_login">登录</div>
        </div>
        <Tabs
          tabs={tabs}
          // renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
          tabBarActiveTextColor={'#DD1A21'}
        >
          {this.renderContent}
        </Tabs>
        <div className="downlist">
          
        </div>
      </div>
    )
  }
}
