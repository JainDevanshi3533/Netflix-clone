import React from 'react'
import Image from 'next/image';
import logo from '../Netflix-images/logo.png'
import styles from './Navbar.module.css';

const Navlogo = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.left}>
        <Image src={logo} alt="logo" layout="responsive" />
      </div>
    </div>
  )
}

export default Navlogo