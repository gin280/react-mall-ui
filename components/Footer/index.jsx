import React from 'react'
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

const DouFooter = styled.div(
  {
    width: '375px',
    overflow: 'hidden',
    padding: '30px 24px',
    boxSizing: 'border-box',
  },
  props => ({
    background: props.bgcolor,
    position: props.fixed && "fixed",
    zIndex: props.fixed && 9999,
    bottom: props.fixed && 0
  })
)


const DouFooterLink = styled.div({
  color: '#596d96',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  '& > span': {
    position: 'relative',
    padding: '0px 18px',
    lineHeight: 1,
    '&:before': {
      position: 'absolute',
      right: 0,
      top: 0,
      width: 1,
      bottom: 0,
      borderRight: '1px solid #d3d3d3',
      transform: 'scaleX(0.5)',
      content: '""',
    },
    '&:hover': {
      opacity: 0.5
    },
    '&:last-child:before': {
      borderRight: "0 !important"
    }
  }
})

const DouLink = styled.div({

})


const DouFooterCopyright = styled.div(
  {
    fontSize: 14,
    color: '#A7A7A7',
    lineHeight: 1,
    textAlign: 'center',
    paddingTop: 16,
  },
  props => ({ color: props.color, fontSize: props.size })
)

const Footer = props => {
  console.info(props, 'jojo')
  return (
    <DouFooter fixed={props.fixed} bgcolor={props.bgcolor}>
      {props.navigate.length > 0 && (
        <DouFooterLink>
          {props.navigate.map((item, index) => (
            <span key={index}> {item.text} </span>
          ))}
        </DouFooterLink>
      )}
      <DouFooterCopyright color={props.color} fontSize={props.fontSize}> {props.copyright} </DouFooterCopyright>
    </DouFooter>
  )
}

export default Footer

Footer.propTypes = {
  //链接设置  数据格式对应上面注释的属性值
  navigate: PropTypes.array,
  //底部文本
  copyright: PropTypes.string,
  //copyright 字体颜色
  color: PropTypes.string,
  //copyright 字体大小
  size: PropTypes.number,
  //footer背景颜色
  bgcolor: PropTypes.string,
  //是否固定在底部
  fixed: PropTypes.bool,
}

Footer.defaultProps = {
  navigate: [],
  copyright: 'All Rights Reserved.',
  color: '#A7A7A7',
  size: 24,
  bgcolor: 'none',
  fixed: true,
}
