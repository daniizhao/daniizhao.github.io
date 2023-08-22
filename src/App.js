import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Portfolio />} />
    </Routes>
  );
}

export default App;
