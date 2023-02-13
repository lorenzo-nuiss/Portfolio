import './App.css';
import { BrowserRouter, Routes, Route, HashRouter, Navigate, Switch } from 'react-router-dom'
import Home from './Componants/Home';
import Projects from './Componants/Project';
import PageNotFound from './Componants/PageNotFound';

function App() {
  return (

    <HashRouter >
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/projets' element={<Projects />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/#/" element={<Navigate to="/404" replace />} />
      </Routes>
    </HashRouter>


  );
}

export default App;
