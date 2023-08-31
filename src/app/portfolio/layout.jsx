import React from 'react'
import styles from './page.module.css'

const Layout = ({children}) => {
  return (
    <div className={styles.titlecontainer}>
      <h1 className={styles.title}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout
