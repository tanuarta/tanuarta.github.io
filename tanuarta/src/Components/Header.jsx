import React from 'react';
import { useState } from 'react';
import HambugerMenu from './HamburgerMenu';
import styles from './Header.module.scss'

const Header = ({ setCursorMode }) =>  {

  const [menuShown, setMenuShown] = useState(false);
  
  const mouseEnter = () => {
    setCursorMode(true);
  }
  
  const mouseLeave = () => {
    setCursorMode(false);
  }
  
  
  const hamBurgerToggle = () => {
    setMenuShown(!menuShown)
  }

  return (
  <div>
    <HambugerMenu 
      menuShown={menuShown}
      setCursorMode={setCursorMode}
    />
    
    <div className={styles.topbox}>
      <div className={styles.text}>tanuarta</div>
      
      <div 
        className={`${styles.burger} ${menuShown ? styles.change : ''}`} 
        onClick={hamBurgerToggle}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <div className={styles.fill} />
      </div>
    </div>
  </div>
  )
}

export default Header;