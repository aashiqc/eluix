import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Link  href= "/portfolio/websites" className={styles.item}>
        <span className={styles.itemtitle}>Websites</span>
      </Link>
      <Link  href= "/portfolio/softwares" className={styles.item}>
        <span className={styles.itemtitle}>Softwares</span>
      </Link>
      <Link  href= "/portfolio/apps" className={styles.item}>
        <span className={styles.itemtitle}>Apps</span>
      </Link>
    </div>
  )
}

export default Portfolio
