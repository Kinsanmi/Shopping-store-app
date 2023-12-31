import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Styling
import '../Styles/About.css';


// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



// Drinks imported

import { useState } from 'react';

// back to top icon
import { IoIosArrowUp } from "react-icons/io";


// Ration icon
import { FaStar,FaStarHalfAlt } from "react-icons/fa";

import { Notification } from '../Components/Loading/Notification';

export const About = ({productItems, handleAddProduct, notificationMessage}) => {

  const [visible, setVisible] = useState(false);


  // display scroll to top with ease on the body

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 250){
        setVisible(true)
      }else{ setVisible(false)}
    })
  },[])

  const goTop = ()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    })
  }



  return (


    <>
    <main className="clear-page">
      <div className="link_page">
        <Link to='/store'>Home<MdOutlineKeyboardArrowRight /></Link> <span>Clearance sale</span>
      </div>


      <div className="appliance">
        <div className="clearance_sale">
        <div className="list">
          <div className="list-text">
            Clearance sales
          </div>

          <div className="clear-sale">
            {productItems.map((sales, index)=>{
              return (
                <div key={index} className='sale-point'>
                  <Link className='sale-link' to={sales.link}>
                    <img src={sales.image} alt={sales.alt} />
                    <div className="official_store">
                      {sales.official}
                    </div>
                    <div className="name">
                      {sales.text}
                    </div>
                    <div className="price">
                     {sales.price}
                    </div>
                    <div className="order">
                      {sales.percentage}
                    </div>
                    <div className="black-sale">
                      {sales.Black}
                    </div>
                    <div className="rating"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
                  </Link>
                  <button className='btn' onClick={()=>{handleAddProduct(sales)}}>Add to cart</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      </div>

      {notificationMessage && <Notification />}

      {visible && <button className='btn-Top' onClick={goTop}><IoIosArrowUp className='arrow' /></button>}
    </main>
    
    </>
  )
}

