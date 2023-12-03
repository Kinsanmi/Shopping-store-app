import React from 'react'
import { Link } from 'react-router-dom';

// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Smirnoff = () => {
  return (
    <>
    <main className="clear-page">
        <div className="link_page">
            <Link to='/store'>Home<MdOutlineKeyboardArrowRight /></Link>
            <Link to='/store'>Grocery<MdOutlineKeyboardArrowRight /></Link>
            <Link to='/store'>Drink<MdOutlineKeyboardArrowRight /></Link>
            <Link to='/store'>Home<MdOutlineKeyboardArrowRight /></Link>
            <Link to='/store'>Beer, Wine & Spirits<MdOutlineKeyboardArrowRight /></Link>
            <Link to='/store'>Spirits & Liquors<MdOutlineKeyboardArrowRight /></Link> 
            <Link to='/store'>Vodka<MdOutlineKeyboardArrowRight /></Link> <span>Intense Chocolate Flavoured Vodka 750ml </span>
         </div>

         {/* Smirnoff Cart section */}


         <div className="vodka">
            
         </div>
    </main>
    </>
  )
}

