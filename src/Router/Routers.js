import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Header} from '../Components/common/Header/Header';
import { About } from '../Pages/About';
import { Home } from '../Pages/Home';
import { Cart } from '../Pages/Cart';
import {Smirnoff} from '../Smirnoff/Smirnoff';


export const Routers = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, removeItem, notificationMessage, handleClick, handlePage, deleteNotificationMessage, showConfirmation }) => {
  return (
    <>
    <Router>
      <Header cartItems={cartItems.length} />
        <Routes>
            <Route path='/' element={ <Navigate to='/store' />} />
            <Route path='/store' element={ < Home handleClick={handleClick} />} />
            <Route path='/about/mpl-clearance-sale/' element={ <About productItems={productItems}  handleAddProduct={handleAddProduct}  notificationMessage={notificationMessage} /> } /> 
            <Route path='/about/smirnoff-x1-intense-chocolate-flavoured-vodka-750ml-x1-smirnoff-mpg1640024.html' element={ <Smirnoff handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/cart' element={ <Cart cartItems={cartItems} removeItem={removeItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handlePage={handlePage} /> } />      
        </Routes>
    </Router>
    </>
  )
}
