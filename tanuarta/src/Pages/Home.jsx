import React from 'react';
import Header from '../Components/Header';
import styles from './Home.module.scss'

const Home = ({ setCursorMode }) => {
  
  return (<>
    <Header 
      setCursorMode={setCursorMode}
    />
    
    <div className={styles.main}>
      <div className={styles.headingBox}>
        Hi I'm Roan
      </div>
    </div>
  </>)
}

export default Home;