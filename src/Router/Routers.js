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
import { PowerBank } from '../Smirnoff/PowerBank';
import { KidLeather } from '../Smirnoff/KidLeather';
import { Itel } from '../Smirnoff/Itel';
import { Nivea } from '../Smirnoff/Nivea';
import { AceElec } from '../Smirnoff/AceElec';
import { EagetFlash } from '../Smirnoff/EagetFlash';
import { Knorr } from '../Smirnoff/Knorr';
import { Royal } from '../Smirnoff/Royal';
import { Sony } from '../Smirnoff/Sony';
import { EASport } from '../Smirnoff/EASport';
import { Vera } from '../Smirnoff/Vera';
import { Adidas } from '../Smirnoff/Adidas';
import { Guinness } from '../Smirnoff/Guinness';
import { NiveaPerfect } from '../Smirnoff/NiveaPerfect';
import { Thermocool } from '../Smirnoff/Thermocool';
import { Fanta } from '../Smirnoff/Fanta';
import { Appliance } from '../Collection/Appliance';


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
            <Route path='/ace-elec-power-banks-2000-mah-utra-slim-portable-fast-charger-ace-elec' element={ <PowerBank handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/fashion-kids-leather-martin-boots-girls-boys-sneaker-shoes-brown' element={ <KidLeather handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />/*
            <Route path='/20000mah-mobile-power-charger-bank-itel' element={ <Itel handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/dry-comfort-roll-on-for-women-48h-50ml-pack-of-3-nivea' element={ <Nivea handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/ace-elec-f9-wireless-fingerprint-touch-bluetooth-headset' element={ <AceElec handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/eaget-pen-flash-drive-3.0-128gb-metal-otg-micro-usb-type-c' element={ <EagetFlash handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/knorr-chicken-seasoning-cubes-8g-x-45' element={ <Knorr handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/royal-32-inches-led-tv-rtv32f7j-1-year-warranty' element={ <Royal handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/ea-sports-fc-24-playstation' element={ <Sony handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/ea-sports-fc-24-playstation-5-270428944' element={ <EASport handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/vera-wang-for-women-dep-100ml' element={ <Vera handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/adidas-advantage-lifestyle-court-lace-shoes' element={ <Adidas handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/guinness-smooth-can-33cl-x-24' element={ <Guinness handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/nivea-perfect-radiant-luminous630-anti-marks-day-cream-spf50-40ml' element={ <NiveaPerfect handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/haier-thermocool-146-liters-chest-freezer-htf-150-siver-3-years-warranty' element={ <Thermocool handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/mlp-apploiances' element={ <Appliance handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/fanta-drink-50cl-pet-x-12-81076434' element={ <Fanta handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/cart' element={ <Cart cartItems={cartItems} removeItem={removeItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handlePage={handlePage} /> } />      
        </Routes>
    </Router>
    </>
  )
}
