import React, { useState } from 'react'

import '../Styles/Cart.css';

import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';


export const Cart = ({cartItems, removeItem, handleAddProduct, handleRemoveProduct, handlePage}) => {



  const itemPrice = cartItems.reduce(
    (price, item)=> price + item.quantity * item.price, 0
  )
  

  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 30000 ? 0 : 20;
  const totalPrice = itemPrice + taxPrice + shippingPrice;




  /* let num = 11770;

  let value = num.toLocaleString();

  console.log(value) */



  return (
    <>   
    <main className='clear-page'>
      <div className="cart-text">
        <div className="cart-count">
          {cartItems.length === 0 && <div className='cart-item-empty'>
              <MdOutlineShoppingCart className="cart-content" />
              <h2>Your cart is empty!!</h2>
              <p>Browse our categories and discover our best deals!!</p>
              <Link onClick={handlePage} to ='/store'>Start shopping</Link>
            </div>}

            {/* <div className='cart-number'>Cart ({cartItems.length === 0 ? "" : cartItems.length})
            </div> */}
          <div className="cart-style">
            <div className="cart-flex">
              {cartItems.map((item)=>{
              return (
                <div key={item.id} className='cart-item'>
                  <div className="cart-border">
                  <div className="cart-detail">
                    <div className="cart-img">
                      <img src={item.image} alt={item.alt} />
                      <button onClick={()=>{removeItem(item.id)}}>remove</button>
                    </div>
                    <div className="cart-items">
                      <p>{item.text}</p>
                      <p>{item.items}</p>
                    </div>
                  </div>

                  <div className="buttons">
                    <div className="btn-price">₦{item.price}</div>
                    <div className="discount">
                      <h4>{item.discount}</h4>
                      <h3>{item.percent}</h3>
                    </div>
                    <div className="btns">
                      <button className='btn' onClick={()=> handleRemoveProduct(item)}>-</button>
                      <span>{item.quantity}</span>   
                      <button className='btn' onClick={ ()=> handleAddProduct(item)}>+</button>
                    </div>
                  </div>
                  </div>
                </div>
              )
            })}
            </div>

            <div className="total">
              {cartItems.length !==0 && (
                <>
                <div className="sub-cart">
                  <div className="cart-sum">Cart summary</div>

                  <div className="sub-total">
                    <div className="total-price">Subtotal</div>
                    <div className="amount">₦{itemPrice}</div>
                    
                  </div>
                  <button className='check'>Checkout (₦{itemPrice.toFixed(0)})</button>
                </div>
                </>
              )}
              </div>
          </div>
        </div>
      </div>

    </main>

    {cartItems.length !==0 && (
      <>
      <div>
        <div>Sub total price</div>
        <div>₦{itemPrice.toFixed(2)}</div>
      </div>
      <div>
        <div>Tax Price</div>
        <div>₦{taxPrice.toFixed(2)}</div>
      </div>
      <div>
        <div>Shipping Price</div>
        <div>₦{shippingPrice.toFixed(2)}</div>
      </div>
      <div>
        <div>Total Price</div>
        <div>₦{totalPrice.toFixed(2)}</div>
      </div>
      </>
    )}
    </>
  )
}

