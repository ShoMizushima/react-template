import React from 'react'
import { styles } from '../styles/global'
import { Global } from '@emotion/react'

export const App = () => {
  return (
    <>
      <Global styles={styles} />
      <p>test application</p>
    </>
  )
}
