import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Wrapper = styled.div({
  position: 'relative',
  width: '100',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginBottom: 25,
})
 
const Node = styled.div(
  {
    position: 'absolute',
    top: 0,
    left: -20,
    transformOrigin: '0 0',
    // transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    backgroundColor: '#fafafa',
    fontSize: 24,
  },
  props => ({
    backgroundColor: props.bgcolor,
  }),
)

const TimeAxisItem = props => {
  return (
    <Wrapper>
      {props.children[0]}
      <Node bgcolor={props.bgcolor}>{props.children[1]}</Node>
    </Wrapper>
  )
}

export default TimeAxisItem

TimeAxisItem.propTypes = {
  //节点背景色
  bgcolor: PropTypes.string,
}

TimeAxisItem.defaultProps = {
  bgcolor: '#fafafa',
}
