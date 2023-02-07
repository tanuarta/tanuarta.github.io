import React from 'react';
import { useState } from 'react';
import styles from './Cursor.module.scss'

const Cursor = ({ mousePos }) => {
  
  return (<>
    <div className={styles.outer} style={{left: mousePos.x - 30, top: mousePos.y - 30 }} >
      <div className={styles.dot}/>
    </div>
  </>)
}

export default Cursor;