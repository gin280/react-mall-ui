import React, { useState, useEffect } from 'react'
import Keyboard from './../components/Keyboard'
import KeyBoardInput from './../components/KeyBoardInput'

export default {
  title: 'Keyboard',
  component: Keyboard,
}

export const Normal = () => {
  const [show, setShow] = useState(false)
  const [pwdArr, setPwdArr] = useState(['', '', '', '', '', ''])
  const [numberArr, setNumerArr] = useState([])

  const keyboardClick = index => {
    // let len = numberArr.length
    // if (index === 9) {
    //   //取消键
    //   setShow(false)
    // } else if (index === 11) {
    //   //退格键
    //   if (len) {
    //     setNumerArr(v => v.pop())
    //     setPwdArr(v => (v[index] = ''))
    //   }
    // } else if (index === 10) {
    //   setNumerArr(v => v.push(0))
    //   setPwdArr(v => (v[index] = '●'))
    // } else {
    //   setNumerArr(v => v)
    //   setPwdArr(v => v)
    // }
    console.info(index)
    setPwdArr((v) => {
      v[index] = '1'
      return v
    })
    console.info(pwdArr, numberArr, 'lala')
  }
  
  return (
    <div>
      <button onClick={() => setShow(v => !v)}>toggle Keyboard</button>
      <Keyboard
        handleClick={v => keyboardClick(v)}
        handleClose={() => setShow(false)}
        show={show}
      >
        <div>
          <div>请输入密码</div>
          <KeyBoardInput inputvalue={pwdArr}></KeyBoardInput>
        </div>
      </Keyboard>
    </div>
  )
}
