import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Aboutme from './pages/aboutme/Aboutme';
import Contact from './pages/contact/Contact';
import Work from './pages/work/Work';

function App() {

  const currentPath = useLocation();

  return (
    <div>
      <div className='headerWrapper'>
        <Header currentPath={currentPath} onNavigate={() => {
          /** TODO */
        }} />
      </div>
      <div className='contentWrapper'>
        <Routes>
          <Route path='/' Component={Aboutme} />
          <Route path='/work' Component={Work} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
