import { useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/Drinks.css";

// Arrow icon
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Ration icon
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { guinness } from "../Data/Products/Product";

// Shield icon
import { FaShieldAlt } from "react-icons/fa";

// Mdstar icon
import { MdStars } from "react-icons/md";

export const Smirnoff = ({ handleAddProduct }) => {
  return (
    <>
      <main className="clear-page">
        <div className="link_page">
          <Link to="/store">
            Home
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Grocery
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Drink
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Beer, Wine & Spirits
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Beer
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Multipack Beers
            <MdOutlineKeyboardArrowRight />
          </Link>{" "}
          <span>Smooth Can 33cl x 24 </span>
        </div>

        {/* Smirnoff Cart section */}

        <div className="vodka">
          <div className="vodka_drink">
            {guinness.map((item) => {
              return (
                <div className="brand">
                  <div className="brand-type">
                    <img src={item.image} alt="Guinness Smooth Can 33cl x24" />
                    {/* {slideData ? <img src={slideData.image} alt='' /> : <img src={Goose1} alt='' />} */}

                    <div className="img-type">
                      {guinness.map((data, index) => {
                        return (
                          <div className="value">
                            <img key={index} src={data.image} alt={data.alt} />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="add-to-cart">
                    <div className="can">
                      <div className="store_can">official store</div>
                      <div className="call">✆07006000000 to Order</div>
                    </div>

                    <div className="drink">
                      <div className="drink-can">
                        Guinness Smooth Can 33cl x 24
                        <div className="product">
                          Brand: <Link>Guinness</Link> |{" "}
                          <Link>Similar products from Guinness</Link>
                        </div>
                      </div>
                    </div>

                    <div className="price">₦ 11,770</div>
                    <div className="item">Few units left</div>
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <div className="add_item">
                      <button
                        className="btn-add"
                        onClick={() => {
                          handleAddProduct(item);
                        }}
                      >
                        <MdOutlineShoppingCart className="cart_item" />
                        Add to cart
                      </button>
                    </div>
                    <div className="promote">PROMOTIONS</div>
                    <div className="shield">
                      <div>
                        <FaShieldAlt />
                      </div>
                      <Link className="extra">
                        Need extra money? Loan up to N500,000 on the E-Shop pay
                        Android app.
                      </Link>
                    </div>
                    <div className="shield">
                      <div>
                        <MdStars />
                      </div>
                      <Link className="extra">
                        Enjoy cheaper shipping fees when you select a PickUp
                        Station at checkout.
                      </Link>
                    </div>
                    <div className="shield">
                      <div>
                        <FaShieldAlt />
                      </div>
                      <Link className="extra">
                        Transfer up to N20,000 to any bank in Nigeria for FREE!
                      </Link>
                    </div>
                  </div>
                  <Link className="report">
                    Report incorrect product information
                  </Link>
                </div>
              );
            })}
            <div className="desc">Description of product</div>
          </div>

          <div className="delivery">
            Delivery & returns
            <div className="progress"></div>
          </div>
        </div>
      </main>
    </>
  );
};
