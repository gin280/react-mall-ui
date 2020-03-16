import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  maxWidth: '20em',
  fontSize: '175%',
  fontWeight: 300,
  lineHeight: 1.3,
  '& > p': {
    textAlign: 'center',
  },
})

const Wrapper = styled.div({
  borderRadius: '12px',
  boxShadow: '0 0 40px 0px rgba(0, 0, 0, 0.15)',
  margin: 'auto',
  marginTop: '2em',
  maxWidth: '15em',
  overflow: 'hidden',
  '& > .calculator__display': {
    backgroundColor: '#222222',
    color: '#fff',
    fontSize: '1.714285714em',
    padding: '.5em .75em',
    textAlign: 'right',
  },
  '& > .calculator__keys': {
    backgroundColor: '#999',
    display: 'grid',
    gridGap: '1px',
    gridTemplateColumns: 'repeat(4,1fr)',
    '& > button': {
      border: 0,
      borderRadius: 0,
      fontSize: 'inherit',
      outline: 'none',
      appearance: 'none',
      textAlign: 'left',
      background: '#fff',
      padding: '.5em 1.25em',
      position: 'relative',
      textAlign: 'center',
      '&:active::before, &.is-depressed::before': {
        background: 'rgba(0, 0, 0, 0.2)',
        bottom: 0,
        boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.5) inset',
        content: '""',
        left: 0,
        opacity: 0.3,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
      },
      '&.key--operator': {
        background: '#eee',
      },
      '&.key--equal': {
        backgroundImage: 'linear-gradient(to bottom, #fe886a, #ff7033)',
        gridColumn: -2,
        gridRow: '2 / span 4',
      },
    },
  },
})

const Calculator = () => {
  const calculate = (n1, operator, n2) => {
    let result = ''
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    return result
  }
  useEffect(() => {
    const calculator = document.querySelector('.calculator')
    const keys = calculator.querySelector('.calculator__keys')
    const display = document.querySelector('.calculator__display')
    keys.addEventListener('click', e => {
      if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        Array.from(key.parentNode.children).forEach(k =>
          k.classList.remove('is-depressed'),
        )
        if (!action) {
          if (displayedNum === '0' || previousKeyType) {
            display.textContent = keyContent
          } else {
            display.textContent = displayedNum + keyContent
          }
          console.log('number key!')
        }
        if (
          action === 'add' ||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide'
        ) {
          key.classList.add('is-depressed')
          calculator.dataset.firstValue = displayedNum
          calculator.dataset.operator = action
          console.log('operator key!')
        }
        if (action === 'decimal') {
          display.textContent = displayedNum + '.'
          console.log('decimal key!')
        }
        if (action === 'clear') {
          console.log('clear key!')
        }
        if (action === 'calculate') {
          const firstValue = calculator.dataset.firstValue
          const operator = calculator.dataset.operator
          const secondValue = displayedNum
          display.textContent = calculate(firstValue, operator, secondValue)
          console.log('equal key!')
        }
      }
    })
    return () => {}
  }, [])
  return (
    <Container className="calculator">
      <p>计算器</p>
      <Wrapper>
        <div className="calculator__display">0</div>

        <div className="calculator__keys">
          <button className="key--operator" data-action="add">
            +
          </button>
          <button className="key--operator" data-action="subtract">
            -
          </button>
          <button className="key--operator" data-action="multiply">
            &times;
          </button>
          <button className="key--operator" data-action="divide">
            ÷
          </button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>0</button>
          <button data-action="decimal">.</button>
          <button data-action="clear">AC</button>
          <button className="key--equal" data-action="calculate">
            =
          </button>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Calculator
