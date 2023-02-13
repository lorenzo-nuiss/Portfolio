import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './Componants/Home';
import Projects from './Componants/Project';
import PageNotFound from './Componants/PageNotFound';

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}  >
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projets' element={<Projects />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
