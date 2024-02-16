import React, { useEffect } from "react";
/* import { Link } from 'react-router-dom'; */
import { useState } from "react";

import { Link, animateScroll as Scroll } from "react-scroll";

// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import "../Styles/Portable.css";

import jumia from "../Components/common/logo.png";

// Mail icon
import { MdEmail } from "react-icons/md";

// Facebook icon
import { FaFacebookF } from "react-icons/fa";

// cell icon
import { MdCall } from "react-icons/md";

// Youtube icon
import { FaYoutube, FaXTwitter } from "react-icons/fa6";

// Visa icons
import { SiVisa } from "react-icons/si";

// instagram icon
import { TiSocialInstagram } from "react-icons/ti";

// DHL icon
import { LiaDhl } from "react-icons/lia";

// Heart icon
import { FaRegHeart } from "react-icons/fa";

import { IoMdStar, IoMdStarHalf } from "react-icons/io";

import { Notification } from "../Components/Loading/Notification";

// Mark icon
import { IoIosCheckmarkCircle } from "react-icons/io";

// Warning icon
import { PiWarningCircleLight } from "react-icons/pi";

// cart icon
import { MdOutlineShoppingCart } from "react-icons/md";

import { BM800Img, BM800_Microphone } from "../Data/Products/Product";

// truck icon
import { BsTruck } from "react-icons/bs";

// Note icon
import { MdOutlineDescription } from "react-icons/md";

// Shield icon
import { IoShieldHalfOutline } from "react-icons/io5";

// Md star icon
import { MdStars } from "react-icons/md";

// facebook
import { LiaFacebook } from "react-icons/lia";

// Twitter
import { RiTwitterXLine } from "react-icons/ri";

import { BiMessageError } from "react-icons/bi";

import feature from "../Data/Image Product/113fb7d08c77911353074b61c646a98c.jpg";

import spec from "../Data/Image Product/54e33f0d4f5c48142b2a5a6332ffe792.jpg";

