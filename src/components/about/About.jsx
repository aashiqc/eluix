import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import aboutimg from 'public/aboutimg.svg'
import Button from '../button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <Image src={aboutimg} alt='About' className={styles.aboutimg} />
      </div>
      <div className={styles.about}>
       <h1 className={styles.heading}>Who We Are ?</h1>
       <p>ELUIX embodies the synergy of creativity and technology. As pioneers of user-centric design, we craft digital solutions that resonate. With innovation at our core, we elevate interactions, delivering seamless experiences that bridge the gap between brands and audiences. Welcome to ELUIX, where possibilities unfold.</p>
       <Button url=' /contact ' text='Join Us' />
      </div>
    </div>
  )
}

export default About
