import React from 'react';
import styles from './HamburgerMenu.module.scss'


const HambugerMenu = ({ menuShown }) => {

  return (<>
  
    <div className={`${styles.box} ${menuShown ? '' : styles.hidden}`}>
      <div className={styles.main}>
        <span className={styles.text}>tanuarta</span>
        
        <span className={styles.menuText}>Home</span>
      </div>
    </div>
  
  </>)
}

export default HambugerMenu;