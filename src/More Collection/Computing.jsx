import React from 'react'
import { Link } from 'react-router-dom';

import '../Styles/Appliance.css';

import { IoMdStar } from "react-icons/io";


import { IoMdStarOutline } from "react-icons/io";

import {Notification} from '../Components/Loading/Notification';

// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Computing = ({product_Item_Computing,handleAddProduct,notificationMessage}) => {


  const listProduct = ()=>{

    return (
      <div className="product-type">
                            {product_Item_Computing.map((product, index)=>{
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
    )
  }


  return (
    <>
    <main className="clear-page">
        <div className="link_page">
            <Link to='/store'>Home<MdOutlineKeyboardArrowRight /></Link> <span>Computing</span>
        </div>

        <div className="home-text">
            <div className="home-appliance">Computing</div>
        </div>
        

        <div className="appliance">
            <div className="express-phone">
                <div className="express-content">
                    <div className="express-text">
                        <h2>CATEGORY</h2>
                        <div className="shipped">
                            <h3>Computing</h3>
                            <div className="shipped-text-phone">
                                <h4>Computing Accessories</h4>
                                <h4>Computing</h4>
                                <h4>Software</h4>
                            </div>
                        </div>
                        <div className="shipped">
                            <h3>BRAND</h3>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">10moons</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">915 Generation</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Acer</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Adobe</label>
                            </div>
                            <div className="shipped-text">
                                <input type="checkbox" name="shipping" id="delivery" />
                                <label htmlFor="delivery">Airtel</label>
                            </div>
                        </div>
                        <div className="shipped">
                            <h3>PRICE (₦)</h3>
                            <div className="price-range">
                                <div className="shipped-text">
                                    <input type="number" placeholder='Min' min={200} max={919080}/>
                                </div>
                                -
                                <div className="shipped-text">
                                    <input type="number" placeholder='Min' max={3995000} min={480} />
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
                        <h2>Computing</h2>
                    </div>

                    <div className="appliance-product">
                        {listProduct()}
                    </div>
                </div>
            </div>
        </div>
    </main>
    {notificationMessage && <Notification />}
    </>
  )
}
