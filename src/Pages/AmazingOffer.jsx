import React from 'react';
import { Link } from 'react-router-dom';

import jumia from '../Components/common/logo.png';

// Css styling
import '../Styles/AmazingOffer.css';

import XIAOMI from '../Data/Image cat/572_x_250.png';
import RECKIT from '../Data/Image cat/Reckitt_572_x_250.jpg';


// Arrow icons
import { IoIosArrowForward } from "react-icons/io";

// official store deals imported
import { ComputDeal, HaierCoolDeals, officialStore, officialStores, officialStoresSecond, xiaomiDeals } from '../Data/Products/Product';


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


// Mail icon
import { MdEmail } from "react-icons/md";


// Facebook icon
import { FaFacebookF } from "react-icons/fa";


// Youtube icon
import { FaYoutube, FaXTwitter } from "react-icons/fa6";


// Visa icons
import { SiVisa } from "react-icons/si";



// instagram icon
import { TiSocialInstagram } from "react-icons/ti";


// DHL icon
import { LiaDhl } from "react-icons/lia";



// Official store imported
import {Slides} from '../Swiper/Slides';

export const AmazingOffer = () => {


  const year = new Date().getFullYear();
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
                    {xiaomiDeals.map((sale, index)=>{
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
                    {HaierCoolDeals.map((sale, index)=>{
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


        {/* Computing Deals */}
      <section>
        <div className="shop">
            <div className="shop-type"> 
            <div className="shop-text">
                Computing deals
              </div> 
                <div className="shop-detail">
                    {ComputDeal.map((shop, index)=>{
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



      <footer>

        {/* Jumia email section */}
        <div className="bg-mb">
          <div className="row_footer">
            <div className='col4'><img src={jumia} alt="" /></div>
              <div className="text-input">
              <div className='subs'>
                <div className="pbs">New to Jumia?</div>
                Subscribe to our newsletter to get updates on our latest offers!
              </div>


              <form action="" method='post'>
                <div className="input">
                  <div className="fi">
                    <MdEmail className='email' />
                    <input type="email" placeholder='Enter E-mail Address' required className='fi_new' name='email' aria-label='E-mail' />
                    
                  </div>

                  <div className="find_type">
                    <button name='gender' value="male" className='gender'>Male</button>
                    <button name='gender' value="female" className='gender'>Female</button>
                  </div>
                </div>
              </form>

              </div>
              

              <div className="col_1">
                <div className="col-flex">
                  <div className="svg">
                    Svg icons
                  </div>

                  <div className="app">
                      <div className="app-text">
                        DOWNLOAD JUMIA FREE APP
                      </div>
                      <div className="app-access">
                      Get access to exclusive offers!
                      </div>
                    </div>
                  </div>

                <div className="download">
                    <Link>App store</Link>
                    <Link>Google App</Link>
                  </div>
                </div>
          </div>


                    {/* Help section */}
          <div className="end-section">
            <div className="help">
              <div className="fg need-help">
                <h2>Need Help?</h2>
                <div className="help-link">
                  <Link>Chat with us</Link>
                  <Link>Help Center</Link>
                  <Link>Contact Us</Link>
                </div>
              </div>

              <div className="need-help">
              <h2>Useful links</h2>
                <div className="help-link">
                  <Link>Service Center</Link>
                  <Link>How to shop on Jumia</Link>
                  <Link>Delivery options and timelines</Link>
                  <Link>How to return a product on jumia</Link>
                  <Link>Corporate and bulk purchases</Link>
                  <Link>Report a Product</Link>
                  <Link>Ship your package anywhere in Nigeria</Link>
                  <Link>Dispute Resolution Policy</Link>
                  <Link>Returns & Refunds Timeline</Link>
                  <Link>Return Policy</Link>
                </div>
              </div>
            </div>


            <div className="need-help">
            <h2>about jumia</h2>
                <div className="help-link">
                  <Link>About Us</Link>
                  <Link>Jumia careers</Link>
                  <Link>Jumia Express</Link>
                  <Link>Terms and Conditions</Link>
                  <Link>Privacy Notice</Link>
                  <Link>Jumia Store Credit Terms & Conditions</Link>
                  <Link>Jumia Payment Information Guidelines</Link>
                  <Link>Cookies Notice</Link>
                  <Link>Jumia Global</Link>
                  <Link>Official Stores</Link>
                  <Link>Flash Sales</Link>
                  <Link>Black friday {year}</Link>
                </div>
            </div>


            <div className="need-help">
            <h2>Make money with jumia</h2>
                <div className="help-link">
                  <Link>Sell on Jumia</Link>
                  <Link>Vendor hub</Link>
                  <Link>Become a Sales Consultant</Link>
                  <Link>Become a Logistics Service Partner</Link>
                  <Link>Join the Jumia DA Academy</Link>
                  <Link>Join the Jumia KOL Program</Link>
                </div>
            </div>

            <div className="need-help">
              <h2>Jumia international</h2>
              <div className="int-country">
                <div className="help-link">
                  <Link>Algeria</Link>
                  <Link>Egypt</Link>
                  <Link>Ghana</Link>
                  <Link>Ivory Coast</Link>
                  <Link>Kenya</Link>
                </div>

                <div className="help-link">
                  <Link>Morocco</Link>
                  <Link>Senegal</Link>
                  <Link>Tunisia</Link>
                  <Link>Uganda</Link>
                  <Link>Zando</Link>
                </div>
              </div>

            </div>
          </div>


          {/* Icons  */}

          <div className="join">
            <div className="join_us">
              Join us on
              <div className="icons">
                <div className="fb">
                  <Link><FaFacebookF /></Link>
                  <Link><FaYoutube /></Link>
                  <Link><TiSocialInstagram /></Link>
                  <Link><FaXTwitter /></Link>
                </div>
              </div>
            </div>


            <div className="join_now">
              payment methods & delivery partners
              <div className="icons">
                <div className="fa">
                  <Link><SiVisa /></Link>
                  <Link><LiaDhl /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

