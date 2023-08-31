import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'
import Heroimg from 'public/eluix_hero-01.svg'
import Button from '../button/Button'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
       <h1 className={styles.title}>Elevate Your Digital Presence <br/> with ELUiX</h1>
       <p className={styles.description} >At ELUIX, innovation shapes seamless digital experiences. Elegant design and technology unite for user-centric excellence, defining a new era of interaction.</p>
       <Button  url='/portfolio' text='Our Works' />
      </div>
      <div className={styles.content}>
      <Image  className={styles.image} src={Heroimg} alt='hero' />
      </div>
    </div>
  )
}

export default Hero
