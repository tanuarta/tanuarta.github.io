import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import styles from './Home.module.scss'
import Marquee from "react-fast-marquee";
import { useParallax } from 'react-scroll-parallax';

const Home = ({ setCursorMode }) => { 
  const { ref } = useParallax({ speed: 40 });
  
  useEffect(() => {
    
  
  })
  
  return (<>
    <div className={styles.main}>
      <Header 
        setCursorMode={setCursorMode}
      />
      
      <div className={styles.box1}>
        <div className={styles.name1}>
          Roan
        </div>
        
        <Marquee className={styles.descriptive} gradient={false} speed={60}>
          <span className={styles.marq}>Developer</span>
          <span className={styles.marq}>·</span>
          <span className={styles.marq}>Musician</span>
          <span className={styles.marq}>·</span>
          <span className={styles.marq}>Climber</span>
          <span className={styles.marq}>·</span>
          <span className={styles.marq}>Developer</span>
          <span className={styles.marq}>·</span>
          <span className={styles.marq}>Musician</span>
          <span className={styles.marq}>·</span>
          <span className={styles.marq}>Climber</span>
          <span className={styles.marq}>·</span>
        </Marquee>
        
        <div className={styles.name2}>
          Tanuarta
        </div>
      </div>
      
      
      
      <div className={styles.box2}>
        <div ref={ref} className={styles.proj}>
          Projects
        </div>
      
      </div>

    </div>
  </>)
}

export default Home;