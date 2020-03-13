import React from 'react'
import { action } from '@storybook/addon-actions'
import Footer from './../components/Footer'

export default {
  title: 'Footer',
  component: Footer,
}

export const Demo = () => (
  <Footer
    navigate={[
      {
        url: '../../index/index',
        type: 'switchTab',
        text: '返回首页',
        color: '#5677fc',
      },
      {
        url: '../../my/my',
        type: 'switchTab',
        text: '个人中心',
        color: '#5677fc',
        size: 30,
      },
    ]}
    bgcolor="white"
  ></Footer>
)
