import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div(
  {
    position: 'fixed',
    width: '280px',
    left: '50%',
    top: '50%',
    background: '#fff',
    transition: 'all .3s ease-in-out',
    transform: 'translate(-50%, -50%) scale(0)',
    opacity: 0,
    borderRadius: 6,
    overflow: 'hidden',
    zIndex: 99998,
  },
  props => ({
    transform: props.show && 'translate(-50%, -50%) scale(1)',
    opacity: props.show && 1,
  }),
)

const Mask = styled.div(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,.5)',
    zIndex: 99996,
    transition: 'all .3s ease-in-out',
    opacity: 0,
    visibility: 'hidden',
  },
  props => ({
    visibility: props.show && 'visible',
    opacity: props.show && 1,
  }),
)

const Content = styled.div({
  textAlign: 'center',
  color: '#333',
  padding: '98px 48px 92px 48px',
  boxSizing: 'border-box',
  wordBreak: 'break-all', //对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行
})

const Btn = styled.div(
  {
    width: '100%',
    height: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    boxSizing: 'border-box',
    position: 'relative',
    fontSize: 32,
    lineHeight: 32,
    '&:hover': {
      background: '#f7f7f7',
    },
    '&:before': {
      width: '100%',
      content: '""',
      position: 'absolute',
      borderTop: '1px solid #E0E0E0',
      transform: 'scaleY(.5)',
      left: 0,
      top: 0,
    },
  },
  props => ({
    color: props.btnColor && props.btnColor,
  }),
)

const Alert = props => {
  console.info(props, 'jojo')
  return (
    <div>
      <Wrapper show={props.show}>
        <Content>{props.children}</Content>
        <Btn onClick={props.handleClick} btnColor={props.btnColor}>
          {props.btnText}
        </Btn>
      </Wrapper>
      <Mask onClick={props.handleClickCancel} show={props.show}></Mask>
    </div>
  )
}

export default Alert

Alert.propTypes = {
  //控制显示
  show: PropTypes.bool,
  //提示信息字体大小
  size: PropTypes.number,
  //提示信息字体颜色
  color: PropTypes.string,
  //按钮字体颜色
  btnColor: PropTypes.string,
  //按钮文字
  btnText: PropTypes.string,
  //点击遮罩 是否可关闭
  maskClosable: PropTypes.bool,
}

Alert.defaultProps = {
  show: false,
  size: 30,
  color: '#333',
  btnColor: '#EB0909',
  btnText: '确定',
  maskClosable: false,
}
