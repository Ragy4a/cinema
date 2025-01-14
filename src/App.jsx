import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors';
import Directors from './components/Directors/Directors';
import Studios from './components/Studios/Studios';
import HomePage from './components/HomePage/HomePage'
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/movies/*' element={<Movies />} />
            <Route path='/actors/*' element={<Actors />} />
            <Route path='/directors/*' element={<Directors />} />
            <Route path='/studios/*' element={<Studios />} />
            <Route index element={<HomePage />} />
            <Route path='*' element={<Navigate to='/movies' replace />}/>
          </Route>
      </Routes>
    </Router>
  )
}

export default App
