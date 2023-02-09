import React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styles from './Cursor.module.scss'
// <div className={styles.dot} style={{left: mousePos.x - 20, top: mousePos.y - 20 }}/>
const Cursor = ({ mousePos, cursorMode }) => {
  
  const elementRef = useRef();
  const [offset, changeOffset] = useState(20);
  
  useEffect(() => {
    console.log(elementRef.current.clientWidth)
    if (elementRef.current.clientWidth == 1) {
      changeOffset(5);
    } else {
      changeOffset(20);
    }
  }, [cursorMode])
  
  return (
  <div className={cursorMode ? styles.change : ''}>
    <div ref={elementRef} className={styles.outer} style={{left: mousePos.x - offset, top: mousePos.y - offset }} />
  </div>
  )
}

export default Cursor;