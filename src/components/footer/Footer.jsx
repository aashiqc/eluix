import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.footerName}>
        ELUIX
     </div>
     
     <div className={styles.rights}>
      All rights Reserved
     </div>
     <div className={styles.social}>
      <Image src="/twitterwn.png" width={25} height={25} className={styles.icon} alt='icon' />
      <Image src="/instagramwn.png" width={25} height={25} className={styles.icon}  alt='icon' />
      <Image src="/whatsappwn.png" width={25} height={25} className={styles.icon}  alt='icon' />

     </div>
    </div>
  )
}

export default Footer
