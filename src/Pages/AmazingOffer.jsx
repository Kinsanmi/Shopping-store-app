import React from 'react';
import { Link } from 'react-router-dom';

// Css styling
import '../Styles/AmazingOffer.css';

import XIAOMI from '../Data/Image cat/572_x_250.png';
import RECKIT from '../Data/Image cat/Reckitt_572_x_250.jpg';


// Arrow icons
import { IoIosArrowForward } from "react-icons/io";

// official store deals imported
import { officialStore, officialStores, officialStoresSecond } from '../Data/Products/Product';


// Electronic deals imported
import { electronicsDeal } from '../Data/Products/Product';

// SHOP COLLECTION IMPORTED
import { shopCollection } from '../Data/Products/Product';

// More collection imported
import { moreCollection } from '../Data/Products/Product';

// Best Price imported
import { bestDeal } from '../Data/Products/Product';


// Top Phone Deals imported
import { topDeal } from '../Data/Products/Product';


// Phone Deals imported
import { PhoneDeal } from '../Data/Products/Product';


// Appliance Deals imported
import { applianceDeal } from '../Data/Products/Product';


// Top Appliance Deals imported
import { topApplianceDeal } from '../Data/Products/Product';



// Official store imported
import {Slides} from '../Swiper/Slides';

export const AmazingOffer = () => {
  return (
    <>
    {/* AMAZING OFFER SECTION */}
      <section>
        <div className="card">
            <div className="card-slid"> 
                <div className="offer">Amazing offer</div>
            </div> 

            <div className="card-detail">
                <Link  className="card-image">
                <div className="hov">
                        <img src={XIAOMI} alt="XIAOMI STORE" />
                    </div>
                    </Link>
                    <Link>
                    <div className="hov">
                        <img src={RECKIT} alt="RECKITT STORE" />
                    </div>
                </Link>
                </div>
            </div>
      </section>

    {/* OFFICIAL DEALS SECTION */}
      <section>
        <div className="black">
            <div className="black-type"> 
            <div className="official-text">
                <div className="official">Official store deal</div>
                <Link to='/about/sellAll' className="sell">
                  See All <IoIosArrowForward className="left-arrow" />
                </Link>
              </div> 
                <div className="flash-detail">
                    {officialStore.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="black-image" key={index}>
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



      {/* Shop collection section */}
      <section>
        <div className="shop">
            <div className="shop-type"> 
            <div className="shop-text">
                Shop from our collection
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



        {/* Best price */}
      <section>
        <div className="black">
            <div className="black-type"> 
            <div className="best-text">
                <div className="best">Best price</div>
                <Link to='/about/sellAll' className="sell">
                  See All <IoIosArrowForward className="left-arrow" />
                </Link>
              </div> 
                <div className="flash-detail">
                    {bestDeal.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="black-image" key={index}>
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



       {/* More collection */}
       <section>
        <div className="shop">
            <div className="shop-type"> 
            <div className="shop-text">
                More Collection
              </div> 
                <div className="shop-detail">
                    {moreCollection.map((shop, index)=>{
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




       {/* Phone deals */}
       <section>
        <div className="shop">
            <div className="shop-type"> 
            <div className="shop-text">
                Phone deals
              </div> 
                <div className="shop-detail">
                    {PhoneDeal.map((shop, index)=>{
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


      {/* Top Phone deals */}
      <section>
        <div className="black">
            <div className="black-type"> 
            <div className="best-text">
                <div className="best">Top Phone deals</div>
                <Link to='/about/sellAll' className="sell">
                  See All <IoIosArrowForward className="left-arrow" />
                </Link>
              </div> 
                <div className="flash-detail">
                    {topDeal.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="black-image" key={index}>
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



        {/* Appliance Deals */}
      <section>
        <div className="shop">
            <div className="shop-type"> 
            <div className="shop-text">
                Appliance deals
              </div> 
                <div className="shop-detail">
                    {applianceDeal.map((shop, index)=>{
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


        {/* Top Appliance Deals */}
      <section>
        <div className="black">
            <div className="black-type"> 
            <div className="best-text">
                <div className="best">Top Appliance deals</div>
                <Link to='/about/sellAll' className="sell">
                  See All <IoIosArrowForward className="left-arrow" />
                </Link>
              </div> 
                <div className="flash-detail">
                    {topApplianceDeal.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="black-image" key={index}>
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

     

        {/*official store  */}
      <Slides />


         {/* Official Stores */}
      <section>
        <div className="shop">
            <div className="shop-type"> 
            <div className="store-text">
                Official stores
              </div> 
                <div className="shop-detail">
                    {officialStores.map((shop, index)=>{
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

      <section>
        <div className="shop">
            <div className="shop-type"> 
                <div className="shop-detail">
                    {officialStoresSecond.map((shop, index)=>{
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


        {/* Xiaomi official store deals */}
      <div>
        <div className="black">
            <div className="black-type"> 
            <div className="official-text">
                <div className="official">Xiaomi Official store deal</div>
                <Link to='/about/sellAll' className="sell">
                  See All <IoIosArrowForward className="left-arrow" />
                </Link>
              </div> 
                <div className="flash-detail">
                    {officialStore.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="black-image" key={index}>
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
      </div>


        {/* Haier Thermocool Official store deals */}
      <div>
        <div className="black">
            <div className="black-type"> 
            <div className="official-text">
                <div className="official">Haier Thermocool Official store deal</div>
                <Link to='/about/sellAll' className="sell">
                  See All <IoIosArrowForward className="left-arrow" />
                </Link>
              </div> 
                <div className="flash-detail">
                    {officialStore.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="black-image" key={index}>
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
      </div>

        {/* Electronic deals */}
      <section>
        <div className="shop">
            <div className="shop-type"> 
            <div className="shop-text">
                Electronic deals
              </div> 
                <div className="shop-detail">
                    {electronicsDeal.map((shop, index)=>{
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
    </>
  )
}

