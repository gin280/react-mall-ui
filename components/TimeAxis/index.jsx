import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div({
  paddingLeft: '20px',
  boxSizing: 'border-box',
  position: 'relative',
  '&:before': {
    content: "''",
    position: 'absolute',
    left: 0,
    top: 0,
    width: 1,
    bottom: 0,
    borderLeft: '1px solid #ddd',
    transformOrigin: '0 0',
    transform: 'scaleX(.5)',
  },
})

const TimeAxis = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default TimeAxis
