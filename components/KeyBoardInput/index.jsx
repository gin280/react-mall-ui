import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    verticalAlign: 'top',
  },
  props => ({
    background: props.bgcolor,
  }),
)

const Inner = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Input = styled.div(
  {
    height: 80,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderBottom: '2px solid #666',
    '&:last-child': {
      marginRight: '0 !important',
    },
  },
  props => ({
    marginRight: props.inputvalue.length === 4 && 30,
    width: props.inputvalue.length === 4 ? 90 : 70,
    fontSize: props.size,
    color: props.color,
  }),
)

const KeyBoardInput = props => {
  return (
    <Wrapper bgcolor={props.bgcolor}>
      <Inner>
        {props.inputvalue.map((item, index) => (
          <Input
            size={props.size}
            color={props.color}
            inputvalue={props.inputvalue}
            key={index}
          >
            {item}
          </Input>
        ))}
      </Inner>
    </Wrapper>
  )
}

export default KeyBoardInput

KeyBoardInput.propTypes = {
  //背景颜色
  bgcolor: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  //输入框的值：数组格式，长度即为输入框个数
  inputvalue: PropTypes.array,
}

KeyBoardInput.defaultProps = {
  bgcolor: '#fff',
  size: 32,
  color: '#333',
  inputvalue: ['', '', '', '', '', ''],
}
