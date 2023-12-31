import React from 'react'
import { Link } from 'react-router-dom';

import '../Styles/Appliance.css';

import { IoMdStar } from "react-icons/io";


import { IoMdStarOutline } from "react-icons/io";

// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LargeAppliance } from '../Data/Products/Product';

export const Appliance = () => {
  return (
    <>
    <main className="clear-page">
        <div className="link_page">
            <Link to='/store'>Home<MdOutlineKeyboardArrowRight /></Link> <span>Appliance</span>
        </div>

        <div className="home-text">
            <div className="home-appliance">Home Appliance</div>
        </div>
        

        <div className="appliance">
            <div className="express">
                <div className="express-content">
                    <div className="express-text">
                        <h2>EXPRESS DELIVERY</h2>
                        <div className="shipped">
                            <h3>SHIPPED FORM</h3>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Shipped from abroad</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Shipped from Nigeria</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="appliance-pay">
                <div className="pay-on">
                    <div className="pay-sort">
                        <h2>Large Appliance | Pay on Delivery</h2>
                    </div>

                    <div className="appliance-product">
                        <article className="product-type">
                            {LargeAppliance.map((product, index)=>{
                                return (
                                    <>
                                    <Link key={index} to={product.link}>
                                        <div className="img-c">
                                            <img src={product.image} alt={product.alt} />
                                            <h5>{product.delivery}</h5>
                                        </div>

                                        <div className="info">
                                            <span className="info-mall">{product.official}</span>
                                            <h3>{product.text}</h3>
                                            <div className="prc-amount">{product.price}</div>

                                            <div className="prc-discount">
                                                <div className="old">{product.discount}</div>
                                                <div className="bdg-dsct">
                                                    {product.percent}
                                                </div>
                                            </div>

                                            <div className="review">
                                                <div className="stars-review"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline className='star-bdg' /><IoMdStarOutline  className='star-bdg'/></div>
                                                (250)
                                            </div>
                                        </div>
                                    </Link>
                                    <button>Add to cart</button>
                                    </>
                                )
                            })}
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

