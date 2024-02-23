import React from 'react'
import styles from './style.module.css'
import logo from '../../../Assets/Images/Logo.png'
const Navbar = () => {

  return (
    <>
    <div className={styles.header} >
    <div className={styles.logo}>
     <img src={logo} alt="Logo" />
     </div>
     <div className={styles.navbar}>
        <ul>
            <li>
              <a href='#'>Home</a>
             </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
            <a href='#'>Contact</a>
            </li>
        </ul>
     </div>
     </div>
    </>
  )
}

export default Navbar
