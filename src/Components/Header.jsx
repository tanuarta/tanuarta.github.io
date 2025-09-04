import React, { useEffect } from 'react';
import { useState } from 'react';
import HambugerMenu from './HamburgerMenu';
import styles from './Header.module.scss'

const Header = ({ setCursorMode }) =>  {

  const [menuShown, setMenuShown] = useState(false);
  const [sticky, setSticky] = useState(true);
  const [tanStyle, setTanStyle] = useState('');
  
  useEffect(() => {
    if (!menuShown) { 
      let timeout = setTimeout(() => setTanStyle(''), 600);
      return () => clearTimeout(timeout);
    } else {
      let timeout = setTimeout(() => setTanStyle(styles.vis), 390);
      return () => clearTimeout(timeout);
    }
  }, [menuShown]);
  
  let oldScrollY = 0;
  
  const isSticky = () => {
    console.log(oldScrollY)
    if(window.scrollY > oldScrollY) {
        setSticky(false);
    } else {
        setSticky(true);
    }
    oldScrollY = window.scrollY;
  };
  
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  
  
  const mouseEnter = () => {
    setCursorMode(true);
  }
  
  const mouseLeave = () => {
    setCursorMode(false);
  }
  
  
  const hamBurgerToggle = () => {
    if (menuShown) {
      console.log(menuShown)
      document.body.style.overflow = 'unset';
    }
    else {
      document.body.style.overflow = 'hidden';
    }
    setMenuShown(!menuShown)
  }

  return (
  <div className={`${styles.main} ${sticky ? '' : styles.headerChange}`}>
    <HambugerMenu 
      menuShown={menuShown}
      setCursorMode={setCursorMode}
    />
    
    <div className={styles.topbox}>
      <div className={`${styles.textBox}`}>
        <span className={`${styles.text} ${tanStyle} ${styles.noHighlight}`}>tanuarta</span>
      </div>
      
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