import React from 'react'
import TimeAxis from './../components/TimeAxis'
import TimeAxisItem from './../components/TimeAxis/item'

export default {
  title: 'TimeAxis',
  component: TimeAxis,
}

export const Normal = () => {
  return (
    <TimeAxis>
      <div>
        <TimeAxisItem>
          <div style={{ fontSize: '12px' }}>
            <div>已签收</div>
            <div>您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。</div>
            <div>2019-05-01 18:48:26</div>
          </div>
          <span>a</span>
        </TimeAxisItem>
        <TimeAxisItem>
          <div style={{ fontSize: '12px' }}>
            <div>已签收</div>
            <div>您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。</div>
            <div>2019-05-01 18:48:26</div>
          </div>
          <span>b</span>
        </TimeAxisItem>
        <TimeAxisItem>
          <div style={{ fontSize: '12px' }}>
            <div>已签收</div>
            <div>您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。</div>
            <div>2019-05-01 18:48:26</div>
          </div>
          <span>c</span>
        </TimeAxisItem>
        <TimeAxisItem>
          <div style={{ fontSize: '12px' }}>
            <div>已签收</div>
            <div>您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。</div>
            <div>2019-05-01 18:48:26</div>
          </div>
          <span>a</span>
        </TimeAxisItem>
        <TimeAxisItem>
          <div style={{ fontSize: '12px' }}>
            <div>已签收</div>
            <div>您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。</div>
            <div>2019-05-01 18:48:26</div>
          </div>
          <span>b</span>
        </TimeAxisItem>
        <TimeAxisItem>
          <div style={{ fontSize: '12px' }}>
            <div>已签收</div>
            <div>您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。</div>
            <div>2019-05-01 18:48:26</div>
          </div>
          <span>c</span>
        </TimeAxisItem>
      </div>
    </TimeAxis>
  )
}
