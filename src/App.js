import './App.scss';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Cursor from './Components/Cursor';
import Main from './main';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  })
  
  const [cursorMode, setCursorMode] = useState(false)

  useEffect(() => {
    const mouseMove = e => {
      
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      })
    }
  
    window.addEventListener("mousemove", mouseMove);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  
  }, []);

  return (
  <ParallaxProvider>
    <Main 
      setCursorMode={setCursorMode}
    />
    <Cursor
      mousePos={mousePos}
      cursorMode={cursorMode}
    />
    
    <Helmet>
      <script data-goatcounter="https://tanuarta.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
    </Helmet>
  </ParallaxProvider>
  );
}

export default App;
