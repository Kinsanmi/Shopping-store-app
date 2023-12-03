import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Header} from '../Components/common/Header/Header';
import { About } from '../Pages/About';
import { Home } from '../Pages/Home';
import { Cart } from '../Pages/Cart';
import {Smirnoff} from '../Smirnoff/Smirnoff';

export const Routers = () => {
  return (
    <>
    <Router>
      <Header />
        <Routes>
            <Route path='/' element={ <Navigate to='/store' />} />
            <Route path='/store' element={ < Home />} />
            <Route path='/about/mpl-clearance-sale/' element={ <About /> } />
            <Route path='/about/smirnoff-x1-intense-chocolate-flavoured-vodka-750ml-x1-smirnoff-mpg1640024.html' element={ <Smirnoff /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='*' element={ <h1>404 Error</h1> } />
        </Routes>
    </Router>
    </>
  )
}
