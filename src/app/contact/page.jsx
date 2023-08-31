import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Get a Quote</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imgcontainer}>
          <Image className={styles.image} src='/contact.svg'  alt='contactimg' width={450} height={450} />
        </div>
        <div className={styles.form}>
           <input type='text' placeholder='Name' className={styles.input} />
           <input type='email' placeholder='Email' className={styles.input} />
           <textarea className={styles.textarea} placeholder='Message' cols="30" rows="10"></textarea>
           <Button  url= '/' text="Send" />
        </div>
      </div>
    </div>
  )
}

export default Contact
