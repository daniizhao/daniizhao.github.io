import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import { createContext, useEffect, useState } from 'react';
import { MOBILE_SIZE } from './config/constants';
import Projects from './pages/projects/Projects';
import Portfolio from './pages/portfolio/Portfolio';
import DigitalDetails from './components/projectDetails/creative/DigitalDetails';
import TraditionalDetails from './components/projectDetails/creative/TraditionalDetails';
import CharacterDetails from './components/projectDetails/creative/CharactersDetails';
import CreatureDetails from './components/projectDetails/creative/CreatureDetails';
import PropDetails from './components/projectDetails/creative/PropDetails';
import EnvironmentDetails from './components/projectDetails/creative/EnvironmentDetails';
import Details3D from './components/projectDetails/creative/3dDetails';
import NotFound from './pages/notfound/NotFound';

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
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/portfolio' element={<Portfolio />} >
          <Route
              path="/portfolio"
              element={<Navigate to="/portfolio/character" replace />}
          />
          <Route path='/portfolio/character' element={<CharacterDetails />} />
          <Route path='/portfolio/creature' element={<CreatureDetails />} />
          <Route path='/portfolio/prop' element={<PropDetails />} />
          <Route path='/portfolio/environment' element={<EnvironmentDetails />} />
          <Route path='/portfolio/3d' element={<Details3D />} />
          <Route path='/portfolio/traditional' element={<TraditionalDetails />} />
          <Route path='/portfolio/digital' element={<DigitalDetails />} />
        </Route>
      </Routes>
    </IsMobileSizeContext.Provider>
  );
}

export default App;
