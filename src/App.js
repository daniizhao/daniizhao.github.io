import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import { createContext, useEffect, useState } from 'react';

export const AppSizeContext = createContext(false);

function App() {

  const [isMobileSize, setIsMobileSize] = useState(false);

  const handleWindowResize = () => {
    setIsMobileSize(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);


  return (
    <AppSizeContext.Provider value={isMobileSize}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AppSizeContext.Provider>
  );
}

export default App;
