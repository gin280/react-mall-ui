import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import Alert from './../components/Alert'

export default {
  title: 'Alert',
  component: Alert,
}

export const Normal = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(v => !v)}>toggle Modal</button>
      <Alert
        handleClickCancel={() => setShow(v => !v)}
        handleClick={() => setShow(v => !v)}
        show={show}
      >
        fuck you
      </Alert>
    </>
  )
}
