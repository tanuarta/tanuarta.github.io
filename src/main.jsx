import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Unknown from './Pages/Unknown';
import Blog from './Pages/Blog';
import TicTacToe from './Pages/TicTacToe';
import pdf from './Media/Bp Eddy Tjahja Funeral Booklet.pdf'

const Main = ({ setCursorMode }) => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home setCursorMode={setCursorMode} />} />
      <Route path='/projects' element={<Projects setCursorMode={setCursorMode} />}></Route>
      <Route path='/about' element={<About setCursorMode={setCursorMode} />}></Route>
      <Route path='/blog' element={<Blog setCursorMode={setCursorMode} />}></Route>
      <Route path="/tictactoe" element={<TicTacToe setCursorMode={setCursorMode} />} />
      <Route path="/funeralbooklet" element={pdf} target="_blank" rel="noopener noreferrer" download />
      <Route path="*" element={<Unknown setCursorMode={setCursorMode} />} />
    </Routes>
  );
}

export default Main;