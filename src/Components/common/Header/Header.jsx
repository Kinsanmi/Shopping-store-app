// React-router-link
import { Link } from "react-router-dom";


// Use state hooks
import { useState, useEffect } from "react";

// Deal image
import deals from '../BF-brands-top-strip.gif';

// Header css styling
import '../Header/Header.css';

// E-Store logo
import Estore from '../logo.png';

// Brands icons
import hurley from '../brands/hurley.png';
import zara from '../brands/zara.png';
import dng from '../brands/dng.png';
import samsung from '../brands/samsung.png';
import oppo from '../brands/oppo.png';
import asus from '../brands/asus.png';


// react-icons
import { MdSupervisorAccount, MdOutlineKeyboardArrowDown, MdOutlineShoppingCart, MdLogin } from "react-icons/md";

import {  } from "react-icons/md";

// react search icon
import { IoSearchSharp } from "react-icons/io5";



export const Header = ({cartItems, handlePage, setNames}) => {

  // scroll to top of page
  const scrollToTop = ()=>{
    window.scrollTo(0,0);
   };



  const [open, setOpen] = useState(false);

  const openAccount = ()=>{
    setOpen(!open);
  }


    // adding background color when window scroll to a certain height 

    const [colorChange, setColorChange] = useState(false);

    const changeColor = ()=>{
      if(window.scrollY >100){
        setColorChange(true)
      }else{setColorChange(false)}
  
    };

    useEffect(()=>{
      window.addEventListener('scroll', changeColor)
  
      return ()=>{
        window.removeEventListener('scroll', changeColor)
      }
    },[])


  return (
    <>
      {/* Deal anime */}
    <div className="slide-img">
      <div className="slide-banner">
        <img src={deals} alt="Brand" />
      </div>
    </div>

    {/* Brands icons */}
    <div className="brands">
      <div className="brand-logo">
        <img src={hurley} alt="Hurley-brand" />
        <img src={zara} alt="Zara-brand" />
        <img src={dng} alt="D&G-brand" />
        <img src={samsung} alt="Samsun brand" />
        <img src={oppo} alt="Oppo brand" />
        <img src={asus} alt="Asus brand" />
      </div>
    </div>

    <header className="header">
      <section className={colorChange ? "container open" : "container"}  style={{position: colorChange ? 'fixed' : 'sticky'}}>

        <div className="contain-img">
          <Link onClick={handlePage} to='/store'><img src={Estore} alt="E-Shopping-Store" /></Link>
        </div>


        <form action="" id="search" method="get" data-tract-onsubmit="search">
          <div className="find">
            <IoSearchSharp className="search-col"/>
            <input type="text" placeholder="Search fo products, brands and categories" name="name" aria-label="search" autoComplete="off" required onChange={(e)=> {setNames(e.target.value)}}/>
          </div>
          <button className="btn">Search</button>
        </form>

        <div className="account">
            <div className="acct-setup">          
              <Link className="active" onClick={()=> {openAccount(true)}}><MdSupervisorAccount className="acct" />Account <MdOutlineKeyboardArrowDown /></Link>
            </div>

            <div className="sing-up">
              <Link><MdLogin className="login" />Login/Signup</Link>
            </div>

            <div className="cart-product">
              <Link to='/cart' onClick={scrollToTop}><span><MdOutlineShoppingCart className="cart" /></span>
              Cart
              {cartItems ? <p className="cart-length">{cartItems}</p> : "" }
              </Link>
            </div>
          </div>
      </section>
    </header>

    
    </>
  )
}

