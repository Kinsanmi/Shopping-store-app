import React from 'react'

import { useState,useEffect } from 'react';

import {Link, animateScroll as Scroll} from 'react-scroll'

// Arrow icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import jumia from '../Components/common/logo.png';

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

import { IoMdStar,IoMdStarHalf  } from "react-icons/io";


// Mark icon
import { IoIosCheckmarkCircle } from "react-icons/io";

// Warning icon
import { PiWarningCircleLight } from "react-icons/pi";



// cart icon
import { MdOutlineShoppingCart } from "react-icons/md";

// close icon
import { IoMdCloseCircle } from "react-icons/io";


import { BluetoothImg, BluetoothSelfie } from '../Data/Products/Product';

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



export const Bluetooth = ({handleAddProduct, to,label}) => {

    const year = new Date().getFullYear();


    // Active link when clicked
    const [isActive, setIsActive] = useState(false);

    const click = ()=>{
        setIsActive(true);
    }


    // Countdown timer

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();



    let interval;

    const Timer = ()=>{
        const nextDay = new Date('December 28, 2023, 10:00:48').getTime();
        

        interval = setInterval(() => {
            const date = new Date().getTime();
            const timeRemaining = nextDay - date;


            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;


            const days = Math.floor(timeRemaining / day);
            const hours = Math.floor((timeRemaining % day)/hour);
            const minutes = Math.floor((timeRemaining % hour)/minute);
            const seconds = Math.floor((timeRemaining % minute)/second);


            if(timeRemaining <=0){
                clearInterval(interval.current);
            }else{
                setTimerDays(days) 
                setTimerHours(hours) 
                setTimerMinutes(minutes) 
                setTimerSeconds(seconds) 
            }
        });
    }


    useEffect(()=>{
        Timer()
    });


    // image function

    const [sliderData, setSliderData] = useState(BluetoothImg[0])

    const handleImage = (index)=>{
        const slider = BluetoothImg[index]
        setSliderData(slider);
    }

  return (
    <>
    <main className="clear-page">
        <div className="link_page">
            <Link to='/store'>Home<MdOutlineKeyboardArrowRight /></Link>
            <Link to='/store'>Phone & Tablets<MdOutlineKeyboardArrowRight /></Link>
            <Link to='/store'>Mobilee Phone Accessories<MdOutlineKeyboardArrowRight /></Link>
            <Link to='/store'>Selfie Sticks & Tripods<MdOutlineKeyboardArrowRight /></Link>
            <Link to='/store'>Selfie Sticks<MdOutlineKeyboardArrowRight /></Link> <span>Bluetooth selfie stick tripod + fill light + shutter remote</span>
        </div>

        <div className="portable">
            <div className="portable-content">
                <div className="portable-img">
                    {BluetoothSelfie.map((item, index)=>{
                        return (
                        <div key={index} className="port-context">
                        <div className="port-img">
                            <img src={sliderData.value} alt="product_image_name-Generic-Bluetooth Selfie Stick Tripod + Fill Light +Shutter Remote-1" />

                            <div className="port-image">
                                {BluetoothImg.map((item, i)=>{
                                    return (
                                        <img className={sliderData.id===i ? 'border' : ''} key={item.id} src={item.value} alt='product_image_name-Generic-Bluetooth Selfie Stick Tripod + Fill Light +Shutter Remote-1' onClick={()=> handleImage(i)} />
                                    )
                                })}
                            </div>

                            <div className="product-share">
                                SHARE THIS PRODUCT
                                <div className="product-icon">
                                    <LiaFacebook className='facebook' />
                                    <RiTwitterXLine className='twitter' />
                                </div>
                            </div>
                        </div>
                        <div className="port-desc">
                            <div className="drink">
                                <div className="drink-can">
                                    <div className="drink-text">Bluetooth Selfie Stick Tripod + Fill Light + Shutter Remote<span className="heart"><FaRegHeart className='heart-icon' /></span></div>
                                {/* <div className="product">Brand: <Link>Guinness</Link> | <Link>Similar products from Guinness</Link></div> */}
                                </div>
                            </div>

                            <div className="flash-sales">
                                <div className="sales-info">
                                    <div className="sales-flash">Flash sales</div>
                                    <div className="timer">
                                        Time Left:
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
                                        <h2>₦ 4,550</h2>
                                        <h4>₦ 6,807</h4>
                                        <h3>{item.percent}</h3>
                                    </div>

                                    <div className="progress-icon">
                                        <div className="sales-item">77 items left</div>
                                        <div className="progress-bar-bluetooth"></div>
                                    </div>

                                </div>
                            </div>

                            <div className="shipping">
                                <div className="ship-fee"><span>+</span> shipping from <strong>₦ 250</strong> to LEKKI-AJAH (SANGOTEDO)</div>
                                <div className="rating-star">
                                    <div className="rating">
                                    <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf />
                                    </div>
                                    <Link className='verify'>(401 verified ratings)</Link>
                                </div>
                            </div>

                            {/* <div className="variation">VARIATION AVAILABLE</div>
                            <span className="size">one size fits all</span> */}

                            <div className="add_item">
                            <button className='btn-add' onClick={()=>{handleAddProduct(item)}}><MdOutlineShoppingCart className="cart_item" />Add to cart</button>
                            </div> 
                            <div className="promote">PROMOTIONS</div>
                            <div className="shield">
                                <div><IoShieldHalfOutline className='shield-icon' /></div>
                                <Link className='extra'>Need extra money? Loan up to N500,000 on the jumiaPay Android app.</Link>
                            </div>
                            <div className="shield">
                                <div><MdStars className='star' /></div>
                                <Link className='extra'>Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</Link>
                            </div>
                            <div className="shield">
                                <div><IoShieldHalfOutline className='shield-icon' /></div>
                                <Link className='extra'>Transfer up to N20,000 to any bank in Nigeria for FREE!</Link>
                            </div>
                        </div>
                        <div className="report"><Link>Report incorrect product information</Link></div>
                    </div>
                        )
                    })}
                </div>

                <div id='/product/detail' className="portable-detail">
                    <div className="port-detail">Product details</div>
                    <div className="more-detail">
                        <div className="spec-list-selfie">
                            <ul>
                                <li><span>Instructions:</span></li>   
                                <li>1. Long press to turn on the remote control switch. The blue indicator light of the remote control flashes.</li>  
                                <li>2. Turn on the phone's Bluetooth, search for new devices, and then connect.</li>  
                                <li>3. After the pairing and connection are completed, open the mobile phone camera software.</li>  
                                <li>4. For iphone can directly press the shutter of the remote control to take pictures.</li>  
                                <li>5. Most Android phones can also directly press the shutter control to take pictures.</li>  
                                <li></li>  
                                <li></li>  
                                <li><span>Product Parameter :</span></li> 
                                <li>Q02S (45 x 35 x 194~1045 mm)</li> 
                                <li>Hardware parameters (Selfie)</li> 
                                <li>Bluetooth version Bluetooth ： 4.0</li> 
                                <li>Transmission Frequency ：2.4GHz-2.4835GHz</li> 
                                <li>Working Voltage ： 3V</li> 
                                <li>Bluetooth distance ：10M</li> 
                                <li>Battery CR1632(CAN CHANGE)</li> 
                                <li>system ： Android 4.4 and above / iOS 5.1 and above</li> 
                                <li>Hardware parameters (fill light)</li> 
                                <li>RX Battery ： 70mha</li> 
                                <li>Charging Current ：DC5V/100mA</li> 
                                <li>Working Current ：100mA</li> 
                                <li>Consumed Power ：100mA</li> 
                                <li>Number of White light： 4 PCS</li> 
                                <li>Number of warm light ：4 PCS</li> 
                                <li>Playing Time 3 h</li> 
                                <li>White lamp brightness 6500K, </li> 
                                <li>whole lamp lumen: 45lm, power: 0.37W</li> 
                                <li>Yellow lamp brightness 3000K</li> 
                                <li>whole lamp lumen: 39lm</li> 
                                <li>power: 0.37WMixed </li> 
                                <li>lamp brightness 4500K</li> 
                                <li>whole lamp lumens: 54lm</li> 
                                <li>power: 0.41WLED </li> 
                                <li>lamp power 0.2W/PCS</li> 
                                <li>The light pattern warm light/cold light/cool and warm light 6-speed dimming</li> 
                                <li></li> 
                                <li></li> 
                                <li></li> 
                                <li></li> 
                                <li><span>packing list:</span></li> 
                                <li>1 x Tripod</li> 
                                <li>Wireless Bluetooth Selfie Stick x 1</li> 
                                <li>remote control x 1</li> 
                                <li>Charging cable x 1</li> 
                                <li>Manual x 1</li> 
                                <li>Color box x 1</li> 
                            </ul>
                        </div>
                    </div>
                    {/* <div className="detail-img">
                        <img src={max} alt="weight" />
                        <img src={max1} alt="weight" />
                        <img src={max2} alt="weight" />
                        <img src={max3} alt="weight" />
                        <img src={max4} alt="weight" />
                    </div> */}
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
                                            <li>Bluetooth Selfie Stick Tripod + Fill Light +Shutter Remote</li>
                                            <li>Bluetooth version Bluetooth: 4.0
                                            Bluetooth distance: 10M</li>
                                            <li>System: Android 4.4 and above/iOS 5.1 and above</li>
                                            <li>Hardware parameters</li>
                                            <li>Material: ABS + stainless steel (stainless steel)</li>
                                            <li>Mobile phone size: 58-92mm</li>
                                            <li>The tripod opens to a maximum height of 1030mm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="spec-detail">
                                <div className="spec-item">
                                    <h2>What's in the box</h2>
                                    <div className="spec-list">
                                        <ul>
                                            <li><span>packing list:</span></li>   
                                            <li>1 x Tripod</li>  
                                            <li>Wireless Bluetooth Selfie Stick x 1</li>  
                                            <li>remote control x 1</li>  
                                            <li>Charging cable x 1</li>  
                                            <li>Manual x 1</li>  
                                            <li>Color box x 1</li>  
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="spec-detail">
                                <div className="spec-item">
                                    <h2>Specifications</h2>
                                    <div className="spec-list">
                                        <ul>
                                            <li><span>SKU</span>:GE779EA1URMDCNAFAMZ</li>  
                                            <li><span>Model</span>: N/A</li>  
                                            <li><span>Size (L x W x H cm)</span>: 10x8x5</li>  
                                            <li><span>Weight (kg)</span>: 0.18</li>  
                                            <li><span>Color</span>: BLACK</li>  
                                            <li><span>Main Material</span>: PLASTIC+METAL</li>  
                                            <li><span>Shop Type</span>:  Jumia Mall</li>  
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
                            <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja
                                <Link className='a_more'>Details</Link> </p>
                        </div>

                        <div className="delivery-location">
                            <article className='delivery-place'>
                                <h3>Choose your location</h3>
                                <div className="site">
                                    <select name="region" id="region">
                                        <option value disabled>Please Select</option>
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
                                        <option value="24" selected>Lagos</option>
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
                                        <option value="1">Abule Egba (Agbado Ijaye Road)</option>
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
                                        <option value="24" selected>Apapa (Kiri kiri)</option>
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

                                <section className='door-btn'>
                                    <div>
                                        <article className='door-delivery'>
                                            <div className="truck"><BsTruck /></div>
                                            <div className='door-detail'>
                                                <div className='door-list'>
                                                    <h4>Door Delivery</h4>
                                                    <Link>Details</Link>
                                                </div>
                                                <div className='delivery-amount'>
                                                    <div className='amt'>Delivery Fee <span>₦ 620</span></div>
                                                    <div className='amt-ready'>Ready for delivery between <span>30 December</span> & <span>01 January</span> when you order within <span>3hrs 53mins</span></div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>


                                    <div>
                                        <article className='door-delivery'>
                                            <div className="truck"><BsTruck /></div>
                                            <div className='door-detail'>
                                                <div className='door-list'>
                                                    <h4>Pickup Station</h4>
                                                    <Link>Details</Link>
                                                </div>
                                                <div className='delivery-amount'>
                                                    <div className='amt'>Delivery Fee <span>₦ 250</span></div>
                                                    <div className='amt-ready'>Arriving at pickup station between  <span>30 December</span> & <span>01 January</span> when you order within <span>3hrs 53mins</span></div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </section>


                                <section>
                                    <div>
                                        <article className='door-delivery'>
                                            <div className="truck"><BsTruck /></div>
                                            <div className='door-detail'>
                                                <div className='door-list'>
                                                    <h4>Return Policy</h4>
                                                </div>
                                                <div className='delivery-amount'>
                                                    <div className='amt-ready'>Free return within 7 days of ALL eligible items <Link>Details</Link></div>
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
                                <h3>GUEETON-COD</h3>
                                <h4><span>74%</span> seller Score</h4>
                                <h4><span>1145</span> Followers</h4>
                            </div>

                            <div className="seller-perform">
                                <h5>Seller performance <PiWarningCircleLight className='warn' /></h5>
                            </div>

                            <div className="sell-order">
                                <h4> <MdStars className='star-rate' />Order fulfillment rate: <span>Excellent</span></h4>
                            </div>
                            <div className="sell-order">
                                <h4> <IoMdCloseCircle className='poor-rate' />Quality Score: <span>Poor</span></h4>
                            </div>
                            <div className="sell-order">
                                <h4> <MdStars className='star-rate' />Customer Rating: <span>Good</span></h4>
                            </div>
                        </div>
                    </div>

                    <Link to={to} className={isActive ? 'active' : ''} onClick={click}>{label}</Link>
                    <div className="sell-detail">
                        <div className="delivery-detail">
                            <div className="product-detail">
                                <Link to='/product/detail'
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={600}
                                offset={-80}
                                > <MdOutlineDescription className='message' />Product details</Link>
                            </div>
                            <div className="product-detail">
                                <Link
                                to='/product/spec'
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                > <MdOutlineDescription className='message' />specifications</Link>
                            </div>
                            <div className="product-detail">
                                <Link> <BiMessageError className='message' />Verified customer feedback</Link>
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
    </main>
    </>
  )
}
