import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Header} from '../Components/common/Header/Header';
import { About } from '../Pages/About';
import { Home } from '../Pages/Home';
import { Cart } from '../Pages/Cart';
import {Smirnoff} from '../Smirnoff/Smirnoff';
import { Portable } from '../Smirnoff/Portable';
import { Bluetooth } from '../Smirnoff/Bluetooth';
import { Nova } from '../Smirnoff/Nova';
import { Malta } from '../Smirnoff/Malta';


export const Routers = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, removeItem, notificationMessage, handleClick, handlePage, deleteNotificationMessage, showConfirmation }) => {
  return (
    <>
    <Router>
      <Header cartItems={cartItems.length} handlePage={handlePage} />
        <Routes>
            <Route path='/' element={ <Navigate to='/store' />} />
            <Route path='/store' element={ < Home handleClick={handleClick} />} />
            <Route path='/about/mpl-clearance-sale/' element={ <About productItems={productItems}  handleAddProduct={handleAddProduct}  notificationMessage={notificationMessage} /> } /> 
            <Route path='/about/smirnoff-x1-intense-chocolate-flavoured-vodka-750ml-x1-smirnoff-mpg1640024.html' element={ <Smirnoff handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/fashion-portable-digital-travel-luggage-weighing-scale' element={ <Portable handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/generic-bluetooth-selfie-stick-tripod-fill-light-shutter-remote' element={ <Bluetooth handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/nova-2in-1-hair-straightener-and-curler' element={ <Nova handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/malta-guinness-can-330mlx24' element={ <Malta handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/cart' element={ <Cart cartItems={cartItems} removeItem={removeItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handlePage={handlePage} /> } />      
        </Routes>
    </Router>
    </>
  )
}
