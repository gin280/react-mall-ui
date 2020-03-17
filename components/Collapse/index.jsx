import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div(
  {
    overflow: 'hidden',
  },
  props => ({
    background: props.bgColor,
  }),
)

const Header = styled.div(
  {
    position: 'relative',
    cursor: 'pointer',
    borderBottom: '1px solid #333',
  },
  props => ({
    opacity: props.disabled && '.6',
    background: props.hdBgColor,
  }),
)

const Body = styled.div(
  {
    overflow: 'hidden',
    transition: 'all .3s',
    '& > *': {
      padding: 5,
    },
  },
  props => ({
    background: props.bdBgColor,
    transform: props.isOpen
      ? 'translateY(0)'
      : `translateY(${props.translateY})`,
    height: props.isOpen ? props.height : 0,
  }),
)

const Icon = styled.div(
  {
    fontFamily: 'myFont !important',
    fontSize: 22,
    fontStyle: 'normal',
    lineHeight: 1,
    color: '#333 !important',
    transform: 'rotate(0)',
    transformOrigin: 'center center',
    transition: 'all .3s',
    top: '50%',
    marginTop: -10,
    // transform: 'translateY(-50%)',
    right: 30,
    boxSizing: 'border-box',
    position: 'absolute',
  },
  props => ({
    color: props.arrowColor,
    transform: props.isOpen && 'rotate(180deg)',
    transformOrigin: props.isOpen && 'center center',
  }),
)

const Collapse = props => {
  return (
    <Wrapper
      css={{
        '@font-face': {
          fontFamily: 'myFont',
          src: "url('//at.alicdn.com/t/font_1689163_phkak9qfwti.eot')",
          src:
            "url('//at.alicdn.com/t/font_1689163_phkak9qfwti.eot?#iefix') format('embedded-opentype'),url('//at.alicdn.com/t/font_1689163_phkak9qfwti.woff2') format('woff2'),url('//at.alicdn.com/t/font_1689163_phkak9qfwti.woff') format('woff'),url('//at.alicdn.com/t/font_1689163_phkak9qfwti.ttf') format('truetype'),url('//at.alicdn.com/t/font_1689163_phkak9qfwti.svg#iconfont') format('svg')",
        },
      }}
      props
    >
      <Header
        onClick={props.handleHeaderClick}
        hdBgColor={props.hdBgColor}
        disabled={props.disabled}
      >
        {props.children[0]}
        {props.arrow && (
          <Icon isOpen={props.isOpen} arrowColor={props.arrowColor}>
            &#xe610;
          </Icon>
        )}
      </Header>
      <Body {...props}>{props.children[1]}</Body>
    </Wrapper>
  )
}

export default Collapse

Collapse.propTypes = {
  //collapse背景颜色
  bgColor: PropTypes.string,
  //collapse-head 背景颜色
  hdBgColor: PropTypes.string,
  //collapse-body 背景颜色
  bdBgColor: PropTypes.string,
  //collapse-body实际高度 open时使用
  height: PropTypes.string,
  //close时translateY ，当bd高度固定时，建议值为0
  translateY: PropTypes.string,
  //索引
  index: PropTypes.number,
  //当前索引，index==current时展开
  current: PropTypes.number,
  // 是否禁用
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  //是否带箭头
  arrow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  //箭头颜色
  arrowColor: PropTypes.string,
  //是否打开
  isOpen: PropTypes.bool,
}

Collapse.defaultProps = {
  bgColor: 'none',
  hdBgColor: '#fff',
  bdBgColor: 'none',
  height: 'auto',
  translateY: '-50%',
  index: 0,
  current: -1,
  disabled: false,
  arrow: true,
  arrowColor: '#333',
  isOpen: false,
}
