import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import styles from './Home.module.scss'
import Marquee from "react-fast-marquee";
import { ParallaxBanner, useParallax } from 'react-scroll-parallax';
import riemiee from '../Media/riemiee.PNG'

const Home = ({ setCursorMode }) => { 
  const { ref: projectRef } = useParallax({ speed: 40 });
  const { ref: rightRef } = useParallax({ speed: 100, translateX:['0', '65'], translateY:['0', '0']});
  const { ref: leftRef } = useParallax({ speed: 100, translateX:['0', '-100'], translateY:['0', '0']});
  
  const [enterRiemiee, setEnterRiemiee] = useState(false)
  
  const mouseEnter = () => {
    console.log('enter')
    setEnterRiemiee(true);
  }
  
  const mouseLeave = () => {
    setEnterRiemiee(false);
  }
  
  return (<>
    <div className={styles.main}>
      <Header 
        setCursorMode={setCursorMode}
      />
      
      <div className={styles.box1}>
        <div ref={leftRef} className={`${styles.name1} ${styles.noHighlight}`}>
          Roan
        </div>
        
        <Marquee className={`${styles.descriptive} ${styles.noHighlight}`} gradient={false} speed={60}>
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
        
        <div ref={rightRef} className={`${styles.name2} ${styles.noHighlight}`}>
          Tanuarta
        </div>
      </div>
      
      
      
      <div ref={projectRef} className={styles.box2}>
        <div className={styles.projName}>
          Projects
        </div>
        
        <div 
          className={`${styles.riemieeBox} ${enterRiemiee ? styles.riemieeHover : ''}`} 
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
        
        </div>
      
      </div>

    </div>
  </>)
}

export default Home;