import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import { createContext, useEffect, useState } from 'react';
import { MOBILE_SIZE } from './config/constants';
import Projects from './pages/projects/Projects';
import Portfolio from './pages/portfolio/Portfolio';

export const IsMobileSizeContext = createContext(window.innerWidth <= MOBILE_SIZE);

function App() {

  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= MOBILE_SIZE);

  const handleWindowResize = () => {
    setIsMobileSize(window.innerWidth <= MOBILE_SIZE);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);


  return (
    <IsMobileSizeContext.Provider value={isMobileSize}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </IsMobileSizeContext.Provider>
  );
}

export default App;
