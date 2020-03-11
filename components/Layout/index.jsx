import React from 'react'
import styles from './index.module.scss'

const Layout = ({ children }) => <div className={styles.wrapper}>{children}</div>;
  
export default Layout