import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Componants/Home';
import Projects from './Componants/Project';
import PageNotFound from './Componants/PageNotFound';

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/Portfolio' element={<Home />} />
        <Route path='/Portfolio/projets' element={<Projects />} />
        <Route path='/projets' element={<Projects />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
