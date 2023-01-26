import React from 'react';
import { useState } from 'react';
import styles from './Header.module.scss'

const Header = () =>  {

  const [menuShown, setMenuShown] = useState(false);
  
  const hamBurgerToggle = () => {
    setMenuShown(!menuShown)
  }

  return (
  <div className={styles.topbox}>
    <span className={styles.text}>tanuarta</span>
    
    <div className={`${styles.burger} ${menuShown ? styles.change : ''}`} onClick={hamBurgerToggle}>
      <div className={styles.line1} />
      <div className={styles.line2} />
      <div className={styles.line3} />
    </div>
  </div>
  )


}

export default Header;