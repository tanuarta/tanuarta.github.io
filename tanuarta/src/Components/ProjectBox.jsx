import React, { useEffect, useState } from 'react';
import styles from './ProjectBox.module.scss'
import { delay, motion } from "framer-motion"

const ProjectBox = ({ setCursorMode, link, image, preview }) => {

  const [enterRiemiee, setEnterRiemiee] = useState(false)
  const [startAnimation, setStartAnimation] = useState(false)

  const textAnimation = {
    initial: { opacity: 0, scale: 0.99},
    animate: { opacity: 1, scale: 1, transition: {delay: 0.5, duration: 0.5}},
    exit: {opacity: 0, scale: 0.99, transition: {duration: 0.5}},
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.99},
    animate: { opacity: 1, scale: 1, transition: {delay: 1, duration: 0.5}},
    exit: {opacity: 0, scale: 0.99, transition: {duration: 0.5}},
  };

  const mouseEnter = () => {
    console.log('enter')
    setCursorMode(true)
    setEnterRiemiee(true);
    setStartAnimation(true)
  }
  
  const mouseLeave = () => {
    setCursorMode(false)
    console.log('leaving')
    setStartAnimation(false)
    setTimeout(() => {
      setEnterRiemiee(false)

    }, 500)
  }

  return (
    <a 
      href={link}
      target="_blank"
      className={`${styles.riemieeBox}`} 
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className={`${styles.riemieeModal} ${enterRiemiee ? styles.riemieeHover : ''}`}>
        <motion.div 
          initial='initial'
          animate={startAnimation ? 'animate' : 'exit'}
          exit='exit'
          variants={textAnimation} 
        >
          <span className={styles.projName}>riemiee.github.io</span>
          <motion.img 
            className={styles.mainImg} 
            src={image}
            initial='initial'
            animate={startAnimation ? 'animate' : 'exit'}
            exit='exit'
            variants={imageAnimation} 
          />
        </motion.div>

      </div>
      <img src={preview} className={styles.riemieePic}></img>
    </a>
  )



}

export default ProjectBox