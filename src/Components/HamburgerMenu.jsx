import React from 'react';
import styles from './HamburgerMenu.module.scss'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const HambugerMenu = ({ menuShown, setCursorMode }) => {

  const animations = {
    initial: {x: 2000, opacity: 0},
    animate: { opacity: 1, x:0, transition: {duration: 0.5}},
    exit: {x: 2000, opacity: 0, transition: {delay: 0.5, duration: 0.5}},
  }
  
  const childrenVariant = {
    initial: { opacity: 0, y: 70},
    animate: { opacity: 1, y: 0, transition: {delay: 0.5, duration: 0.5}},
    exit: {opacity: 0, y: 70, transition: {duration: 0.5}},
  };
  
  const mouseEnter = () => {
    setCursorMode(true);
  }
  
  const mouseLeave = () => {
    document.body.style.overflow = 'unset';
    setCursorMode(false);
  }

  return (<>
    <motion.div 
      className={styles.box} 
      variants={animations}
      initial='initial'
      animate={menuShown ? 'animate' : 'exit'}
      exit='exit'
    >
        <Link to='/'
          style={{ textDecoration: 'none', display: 'flex', cursor: 'auto' }}
        >
          <motion.span 
            initial='initial'
            animate={menuShown ? 'animate' : 'exit'}
            exit='exit'
            variants={childrenVariant} 
            className={styles.menuText}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={mouseLeave}
          >
            Home
          </motion.span>
        </Link>
        
        <Link to='/projects'
          style={{ textDecoration: 'none', display: 'flex', cursor: 'auto' }}
        >
          <motion.span 
            initial='initial'
            animate={menuShown ? 'animate' : 'exit'}
            exit='exit'
            variants={childrenVariant}
            className={styles.menuText}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={mouseLeave}
          >
            Projects
          </motion.span>
        </Link>
        
        <Link to='/blog'
          style={{ textDecoration: 'none', display: 'flex', cursor: 'auto' }}
        >
          <motion.span 
            initial='initial'
            animate={menuShown ? 'animate' : 'exit'}
            exit='exit'
            variants={childrenVariant}
            className={styles.menuText}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={mouseLeave}
          >
            Blog
          </motion.span>
        </Link>
        
        <Link to='/about'
          style={{ textDecoration: 'none', display: 'flex', cursor: 'auto' }}
        >
          <motion.span 
            initial='initial'
            animate={menuShown ? 'animate' : 'exit'}
            exit='exit'
            variants={childrenVariant}
            className={styles.menuText}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={mouseLeave}
          >
            About
          </motion.span>
        </Link>
    </motion.div>
  
  </>)
}

export default HambugerMenu;