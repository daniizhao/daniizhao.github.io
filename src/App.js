import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Portfolio from './pages/portfolio/Portfolio';
import Home from './pages/home/Home';
import Aboutme from './pages/aboutme/Aboutme';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/cv' element={<Aboutme />} />
    </Routes>
  );
}

export default App;
