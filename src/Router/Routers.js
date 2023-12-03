import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Header} from '../Components/common/Header/Header';
import { About } from '../Pages/About';
import { Home } from '../Pages/Home';

export const Routers = () => {
  return (
    <>
    <Router>
      <Header />
        <Routes>
            <Route path='/' element={ <Navigate to='/store' />} />
            <Route path='/store' element={ < Home />} />
            <Route path='/about/mpl-clearance-sale/' element={ <About /> } />
            <Route path='*' element={ <h1>404 Error</h1> } />
        </Routes>
    </Router>
    </>
  )
}
