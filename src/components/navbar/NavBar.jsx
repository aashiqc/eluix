import React from 'react'
import logo from '../../../public/eluix_logo-01.svg'
import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import DropdownMenuApp from '../dropdown/DropdownMenuApp'


const links = [
    {
        id : '1',
        title: 'Home',
        url : '/',
    },
    {
        id : '2',
        title: 'Our Works',
        url : '/portfolio',
    },

    {
        id : '3',
        title: 'Contact',
        url : '/contact'
    },
    {
        id : '4',
        title: 'Dashboard',
        url : '/dashboard',
    },
    
]

const NavBar = () => {
  return (
    <div className={styles.container}>
    
      <Image src={logo} className={styles.logo} width={200} height={105} />
    
      <div className={styles.links_container}>
        <DarkModeToggle/>
        {links.map(links => (
            <Link key={links.id} href={links.url} className={styles.link}>{links.title}</Link>
        ))}
      </div>
      <button className={styles.logout}>Logout</button>
      <DropdownMenuApp/>
    </div>
  )
}

export default NavBar
