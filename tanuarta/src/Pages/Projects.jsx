import React from 'react';
import Header from '../Components/Header';
import styles from './Projects.module.scss'
import laptop from '../Media/laptop.png'

const Projects = ({ setCursorMode }) => {
  
  const goToWebsite = (e) => {
    console.log('asd')
    // window.open(e.target.src, '_blank').focus();
  }
  
  return (<>
    <Header 
      setCursorMode={setCursorMode}
    />
    
    <div className={styles.main}>
      <div className={styles.proj}>
        <img src={laptop} />
        <iframe src='https://riemiee.github.io' />
      </div>
    </div>
  </>)
}

export default Projects;