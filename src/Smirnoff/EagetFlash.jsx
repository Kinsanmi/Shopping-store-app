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

import { EagetImg, EagetPen } from "../Data/Products/Product";

// truck icon
import { BsTruck } from "react-icons/bs";

// cell icon
import { MdCall } from "react-icons/md";

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

import max from "../Data/Image Product/eaget32.jpg";
import max1 from "../Data/Image Product/eaget64.jpg";
import max2 from "../Data/Image Product/eaget1.jpg";
import max3 from "../Data/Image Product/1 (13).jpg";
import max4 from "../Data/Image Product/eaget7.jpg";
import max5 from "../Data/Image Product/1 (10).jpg";
import max6 from "../Data/Image Product/1 (11).jpg";
import max7 from "../Data/Image Product/1 (12).jpg";

export const EagetFlash = ({
  handleAddProduct,
  to,
  label,
  notificationMessage,
}) => {
  const year = new Date().getFullYear();

  // Active link when clicked
  const [isActive, setIsActive] = useState(false);

  const click = () => {
    setIsActive(true);
  };

  // Countdown timer

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const Timer = () => {
    const nextDay = new Date("May 12, 2024, 10:00:48").getTime();

    interval = setInterval(() => {
      const date = new Date().getTime();
      const timeRemaining = nextDay - date;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(timeRemaining / day);
      const hours = Math.floor((timeRemaining % day) / hour);
      const minutes = Math.floor((timeRemaining % hour) / minute);
      const seconds = Math.floor((timeRemaining % minute) / second);

      if (timeRemaining <= 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    Timer();
  });

  // image function

  const [sliderData, setSliderData] = useState(EagetImg[0]);

  const handleImage = (index) => {
    const slider = EagetImg[index];
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
            Electronics
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Accessories & Supplies
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Audio & Video Accessories
            <MdOutlineKeyboardArrowRight />
          </Link>
          <Link to="/store">
            Earphone & Headphone Accessories
            <MdOutlineKeyboardArrowRight />
          </Link>{" "}
          <span>20000mAh Mobile Power Charger Bank</span>
        </div>

        <div className="portable">
          <div className="portable-content">
            <div className="portable-img">
              {EagetPen.map((item, index) => {
                return (
                  <div key={index} className="port-context">
                    <div className="port-img">
                      <img
                        src={sliderData.value}
                        alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
                      />

                      <div className="port-image">
                        {EagetImg.map((item, i) => {
                          return (
                            <img
                              className={sliderData.id === i ? "border" : ""}
                              key={item.id}
                              src={item.value}
                              alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
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
                            Eaget Pen Flash Drive 3.0 128GB - Metal OTG Micro
                            USB Type-C
                            <span className="heart">
                              <FaRegHeart className="heart-icon" />
                            </span>
                          </div>
                          <div className="product">
                            Brand: <Link>Eaget</Link> |{" "}
                            <Link>Similar products from Eaget</Link>
                          </div>
                        </div>
                      </div>

                      <div className="flash-sales">
                        <div className="sales-info">
                          <div className="sales-flash">Flash sales</div>
                          <div className="timer">
                            Time left:
                            <div className="countdown">
                              <p>{timerHours}h:</p>
                            </div>
                            <div className="countdown">
                              <p>{timerMinutes}m:</p>
                            </div>
                            <div className="countdown">
                              <p>{timerSeconds}s</p>
                            </div>
                          </div>
                        </div>
                        <div className="sales-amount">
                          <div className="discount">
                            <h2>₦ 5,499</h2>
                            <h4>₦ 5,999</h4>
                            <h3>{item.percent}</h3>
                          </div>

                          <div className="progress-icon">
                            <div className="sales-item">In stock</div>
                            <div className="progress-bar-itel"></div>
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
                          <Link className="verify">
                            (1323 verified ratings)
                          </Link>
                        </div>
                      </div>

                      <div className="variation">VARIATION AVAILABLE</div>
                      <span className="size">128GB</span>
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
                <div className="more-detail-eaget">
                  <div className="kid-img">
                    <img
                      src={max}
                      alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
                    />
                  </div>
                  <div className="kid-img">
                    <img
                      src={max1}
                      alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
                    />
                  </div>
                  <div className="kid-img">
                    <img
                      src={max2}
                      alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
                    />
                  </div>
                  <div className="kid-img">
                    <img
                      src={max3}
                      alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
                    />
                  </div>
                  <div className="kid-img">
                    <img
                      src={max4}
                      alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
                    />
                  </div>
                  <div className="kid-img">
                    <img
                      src={max5}
                      alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
                    />
                  </div>
                  <div className="kid-img">
                    <img
                      src={max6}
                      alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
                    />
                  </div>
                  <div className="kid-img">
                    <img
                      src={max7}
                      alt="product_image_name-Eaget-Pen Flash Drive 3.0 128GB - Metal OTG Micro USB Type-C-2"
                    />
                  </div>
                </div>

                <div className="more-detail-pen">
                  Description:Color: silver stainless steelWeight: 11.6
                  gInterface: startSize: 47.3 x12.3 x4.6 mmChip: UDPSystem: for
                  Wind ows XP/ Vista / Win 7, Ma c OS 9.X and aboveRead Rate: up
                  to 30MB/SWrite Rate: up to 15MB/SProduct Features:Small size,
                  very portableConvenient to take, easy to useA class flash
                  chipBuilt-in the latest AES-256Bit encryptionStandard USB3.0
                  interface, transfer rate up to 5.0GB/S (theoretical
                  value)Stylish compact, sleek mirror effect, the spring
                  engaging designShockproof safety, quality assuranceLeading UDP
                  technology, using the latest waterproof design, accidentally
                  fell into the water taken out immediately after, dry it
                  properlyThe spring engaging design: Breaking/ fixing ring
                  design, design elements into the key ring, and more stylish
                  compactHigh shock resistance: 100% sealed design, dustproof,
                  anti-static, anti-magnetic, high temperature, 10 m altitude
                  free fall through the national testNo drive needed, only plug
                  it into port for the USB flash driveFeatureHigh Speed USB 3.0
                  performanceSleek, durable metal casingEasy-to-use password
                  protection for your private filesAbout
                  capacity:32GB=approximately 28GB-30GB64GB=approximately
                  58GB-60GBComparison:*1 Based on internal testing using a USB
                  3.0 compatible device. Read and write speeds may vary
                  depending on the read and write conditions, such as devices
                  you use and file sizes you read and/or write.*2 The Product is
                  labeled based on the memory chip (s) it contains, not the
                  amount of memory capacity available for data storage by the
                  end user. Part of the capacity is reserved for card
                  functionality.Approximate usable capacity is based on 1 GB =
                  1,073,741,824 bytes.Back Up, Transfer, and Secure DataUSB
                  Flash Drive offers an easy and secure way to share, move, and
                  back up your most important files. Featuring a compact design
                  with a retractable USB connector, this flash drive is ideal
                  for data users who need easy, portable access to their media
                  and personal files.High-Capacity Drive Stores Your Essential
                  FilesAvailable in capacities up to 64GB, the Cruzer Glide USB
                  Flash Drive lets you carry your favorite media with you.
                  You'll be able to store, share, and transport hours of HD
                  video, entire photo albums, your music library and important
                  documents. Fast Drag-and-Drop File TransferTo transfer files
                  to your drive, plug the flash drive into your computer's USB
                  port and drag the desired files into the drive's folder. No
                  additional software or drivers are required, so you can begin
                  transferring and backing up your files immediately.
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
                          <li>Free OTG Miro USB &TYPE C Transfer Interface</li>
                          <li>
                            Silver stainless steel, Small size, very portable
                          </li>
                          <li>
                            Leading UDP technology, using the latest waterproof
                            design
                          </li>
                          <li>Shockproof safety, quality assurance</li>
                          <li>
                            The spring engaging design: Breaking/ fixing ring
                            design, design elements into the key ring
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="spec-features">
                    <div className="features">
                      <h2>WHAT'S IN THE BOX</h2>
                      <div className="markup">
                        <ul>
                          <li>1 * USB Flash Drive 128GB</li>
                          <li>1 * Free OTG Micro USB Transfer Interface</li>
                          <li>1 * Free OTG Type-C Transfer Interface</li>
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
                            <span>SKU</span>: EA102EA4L614JNAFAMZ
                          </li>
                          <li>
                            <span>Product Line</span>: DangBa-cod
                          </li>
                          <li>
                            <span>Model</span>: USB-128
                          </li>
                          <li>
                            <span>Size (L x W x H cm)</span>: 4.73*1.23*0.46
                          </li>
                          <li>
                            <span>Weight(kg)</span>: 0.1
                          </li>
                          <li>
                            <span>Color</span>: Silver
                          </li>
                          <li>
                            <span>Shop Type</span>: E-shop Mall
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
                    <h3>DangBa-cod</h3>
                    <h4>
                      <span>74%</span> seller Score
                    </h4>
                    <h4>
                      <span>146</span> Followers
                    </h4>
                  </div>

                  <div className="seller-perform">
                    <h5>
                      Seller performance{" "}
                      <PiWarningCircleLight className="warn" />
                    </h5>
                  </div>

                  <div className="sell-order">
                    <h4>
                      {" "}
                      <MdStars className="star-rate" />
                      Order fulfillment rate: <span>Good</span>
                    </h4>
                  </div>
                  <div className="sell-order">
                    <h4>
                      {" "}
                      <IoIosCheckmarkCircle className="mark" />
                      Quality Score: <span>Average</span>
                    </h4>
                  </div>
                  <div className="sell-order">
                    <h4>
                      {" "}
                      <IoIosCheckmarkCircle className="mark" />
                      Customer Rating: <span>Average</span>
                    </h4>
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
