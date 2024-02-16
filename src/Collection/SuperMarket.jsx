import React from 'react'
import { Link } from 'react-router-dom';

import '../Styles/Appliance.css';

import { IoMdStar } from "react-icons/io";


import { IoMdStarOutline } from "react-icons/io";

import {Notification} from '../Components/Loading/Notification';

// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const SuperMarket = ({product_Item_Market,handleAddProduct,notificationMessage}) => {
  return (
    <>
    <main className="clear-page">
        <div className="link_page">
            <Link to='/store'>Home<MdOutlineKeyboardArrowRight /></Link> <span>Grocery</span>
        </div>

        <div className="home-text">
            <div className="home-appliance">Grocery</div>
        </div>
        

        <div className="appliance">
            <div className="express-phone">
                <div className="express-content">
                    <div className="express-text">
                        <h2>CATEGORY</h2>
                        <div className="shipped">
                            <h3>Grocery</h3>
                            <div className="shipped-text-phone">
                                <h4>Air Fresheners</h4>
                                <h4>Beer, wine & Spirits</h4>
                                <h4>Beverages</h4>
                                <h4>Candy & Chocolate</h4>
                                <h4>Breads & Bakery</h4>
                            </div>
                        </div>
                        <div className="shipped">
                            <h3>BRAND</h3>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">2Sure</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">915 Generation</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Absolut</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Airwick</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Ariel</label>
                            </div>
                        </div>
                        <div className="shipped">
                            <h3>PRICE (₦)</h3>
                            <div className="price-range">
                                <div className="shipped-text">
                                    <input type="number" placeholder='Min' min={225} max={919080}/>
                                </div>
                                -
                                <div className="shipped-text">
                                    <input type="number" placeholder='Min' max={589500} min={480} />
                                </div>
                            </div>
                        </div>
                        <div className="shipped">
                            <h3>DISCOUNT PERCENTAGE</h3>
                            <div className="shipped-text">
                                <input type="radio" name="shipping" id="delivery" />
                                <label htmlFor="delivery">50% or more</label>
                            </div>
                            <div className="shipped-text">
                                <input type="radio" name="shipping" id="delivery" />
                                <label htmlFor="delivery">40% or more</label>
                            </div>
                            <div className="shipped-text">
                                <input type="radio" name="shipping" id="delivery" />
                                <label htmlFor="delivery">30% or more</label>
                            </div>
                            <div className="shipped-text">
                                <input type="radio" name="shipping" id="delivery" />
                                <label htmlFor="delivery">20% or more</label>
                            </div>
                            <div className="shipped-text">
                                <input type="radio" name="shipping" id="delivery" />
                                <label htmlFor="delivery">10% or more</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="appliance-pay">
                <div className="pay-on">
                    <div className="pay-sort">
                        <h2>Supermarket</h2>
                    </div>

                    <div className="appliance-product">
                        <div className="product-type">
                            {product_Item_Market.map((product, index)=>{
                                return (
                                    <div className='sort-type'>
                                    <Link key={index} to={product.link}>
                                        <div className="img-c">
                                            <img src={product.image} alt={product.alt} />
                                        </div>

                                        <div className="info">
                                            <h3>{product.text}</h3>
                                            <div className="prc-amount">₦ {product.price}</div>

                                            <div className="review">
                                                <div className="stars-review"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline className='star-bdg' /><IoMdStarOutline  className='star-bdg'/></div>
                                                {product.figure}
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="product-btn">
                                        <button className='btn' onClick={()=>{handleAddProduct(product)}}>Add to cart</button>
                                    </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </main>
    {notificationMessage && <Notification />}
    </>
  )
}
