import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Header} from '../Components/common/Header/Header';
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
import { PhoneDeals } from '../Collection/PhoneDeals';
import { FashionDeals } from '../Collection/FashionDeals';
import { SuperMarket } from '../Collection/SuperMarket';
import { Electronics } from '../Collection/Electronics';
import { BeautyDeals } from '../Collection/BeautyDeals';
import { BackPack } from '../Smirnoff/BackPack';
import { ItelP55 } from '../Smirnoff/ItelP55';
import { BM800 } from '../Smirnoff/BM800';
import { Computing } from '../More Collection/Computing';
import { Fitness } from '../More Collection/Fitness';


export const Routers = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, removeItem, notificationMessage, handleClick, handlePage, productItem, deleteNotificationMessage, product_Item, product_Item_Market, product_Item_Electronic, product_Item_Beauty, product_Item_Computing, loading, setNames, search }) => {
  return (
    <>
    <Router>
      <Header cartItems={cartItems.length} handlePage={handlePage} setNames={setNames} />
        <Routes>
            <Route path='/' element={ <Navigate to='/store' />} />
            <Route path='/store' element={ < Home handleClick={handleClick} search={search} />} />
            <Route path='/about/smirnoff-x1-intense-chocolate-flavoured-vodka-750ml-x1-smirnoff-mpg1640024.html' element={ <Smirnoff handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/fashion-portable-digital-travel-luggage-weighing-scale' element={ <Portable handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/generic-bluetooth-selfie-stick-tripod-fill-light-shutter-remote' element={ <Bluetooth handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/nova-2in-1-hair-straightener-and-curler' element={ <Nova handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/malta-guinness-can-330mlx24' element={ <Malta handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/ace-elec-power-banks-2000-mah-utra-slim-portable-fast-charger-ace-elec' element={ <PowerBank handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/fashion-kids-leather-martin-boots-girls-boys-sneaker-shoes-brown' element={ <KidLeather handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
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
            <Route path='/fashion-3-in-1-backpack-bags-laptop-backpack-grey' element={ <BackPack handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/generic-bm800-condenser-microphone-recording-stand-large-diaphragm-live-set-black-silver' element={ <BM800 handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/itel-p55-6.6-hd-punch-hole-display-128gb-rom-8gb-green' element={ <ItelP55   handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/mlp-apploiances' element={ <Appliance handleAddProduct={handleAddProduct} productItems={productItems} notificationMessage={notificationMessage} /> } />
            <Route path='/phones-tablets/' element={ <PhoneDeals handleAddProduct={handleAddProduct} productItem={productItem} notificationMessage={notificationMessage} /> } />
            <Route path='/category-fashion-by-e-shop/' element={ <FashionDeals handleAddProduct={handleAddProduct} product_Item={product_Item} notificationMessage={notificationMessage} /> } />
            <Route path='/groceries/' element={ <SuperMarket handleAddProduct={handleAddProduct} product_Item_Market={product_Item_Market} notificationMessage={notificationMessage} /> } />
            <Route path='/electronics/' element={ <Electronics handleAddProduct={handleAddProduct} product_Item_Electronic={product_Item_Electronic} notificationMessage={notificationMessage} /> } />
            <Route path='/health-beauty/' element={ <BeautyDeals handleAddProduct={handleAddProduct} product_Item_Beauty={product_Item_Beauty} notificationMessage={notificationMessage} /> } />
            <Route path='/computing' element={ <Computing handleAddProduct={handleAddProduct} product_Item_Computing={product_Item_Computing} notificationMessage={notificationMessage} loading={loading} /> } />
            <Route path='/computing' element={ <Fitness handleAddProduct={handleAddProduct} product_Item_Computing={product_Item_Computing} notificationMessage={notificationMessage} /> } />
            <Route path='/fanta-drink-50cl-pet-x-12-81076434' element={ <Fanta handleAddProduct={handleAddProduct} notificationMessage={notificationMessage} /> } />
            <Route path='/cart' element={ <Cart cartItems={cartItems} removeItem={removeItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handlePage={handlePage}  deleteNotificationMessage={deleteNotificationMessage}/>  } />      
        </Routes>
    </Router>
    </>
  )
}
