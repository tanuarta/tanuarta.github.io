import React from 'react';
import Header from '../Components/Header';
import styles from './Projects.module.scss'
import { Link } from "react-router-dom";

const Projects = ({ setCursorMode }) => {
  
  const goToWebsite = (e) => {
    console.log('asd')
    // window.open(e.target.src, '_blank').focus();
  }
  
  return (<>
    <div className={styles.main}>
      <Header 
        setCursorMode={setCursorMode}
      />
    
      <div className={styles.box}>
        <div className={styles.proj}>
          <Link to='/tictactoe'>
            TicTacToe
          </Link>
        </div>
      </div>
    </div>
  </>)
}

export default Projects;