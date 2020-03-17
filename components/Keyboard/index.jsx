import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

const IconStyle = css({
  fontFamily: 'keyboardFont !important',
  fontSize: 22,
  fontStyle: 'normal',
  lineHeight: 1,
  color: '#333 !important',
})

const Mask = styled.div(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,.6)',
    zIndex: 998,
    transform: 'all .3s ease-in-out',
    opacity: 0,
    visibility: 'hidden',
  },
  props => ({
    opacity: props.show && 1,
    visibility: props.show && 'visible',
  }),
)

const Wrapper = styled.div(
  {
    width: '100%',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    background: '#fff',
    opacity: 0,
    visibility: 'hidden'
  },
  props => ({
    transform: props.show && 'translate3d(0,0,0)',
    opacity: props.show && 1,
    visibility: props.show && 'visible',
  }),
)

const Grids = styled.div({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  '&:after': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 1,
    borderTop: '1px solid #eaeef1',
    transformOrigin: '0 0',
    transform: 'scaleY(.5)',
  },
})

const Grid = styled.div({
  position: 'relative',
  padding: '24px 20px',
  boxSizing: 'border-box',
  background: '#fff',
  width: '33.333333%',
  '&:before': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 1,
    bottom: 0,
    borderRight: '1px solid #eaeef1',
    transformOrigin: '100% 0',
    transform: 'scaleX(.5)',
  },
  '&:nth-of-type(3n)::before': {
    width: 0,
    borderRight: 0,
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 1,
    borderBottom: '1px solid #eaeef1',
    transformOrigin: '0 100%',
    transform: 'scaleY(.5)',
  },
  '&:hover': {
    background: '#f7f7f9 !important',
  },
  '&  > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    height: 60,
    color: '#000',
  },
})

const Keyboard = props => {
  const getKeyBoard = (index, action) => {
    let content = index + 1
    if (index == 9) {
      content = action ? '取消' : '清除'
    } else if (index == 10) {
      content = 0
    }
    return content
  }

  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  console.info(props)
  return (
    <div
      css={{
        '@font-face': {
          fontFamily: 'keyboardFont',
          src: "url('//at.alicdn.com/t/font_1689163_rynnlrrg76i.eot')",
          src:
            "url('//at.alicdn.com/t/font_1689163_rynnlrrg76i.eot?#iefix') format('embedded-opentype'),url('//at.alicdn.com/t/font_1689163_rynnlrrg76i.woff2') format('woff2'),url('//at.alicdn.com/t/font_1689163_rynnlrrg76i.woff') format('woff'),url('//at.alicdn.com/t/font_1689163_rynnlrrg76i.ttf') format('truetype'),url('//at.alicdn.com/t/font_1689163_rynnlrrg76i.svg#iconfont') format('svg')",
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      }}
    >
      <Mask show={props.show} onClick={props.handleClose} ></Mask>
      <Wrapper show={props.show} >
        {props.children}
        <Grids>
          {list.map((item, index) => (
            <Grid onClick={() => props.handleClick(index)} key={index}>
              {index < 11 ? (
                <div>{getKeyBoard(index, props.action)}</div>
              ) : (
                <div css={[IconStyle]}>&#xe636;</div>
              )}
            </Grid>
          ))}
        </Grids>
      </Wrapper>
    </div>
  )
}

export default Keyboard

Keyboard.propTypes = {
  //是否需要mask
  mask: PropTypes.bool,
  //控制键盘显示
  show: PropTypes.bool,
  //是否直接显示，不需要动画，一般使用在锁屏密码
  action: PropTypes.bool,
}

Keyboard.defaultProps = {
  maks: true,
  show: true,
  action: true,
}
