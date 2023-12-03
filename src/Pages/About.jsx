import React from 'react'
import { Link } from 'react-router-dom'

// Styling
import '../Styles/About.css';

import {Sales} from '../Data/Products/Product';

// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { shopCollection } from '../Data/Products/Product';

export const About = () => {
  return (
    <>
    <main className="clear-page">
      <div className="link_page">
        <Link to='/store'>Home <MdOutlineKeyboardArrowRight /></Link> <span>Clearance sale</span>
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


      div.
    </main>
    
    </>
  )
}

