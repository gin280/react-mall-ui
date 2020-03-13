import React, { useState } from 'react'
import KeyBoardInput from './../components/KeyBoardInput'

export default {
  title: 'KeyBoardInput',
  component: KeyBoardInput,
}

export const Normal = () => {
  const [pwdArr, setPwdArr] = useState(['', '', '', ''])
  return <KeyBoardInput inputvalue={pwdArr}></KeyBoardInput>
}
