import React from 'react';
import Header from '../Components/Header';

const Unknown = ({ setCursorMode }) => {
  
  return (<>
    <Header 
      setCursorMode={setCursorMode}
    />
    Page not found
  </>)
}

export default Unknown;