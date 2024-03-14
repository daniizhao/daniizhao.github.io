import { HashRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import { createContext, useEffect, useState } from 'react';
import { MOBILE_SIZE } from './config/constants';
import Projects from './pages/projects/Projects';
import Portfolio from './pages/portfolio/Portfolio';
import DigitalDetails from './components/projectDetails/creative/DigitalDetails';
import TraditionalDetails from './components/projectDetails/creative/TraditionalDetails';
import Contact from './pages/contact/Contact';

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
        <Route path='/portfolio' element={<Portfolio />} >
          <Route index element={<Contact />} />
          <Route path='/portfolio/character' element={<Contact />} />
          <Route path='/portfolio/creature' element={<Contact />} />
          <Route path='/portfolio/prop' element={<Contact />} />
          <Route path='/portfolio/environment' element={<Contact />} />
          <Route path='/portfolio/3d' element={<Contact />} />
          <Route path='/portfolio/traditional' element={<TraditionalDetails />} />
          <Route path='/portfolio/digital' element={<DigitalDetails />} />
        </Route>
      </Routes>
    </IsMobileSizeContext.Provider>
  );
}

export default App;
