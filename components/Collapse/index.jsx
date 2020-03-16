import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Collapse = () => {
  return (
    <div>
        
    </div>
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
}
