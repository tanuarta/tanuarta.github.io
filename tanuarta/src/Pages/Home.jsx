import React from 'react';
import Header from '../Components/Header';
import styles from './Home.module.scss'

const Home = ({ setCursorMode }) => {
  
  return (<>
    <div className={styles.main}>
      <Header 
        setCursorMode={setCursorMode}
      />
      
      <div className={styles.box}>
        <div className={styles.headingBox}>
          Hi I'm Roan
        </div>
        <div className={styles.headingBox}>
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
          Hi I'm Roan <br />
        </div>
      
      </div>
      
      <div className={styles.box}>
        <div className={styles.headingBox}>
          Projects
        </div>
      
      </div>

    </div>
  </>)
}

export default Home;