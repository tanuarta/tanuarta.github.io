import React from 'react';
import Header from '../Components/Header';
import styles from './Projects.module.scss'

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
      <iframe className={styles.iframe} src='https://riemiee.github.io' />
    </div>
  </>)
}

export default Projects;