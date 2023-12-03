import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Styling
import '../Styles/About.css';

import {Sales} from '../Data/Products/Product';

// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { shopCollection } from '../Data/Products/Product';

// Drinks imported
import { drinks } from '../Data/Products/Product';
import { useState } from 'react';

// back to top icon
import { IoIosArrowUp } from "react-icons/io";


// Ration icon
import { FaStar,FaStarHalfAlt } from "react-icons/fa";

export const About = () => {

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



  /* useEffect(()=>{
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
  }) */


  return (


    <>
    <main className="clear-page">
      <div className="link_page">
        <Link to='/store'>Home<MdOutlineKeyboardArrowRight /></Link> <span>Clearance sale</span>
      </div>


      {/* Beverage clearance sales */}
      <section>
        <div className="sales">
            <div className="sale-type"> 
            <div className="sale-text">beverage clearance sales</div> 
                <div className="sale-detail">
                    {Sales.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="sale-image" key={index}>
                                <img src={sale.image} alt={sale.alt} />
                                <div className="name">
                                  {sale.text}
                                </div>
                                <div className="price">
                                  {sale.price}
                                </div>
                                <div className="dst">
                                  {sale.discount}
                                </div>
                                <div className="percent">
                                  {sale.percentage}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>



        {/* Umidigi official store */}
      <section>
        <div className="sales">
            <div className="sale-type"> 
            <div className="sale-text">Umidigi official store</div> 
                <div className="sale-detail">
                    {Sales.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="sale-image" key={index}>
                                <img src={sale.image} alt={sale.alt} />
                                <div className="name">
                                  {sale.text}
                                </div>
                                <div className="price">
                                  {sale.price}
                                </div>
                                <div className="dst">
                                  {sale.discount}
                                </div>
                                <div className="percent">
                                  {sale.percentage}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>



        {/* Defacto store*/}
      <section>
        <div className="sales">
            <div className="sale-type"> 
            <div className="sale-text">Defacto official store</div> 
                <div className="sale-detail">
                    {Sales.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="sale-image" key={index}>
                                <img src={sale.image} alt={sale.alt} />
                                <div className="name">
                                  {sale.text}
                                </div>
                                <div className="price">
                                  {sale.price}
                                </div>
                                <div className="dst">
                                  {sale.discount}
                                </div>
                                <div className="percent">
                                  {sale.percentage}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>


        {/* Adidas store*/}
      <section>
        <div className="sales">
            <div className="sale-type"> 
            <div className="sale-text">Adidas official store</div> 
                <div className="sale-detail">
                    {Sales.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="sale-image" key={index}>
                                <img src={sale.image} alt={sale.alt} />
                                <div className="name">
                                  {sale.text}
                                </div>
                                <div className="price">
                                  {sale.price}
                                </div>
                                <div className="dst">
                                  {sale.discount}
                                </div>
                                <div className="percent">
                                  {sale.percentage}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>



        {/* freeyond store*/}
      <section>
        <div className="sales">
            <div className="sale-type"> 
            <div className="sale-text">Freeyond store</div> 
                <div className="sale-detail">
                    {Sales.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="sale-image" key={index}>
                                <img src={sale.image} alt={sale.alt} />
                                <div className="name">
                                  {sale.text}
                                </div>
                                <div className="price">
                                  {sale.price}
                                </div>
                                <div className="dst">
                                  {sale.discount}
                                </div>
                                <div className="percent">
                                  {sale.percentage}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>

        {/* Clearance sale collection */}
      <section>
        <div className="shop">
            <div className="shop-type"> 
            <div className="shop-text">
                clearance sale collection
              </div> 
                <div className="shop-detail">
                    {shopCollection.map((shop, index)=>{
                        return (
                            <Link to={shop.link} className="shop-image" key={index}>
                                <img src={shop.image} alt={shop.alt} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>


      <div className="clearance_sale">
        <div className="list">
          <div className="list-text">
            Clearance sales
          </div>

          <div className="clear-sale">
            {drinks.map((sales, index)=>{
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
                    <div className="rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
                  </Link>
                  <button className='btn'>Add to cart</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {visible && <button className='btn-Top' onClick={goTop}><IoIosArrowUp className='arrow' /></button>}
    </main>
    
    </>
  )
}

