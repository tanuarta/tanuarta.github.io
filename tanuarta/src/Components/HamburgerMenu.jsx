import React from 'react';
import styles from './HamburgerMenu.module.scss'
import { motion, useAnimationControls } from "framer-motion"


const HambugerMenu = ({ menuShown }) => {

  const animations = {
    initial: { opacity: 0, x: 2000},
    animate: { opacity: 1, x:0, transition: {duration: 0.5}},
    exit: { opacity: 0, x: 2000, transition: {delay: 0.5, duration: 0.5}},
  }
  
  const childrenVariant = {
    initial: { opacity: 0, y: 70},
    animate: { opacity: 1, y: 0, transition: {delay: 0.5, duration: 0.5}},
    exit: {opacity: 0, y: 70, transition: {duration: 0.5}},
  };

  return (<>
    <motion.div 
      className={styles.box} 
      variants={animations}
      initial='initial'
      animate={menuShown ? 'animate' : 'exit'}
      exit='exit'
    >
      <div className={styles.main}>
        <motion.span 
          initial='initial'
          animate={menuShown ? 'animate' : 'exit'}
          exit='exit'
          variants={childrenVariant} 
          className={styles.menuText}
        >
          Home
        </motion.span>
        
        <motion.span 
          initial='initial'
          animate={menuShown ? 'animate' : 'exit'}
          exit='exit'
          variants={childrenVariant} 
          className={styles.menuText}
        >
          Projects
        </motion.span>
      </div>
    </motion.div>
  
  </>)
}

export default HambugerMenu;