export const BM800 = ({ handleAddProduct, to, label, notificationMessage }) => {
  const year = new Date().getFullYear();

  // Active link when clicked
  const [isActive, setIsActive] = useState(false);

  const click = () => {
    setIsActive(true);
  };

  // image function

  const [sliderData, setSliderData] = useState(BM800Img[0]);

  const handleImage = (index) => {
    const slider = BM800Img[index];
    setSliderData(slider);
  };

  return (
    <>
      <main className="clear-page">
        <div className="link_page">
          <Link to="/store">
            Home
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            MUsical Instrument
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Microphones & Accessories
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Microphones
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            <MdOutlineKeyboardArrowRight />
            Condenser Microphone
          </Link>{" "}
          <span>
            BM800 Condenser Microphone Recording Stand Large Diaphragm Live Set
            - Black Silver
          </span>
        </div>

        <div className="portable">
          <div className="portable-content">
            <div className="portable-img">
              {BM800_Microphone.map((item, index) => {
                return (
                  <div key={index} className="port-context">
                    <div className="port-img">
                      <img
                        src={sliderData.value}
                        alt="product_image_name-Generic-BM800 Condenser Microphone Recording Stand Large Diaphragm Live Set - Black Silver-1"
                      />

                      <div className="port-image">
                        {BM800Img.map((item, i) => {
                          return (
                            <img
                              className={sliderData.id === i ? "border" : ""}
                              key={item.id}
                              src={item.value}
                              alt="product_image_name-Generic-BM800 Condenser Microphone Recording Stand Large Diaphragm Live Set - Black Silver-1"
                              onClick={() => handleImage(i)}
                            />
                          );
                        })}
                      </div>

                      <div className="product-share">
                        SHARE THIS PRODUCT
                        <div className="product-icon">
                          <LiaFacebook className="facebook" />
                          <RiTwitterXLine className="twitter" />
                        </div>
                      </div>
                    </div>
                    <div className="port-desc">
                      <div className="drink">
                        <div className="drink-can">
                          <div className="drink-text">
                            BM800 Condenser Microphone Recording Stand Large
                            Diaphragm Live Set - Black Silver
                            <span className="heart">
                              <FaRegHeart className="heart-icon" />
                            </span>
                          </div>
                          {/* <div className="product">Brand: <Link>itel</Link> | <Link>Similar products from itel</Link></div> */}
                        </div>
                      </div>

                      <div className="flash-sales-item">
                        <div className="sales-amount">
                          <div className="discount">
                            <h2>₦ 15,940</h2>
                            <h4>₦ 25,940</h4>
                            <h3>{item.percent}</h3>
                          </div>

                          <div className="progress-icon">
                            <div className="sales-item">Few units left</div>
                            <div className="progress-bar-nivea"></div>
                          </div>
                        </div>
                      </div>

                      <div className="shipping">
                        <div className="ship-fee">
                          <span>+</span> shipping from <strong>₦ 250</strong> to
                          LEKKI-AJAH (SANGOTEDO)
                        </div>
                        <div className="rating-star">
                          <div className="rating">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStarHalf />
                          </div>
                          <Link className="verify">(15 verified ratings)</Link>
                        </div>
                      </div>
                      <div className="add_item">
                        <div className="call">
                          <MdCall className="ring" />
                        </div>
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
                          <IoShieldHalfOutline className="shield-icon" />
                        </div>
                        <Link className="extra">
                          Need extra money? Loan up to N500,000 on the jumiaPay
                          Android app.
                        </Link>
                      </div>
                      <div className="shield">
                        <div>
                          <MdStars className="star" />
                        </div>
                        <Link className="extra">
                          Enjoy cheaper shipping fees when you select a PickUp
                          Station at checkout.
                        </Link>
                      </div>
                      <div className="shield">
                        <div>
                          <IoShieldHalfOutline className="shield-icon" />
                        </div>
                        <Link className="extra">
                          Transfer up to N20,000 to any bank in Nigeria for
                          FREE!
                        </Link>
                      </div>
                    </div>
                    <div className="report">
                      <Link>Report incorrect product information</Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div id="/product/detail" className="portable-detail">
              <div className="port-detail">Product details</div>
              <div className="detail">
                <div className="more-detail">
                  BM 800 Professional Condenser Microphone bm-800 studio
                  condenser microphone for KTV radio broadcast singing recording
                  computer
                  <img src={feature} alt="Features" />
                  1.BM-800 professional recording microphone small diaphragm
                  condenser microphone2.For Professional Computer Audio
                  Condenser 3.5mm Wired BM 800 Studio Vocal Recording Microphone
                  KTV Karaoke + Microphone Stand3.Ideal for broadcast studios,
                  voiceover studios, stages, TV stations, etc. Scissor Arm
                  Desktop Microphone Stand and Shock Filter4. Stable, durable
                  and affordable desktop microphone stand; Double braced arms
                  add strength to support much more weight; Foldable arms -
                  minimize carry size and easy to store; Scissor arm -
                  completely flexible adjust your desired angle and height5.
                  Adjustable clamp easily mounts to desk, securely attaches to
                  any mic stand for easy installation and convenient use. Two
                  suspension springs on each boom arm for added stability.6.
                  Dual Audio Port - Connect microphone input and
                  earphone/speaker output at the same time. 1.BM-800
                  professional recording microphone small diaphragm condenser
                  microphone2.For Professional Computer Audio Condenser 3.5mm
                  Wired BM 800 Studio Vocal Recording Microphone KTV Karaoke +
                  Microphone Stand3.Ideal for broadcast studios, voiceover
                  studios, stages, TV stations, etc. Scissor Arm Desktop
                  Microphone Stand and Shock Filter4. Stable, durable and
                  affordable desktop microphone stand; Double braced arms add
                  strength to support much more weight; Foldable arms - minimize
                  carry size and easy to store; Scissor arm - completely
                  flexible adjust your desired angle and height5. Adjustable
                  clamp easily mounts to desk, securely attaches to any mic
                  stand for easy installation and convenient use. Two suspension
                  springs on each boom arm for added stability.6. Dual Audio
                  Port - Connect microphone input and earphone/speaker output at
                  the same time.
                  <img src={spec} alt="Specification" />
                  <div className="spec-list">
                    <ul>
                      <li>Microphone material: steel mesh + zinc alloy tube</li>
                      <li>Frequency response: 20hz-20khz</li>
                      <li>Sensitivity: 45dB ± 1db</li>
                      <li>Output impedance: 150±30% (1khz)</li>
                      <li>Equivalent sound level 16 dba</li>
                      <li>Current: 3mA</li>
                      <li>Signal to noise ratio: 78 decibels</li>
                      <li>3.5mm microphone output interface</li>
                      <li>Cable length: 2.5m</li>
                      <li>Professional studio microphone</li>
                      <li>
                        with 3.5mm condenser audio cable for radio broadcast
                      </li>
                      <li>Very sensitive pickup</li>
                      <li>Soft sounds generally more sensitive </li>
                      <li>Adjustable table clamp</li>
                      <li>
                        Adjustable clamp for easy desk mounting, attaches
                        securely to any microphone stand to make it easy to set
                        up and use{" "}
                      </li>
                      <li>
                        Folding arms minimize transport size and are easy to
                        store,
                      </li>
                      <li>
                        fully flexible scissor arms - adjust to desired angle
                        and height{" "}
                      </li>
                      <li>
                        For professional computer audio 3.5mm condenser with BM
                        800cable studio microphone KTV Karaoke voice recording
                        mic + microphone stand
                      </li>
                      <li>
                        Ideal for radio studio, vocal sound studio, stages, TV
                        stations, etc. Desktop Microphone Stand and Boom Filter
                        Shockproof Microphone and Shockmount
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="/product/spec" className="portable-spec">
              <div className="spec">
                <div className="port-detail">Specification</div>
                <div className="spec-info">
                  <div className="spec-features">
                    <div className="features">
                      <h2>Key Features</h2>
                      <div className="markup">
                        <ul>
                          <li>
                            Microphone material: steel mesh + zinc alloy tube
                          </li>
                          <li>Frequency response: 20hz-20khz</li>
                          <li>Sensitivity: 45dB ± 1db</li>
                          <li>Output impedance: 150±30% (1khz)</li>
                          <li>Equivalent sound level 16 dba</li>
                          <li>Current: 3mA</li>
                          <li>Signal to noise ratio: 78 decibels</li>
                          <li>3.5mm microphone output interface</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="spec-detail">
                    <div className="spec-item">
                      <h2>WHAT'S IN THE BOX</h2>
                      <div className="spec-list">
                        <ul>
                          <li>
                            1 X zinc alloy microphone 1 X black splash net 15.5
                            cm1 X Black Plastic Shock Frame1 X Microphone Black
                            Windproof Cotton1 X Black Iron Clip Base1 X 2.5m
                            black audio cable1 X black bracket 38*37cm1 X
                            English Instruction Manual{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="spec-detail">
                    <div className="spec-item">
                      <h2>Specifications</h2>
                      <div className="spec-list">
                        <ul>
                          <li>
                            <span>SKU</span>: GE779MI3R6JQJNAFAMZ
                          </li>
                          <li>
                            <span>Product Line</span>: Lebaiqi Store-COD
                          </li>
                          <li>
                            <span>Model</span>: BM800 Condenser Microphone
                          </li>
                          <li>
                            <span>Production Country</span>: China
                          </li>
                          <li>
                            <span>Weight(kg)</span>: 0.55
                          </li>
                          <li>
                            <span>Color</span>: Black/Sliver
                          </li>
                          <li>
                            <span>Main Material</span>: ABS
                          </li>
                          <li>
                            <span>From the Manufacturer</span>: N/A
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="delivery-context">
            <div className="delivery-content">
              <div className="delivery-text">
                <h2>Delivery & returns</h2>
                <div className="free-delivery">
                  <p>
                    Free delivery on thousands of products in Lagos, Ibadan &
                    Abuja
                    <Link className="a_more">Details</Link>{" "}
                  </p>
                </div>

                <div className="delivery-location">
                  <article className="delivery-place">
                    <h3>Choose your location</h3>
                    <div className="site">
                      <select name="region" id="region">
                        <option value disabled>
                          Please Select
                        </option>
                        <option value="1">Abia</option>
                        <option value="2">Adamawa</option>
                        <option value="3">Akwa Ibom</option>
                        <option value="4">Anambra</option>
                        <option value="5">Bauchi</option>
                        <option value="6">Bayelsa</option>
                        <option value="7">Benue</option>
                        <option value="8">Borno</option>
                        <option value="9">Cross River</option>
                        <option value="10">Delta</option>
                        <option value="11">Ebonyi</option>
                        <option value="12">Edo</option>
                        <option value="13">Ekiti</option>
                        <option value="14">Enugu</option>
                        <option value="15">Federal Capital Territory</option>
                        <option value="16">Gombe</option>
                        <option value="17">Imo</option>
                        <option value="18">Jigawa</option>
                        <option value="19">Kaduna</option>
                        <option value="20">Kano</option>
                        <option value="21">Kebbi</option>
                        <option value="22">Kogi</option>
                        <option value="23">Kwara</option>
                        <option value="24" selected>
                          Lagos
                        </option>
                        <option value="25">Nasarawa</option>
                        <option value="26">Niger</option>
                        <option value="27">Ogun</option>
                        <option value="28">ondo</option>
                        <option value="29">Osun</option>
                        <option value="30">Oyo</option>
                        <option value="31">Plateau</option>
                        <option value="32">Rivers</option>
                        <option value="33">Sokoto</option>
                        <option value="34">Yobe</option>
                      </select>
                    </div>
                    <div className="site">
                      <select name="city" id="city">
                        <option value="1">
                          Abule Egba (Agbado Ijaye Road)
                        </option>
                        <option value="2">Abule Egba (Ajasa Command Rd)</option>
                        <option value="3">Abule Egba (Ajegunle)</option>
                        <option value="4">Abule Egba (Alagbado)</option>
                        <option value="5">Abule Egba (Alakuko)</option>
                        <option value="6">Abule Egba (Ekoro road)</option>
                        <option value="7">Abule Egba (Meiran Road)</option>
                        <option value="8">Abule Egba (New Oko Oba)</option>
                        <option value="9">Abule Egba (Old Otta Road)</option>
                        <option value="10">Agbara</option>
                        <option value="11">Agege (Ajuwon Akute Road)</option>
                        <option value="12">Agege (Dopemu)</option>
                        <option value="13">Agege (Iju Road)</option>
                        <option value="14">Agege (Old Abeokuta Road)</option>
                        <option value="15">Agege (Old Otta Road)</option>
                        <option value="16">Agege (Orile Agege)</option>
                        <option value="17">AGUNGI (LEKKI)</option>
                        <option value="18">ALFA BEACH</option>
                        <option value="19">AMUWO</option>
                        <option value="20">ANTHONY VILLAGE</option>
                        <option value="21">Apapa (Ajegunle)</option>
                        <option value="22">Apapa (Amukoko)</option>
                        <option value="23">Apapa (GRA)</option>
                        <option value="24" selected>
                          Apapa (Kiri kiri)
                        </option>
                        <option value="25">Apapa (Olodi)</option>
                        <option value="26">Apapa (Suru Alaba)</option>
                        <option value="27">Apapa (Tincan)</option>
                        <option value="28">Apapa (Warf Rd)</option>
                        <option value="29">AWOYAYA</option>
                        <option value="30">Awoyaya-Container bustop</option>
                        <option value="31">Awoyaya-Eko Akete Estate</option>
                        <option value="32">Awoyaya-Eputu</option>
                        <option value="33">Awoyaya-Gbetu Iwerekun Road</option>
                        <option value="34">Awoyaya-Idowu Eletu</option>
                      </select>
                    </div>

                    <section className="door-btn">
                      <div>
                        <article className="door-delivery">
                          <div className="truck">
                            <BsTruck />
                          </div>
                          <div className="door-detail">
                            <div className="door-list">
                              <h4>Door Delivery</h4>
                              <Link>Details</Link>
                            </div>
                            <div className="delivery-amount">
                              <div className="amt">
                                Delivery Fee <span>₦ 620</span>
                              </div>
                              <div className="amt-ready">
                                Ready for delivery between{" "}
                                <span>30 December</span> &{" "}
                                <span>01 January</span> when you order within{" "}
                                <span>3hrs 53mins</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div>
                        <article className="door-delivery">
                          <div className="truck">
                            <BsTruck />
                          </div>
                          <div className="door-detail">
                            <div className="door-list">
                              <h4>Pickup Station</h4>
                              <Link>Details</Link>
                            </div>
                            <div className="delivery-amount">
                              <div className="amt">
                                Delivery Fee <span>₦ 250</span>
                              </div>
                              <div className="amt-ready">
                                Arriving at pickup station between{" "}
                                <span>30 December</span> &{" "}
                                <span>01 January</span> when you order within{" "}
                                <span>3hrs 53mins</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </section>

                    <section>
                      <div>
                        <article className="door-delivery">
                          <div className="truck">
                            <BsTruck />
                          </div>
                          <div className="door-detail">
                            <div className="door-list">
                              <h4>Return Policy</h4>
                            </div>
                            <div className="delivery-amount">
                              <div className="amt-ready">
                                Free return within 7 days of ALL eligible items{" "}
                                <Link>Details</Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </section>
                  </article>
                </div>
              </div>

              <div className="sell-info">
                <div className="delivery-text">
                  <h2>Seller information</h2>
                  <div className="free-delivery">
                    <h3>E-shop</h3>
                    <h4>
                      <span>100%</span> seller Score
                    </h4>
                  </div>

                  <div className="seller-perform">
                    <h5>
                      Seller performance{" "}
                      <PiWarningCircleLight className="warn" />
                    </h5>
                  </div>
                </div>
              </div>

              <Link
                to={to}
                className={isActive ? "active" : ""}
                onClick={click}
              >
                {label}
              </Link>
              <div className="sell-detail">
                <div className="delivery-detail">
                  <div className="product-detail">
                    <Link
                      to="/product/detail"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={600}
                      offset={-80}
                    >
                      {" "}
                      <MdOutlineDescription className="message" />
                      Product details
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link
                      to="/product/spec"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={-80}
                    >
                      {" "}
                      <MdOutlineDescription className="message" />
                      specifications
                    </Link>
                  </div>
                  <div className="product-detail">
                    <Link>
                      {" "}
                      <BiMessageError className="message" />
                      Verified customer feedback
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          {/* Jumia email section */}
          <div className="bg-mb">
            <div className="row_footer">
              <div className="col4">
                <img src={jumia} alt="" />
              </div>
              <div className="text-input">
                <div className="subs">
                  <div className="pbs">New to E-Shop?</div>
                  Subscribe to our newsletter to get updates on our latest
                  offers!
                </div>

                <form action="" method="post">
                  <div className="input">
                    <div className="fi">
                      <MdEmail className="email" />
                      <input
                        type="email"
                        placeholder="Enter E-mail Address"
                        required
                        className="fi_new"
                        name="email"
                        aria-label="E-mail"
                      />
                    </div>

                    <div className="find_type">
                      <button name="gender" value="male" className="gender">
                        Male
                      </button>
                      <button name="gender" value="female" className="gender">
                        Female
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col_1">
                <div className="col-flex">
                  <div className="svg">Svg icons</div>

                  <div className="app">
                    <div className="app-text">DOWNLOAD E-Shop FREE APP</div>
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
                    <Link>How to shop on E-Shop</Link>
                    <Link>Delivery options and timelines</Link>
                    <Link>How to return a product on E-Shop</Link>
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
                <h2>about E-Shop</h2>
                <div className="help-link">
                  <Link>About Us</Link>
                  <Link>E-Shop careers</Link>
                  <Link>E-Shop Express</Link>
                  <Link>Terms and Conditions</Link>
                  <Link>Privacy Notice</Link>
                  <Link>E-Shop Store Credit Terms & Conditions</Link>
                  <Link>E-Shop Payment Information Guidelines</Link>
                  <Link>Cookies Notice</Link>
                  <Link>E-Shop Global</Link>
                  <Link>Official Stores</Link>
                  <Link>Flash Sales</Link>
                  <Link>Black friday {year}</Link>
                </div>
              </div>

              <div className="need-help">
                <h2>Make money with E-Shop</h2>
                <div className="help-link">
                  <Link>Sell on E-Shop</Link>
                  <Link>Vendor hub</Link>
                  <Link>Become a Sales Consultant</Link>
                  <Link>Become a Logistics Service Partner</Link>
                  <Link>Join the E-Shop DA Academy</Link>
                  <Link>Join the E-Shop KOL Program</Link>
                </div>
              </div>

              <div className="need-help">
                <h2>E-Shop international</h2>
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
                    <Link>
                      <FaFacebookF />
                    </Link>
                    <Link>
                      <FaYoutube />
                    </Link>
                    <Link>
                      <TiSocialInstagram />
                    </Link>
                    <Link>
                      <FaXTwitter />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="join_now">
                payment methods & delivery partners
                <div className="icons">
                  <div className="fa">
                    <Link>
                      <SiVisa />
                    </Link>
                    <Link>
                      <LiaDhl />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {notificationMessage && <Notification />}
    </>
  );
};
