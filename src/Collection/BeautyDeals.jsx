import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Appliance.css';

import { IoMdStar } from "react-icons/io";


import { IoMdStarOutline } from "react-icons/io";

import {Notification} from '../Components/Loading/Notification';

// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



export const BeautyDeals = ({product_Item_Beauty,handleAddProduct,notificationMessage}) => {
  return (
    <>
    <main className="clear-page">
        <div className="link_page">
            <Link to='/store'>Home<MdOutlineKeyboardArrowRight /></Link> <span>Health & Beauty</span>
        </div>

        <div className="home-text">
            <div className="home-appliance">Health & Beauty</div>
        </div>
        

        <div className="appliance">
            <div className="express-phone">
                <div className="express-content">
                    <div className="express-text">
                        <h2>CATEGORY</h2>
                        <div className="shipped">
                            <h3>Health & Beauty</h3>
                            <div className="shipped-text-phone">
                                <h4>Beauty & Personal Care</h4>
                                <h4>Health Care</h4>
                                <h4>Medical Supplies & Equipment</h4>
                                <h4>PErsonal Care</h4>
                                <h4>Sexual Wellness</h4>
                            </div>
                        </div>
                        <div className="shipped">
                            <h3>BRAND</h3>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">915 Generation</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">AD</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Aichun Beauty</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Alliance In Motion</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Aq General</label>
                            </div>
                        </div>
                        <div className="shipped">
                            <h3>PRICE (₦)</h3>
                            <div className="price-range">
                                <div className="shipped-text">
                                    <input type="number" placeholder='Min' min={105} max={919080}/>
                                </div>
                                -
                                <div className="shipped-text">
                                    <input type="number" placeholder='Min' max={2070000} min={480} />
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
                        <h2>Electronics</h2>
                    </div>

                    <div className="appliance-product">
                        <div className="product-type">
                            {product_Item_Beauty.map((product, index)=>{
                                return (
                                    <div className='sort-type'>
                                    <Link key={index} to={product.link}>
                                        <div className="img-c">
                                            <img src={product.image} alt={product.alt} />
                                        </div>

                                        <div className="info">
                                            <h3>{product.text}</h3>
                                            <div className="prc-amount">₦ {product.price}</div>

                                            <div className="prc-discount">
                                                <div className="old">{product.discount}</div>
                                                <div className="bdg-dsct">
                                                    {product.percent}
                                                </div>
                                            </div>

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
