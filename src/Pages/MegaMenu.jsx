import "../Styles/MegaMenu.css";
import { Link } from "react-router-dom";

// bsb image
import bsb from "../Image/bsb.jpg";

// Jforce inage
import Jforce from "../Image/JForce.png";

// Supermarket icons
// baby product icon
import { LuApple, LuBaby } from "react-icons/lu";

// Health icon
import { MdOutlineHealthAndSafety } from "react-icons/md";

// home icon
import { AiOutlineHome } from "react-icons/ai";

// phone icon
import { MdOutlinePhoneAndroid } from "react-icons/md";

// computer icon
import { MdOutlineComputer } from "react-icons/md";

// game icon
import { IoGameControllerOutline } from "react-icons/io5";

// dumbbell icon
import { CiDumbbell } from "react-icons/ci";

// fashion icon
import { GiClothes } from "react-icons/gi";

// Electronic icons
import { CgSmartHomeRefrigerator } from "react-icons/cg";

// Appliance icon
import { GiCookingPot } from "react-icons/gi";

import { AiOutlineMessage } from "react-icons/ai";
import { useEffect, useState } from "react";

import { images } from "./images";

export const MegaMenu = () => {
  const [currentView, setCurrentView] = useState(0);



  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentView((prevView) => (prevView + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <>
      {/* Mega Navigation menu */}
      <div className="header-main mobile-hide">
        <div className="content">
          <div className="wrapper flex-item">
            <div className="left">
              <div className="dpt-cat">
                <div className="dpt-menu">
                  <ul className="second-links">
                    <li className="has-child home-kit">
                      <Link className="kit">
                        <LuApple className="home" />
                        <div className="icon-large"> Supermarket</div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>Food cupboard</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>Grains & rice</Link>
                              </li>
                              <li>
                                <Link>Pasta & Noodles</Link>
                              </li>
                              <li>
                                <Link>Breakfast foods</Link>
                              </li>
                              <li>
                                <Link>Herbs, Spices & Seasoning</Link>
                              </li>
                              <li>
                                <Link>FLOURS & meals </Link>
                              </li>
                              <li>
                                <Link>Malt Drinks </Link>
                              </li>
                              <li>
                                <Link>coffee</Link>
                              </li>
                              <li>
                                <Link>water</Link>
                              </li>
                              <li>
                                <Link>cooking oli</Link>
                              </li>
                              <li>
                                <Link>juices</Link>
                              </li>
                              <li>
                                <Link>soft drinks </Link>
                              </li>
                              <li>
                                <Link>canned & packaged foods </Link>
                              </li>
                              <li>
                                <Link>candy & chocolate</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>Beverages</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>soft drinks</Link>
                              </li>
                              <li>
                                <Link>milk & cream</Link>
                              </li>
                              <li>
                                <Link>Energy drink</Link>
                              </li>
                              <li>
                                <Link>bottled beverages</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>Household cleaning</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>laundry</Link>
                              </li>
                              <li>
                                <Link>air fresheners</Link>
                              </li>
                              <li>
                                <Link>toilet paper & wipes</Link>
                              </li>
                              <li>
                                <Link>bathroom cleaners</Link>
                              </li>
                              <li>
                                <Link>dish washing</Link>
                              </li>
                              <li>
                                <Link>cleaning tools</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>beers, wine & spirits</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>beers</Link>
                              </li>
                              <li>
                                <Link>vodka</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>baby products</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>disposable diapers</Link>
                              </li>
                              <li>
                                <Link>bottle feeding</Link>
                              </li>
                              <li>
                                <Link>wipes & refills</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="has-child home-kit">
                      <Link className="kit">
                        <MdOutlineHealthAndSafety className="home" />
                        <div className="icon-large">Health & Beauty</div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>makeup</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>concealers & color correctors</Link>
                              </li>
                              <li>
                                <Link>foundation</Link>
                              </li>
                              <li>
                                <Link>powder</Link>
                              </li>
                              <li>
                                <Link>lipstick</Link>
                              </li>
                              <li>
                                <Link>eyeliner & kajal</Link>
                              </li>
                              <li>
                                <Link>mascara</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>personal care</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>skin care</Link>
                              </li>
                              <li>
                                <Link>bath & bathing accessories</Link>
                              </li>
                              <li>
                                <Link>sunscreens & tanning products</Link>
                              </li>
                              <li>
                                <Link>contraceptive & lubricants</Link>
                              </li>
                              <li>
                                <Link>piercing & tattoo supplies</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>fragrance</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>women's</Link>
                              </li>
                              <li>
                                <Link>men's</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>hair care</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>hair accessories</Link>
                              </li>
                              <li>
                                <Link>hair cutting tools</Link>
                              </li>
                              <li>
                                <Link>shampoo & conditioner</Link>
                              </li>
                              <li>
                                <Link>wigs & accessories</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>oral care</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>teeth whitening</Link>
                              </li>
                              <li>
                                <Link>toothbrushes </Link>
                              </li>
                              <li>
                                <Link>toothpaste</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>health care</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>first adi</Link>
                              </li>
                              <li>
                                <Link>medical supplies & equipment</Link>
                              </li>
                              <li>
                                <Link>alternative medicine</Link>
                              </li>
                              <li>
                                <Link>feminine care</Link>
                              </li>
                              <li>
                                <Link>diabetes care</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>vitamins & dietary supplements</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>herbal supplements</Link>
                              </li>
                              <li>
                                <Link>vitamins & minerals</Link>
                              </li>
                              <li>
                                <Link>supplements</Link>
                              </li>
                              <li>
                                <Link>multi & prenatal vitamins</Link>
                              </li>{" "}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="has-child home-kit">
                      <Link className="kit">
                        <AiOutlineHome className="home" />
                        Home & Office
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>home & kitchen</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>bath</Link>
                              </li>
                              <li>
                                <Link>bedding</Link>
                              </li>
                              <li>
                                <Link>home decor</Link>
                              </li>
                              <li>
                                <Link>home furniture</Link>
                              </li>
                              <li>
                                <Link>vacuums & floor care</Link>
                              </li>
                              <li>
                                <Link>wall art</Link>
                              </li>
                              <li>
                                <Link>cookware</Link>
                              </li>
                              <li>
                                <Link>bakeware</Link>
                              </li>
                              <li>
                                <Link>small appliances</Link>
                              </li>
                              <li>
                                <Link>cutlery & knife accessories</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>office products</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>office & school supplies</Link>
                              </li>
                              <li>
                                <Link>office furniture & lighting</Link>
                              </li>
                              <li>
                                <Link>packaging materials</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>Home & office furniture</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>kitchen & dinning</Link>
                              </li>
                              <li>
                                <Link>lighting</Link>
                              </li>
                              <li>
                                <Link>stationery</Link>
                              </li>
                              <li>
                                <Link>storage & organization</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-child home-kit">
                      <Link className="kit">
                        <GiCookingPot className="home" />
                        Appliances
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>small appliances</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>blenders</Link>
                              </li>
                              <li>
                                <Link>deep fryers</Link>
                              </li>
                              <li>
                                <Link>juicers</Link>
                              </li>
                              <li>
                                <Link>air fryers</Link>
                              </li>
                              <li>
                                <Link>rice cookers</Link>
                              </li>
                              <li>
                                <Link>toaster & ovens</Link>
                              </li>
                              <li>
                                <Link>microwaves</Link>
                              </li>
                              <li>
                                <Link>bundles</Link>
                              </li>
                              <li>
                                <Link>vacuum cleaners</Link>
                              </li>
                              <li>
                                <Link>kettles</Link>
                              </li>
                              <li>
                                <Link>yam pounders</Link>
                              </li>
                              <li>
                                <Link>irons</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>large appliances</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>washing machine</Link>
                              </li>
                              <li>
                                <Link>fridges</Link>
                              </li>
                              <li>
                                <Link>freezers</Link>
                              </li>
                              <li>
                                <Link>air conditioners</Link>
                              </li>
                              <li>
                                <Link>heaters</Link>
                              </li>
                              <li>
                                <Link>fans</Link>
                              </li>
                              <li>
                                <Link>air purifiers</Link>
                              </li>
                              <li>
                                <Link>water dispensers</Link>
                              </li>
                              <li>
                                <Link>generators & inverters</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row col"></div>
                        </div>
                      </div>
                    </li>

                    <li className="has-child home-kit">
                      <Link className="kit">
                        <MdOutlinePhoneAndroid className="home" />
                        <div className="icon-large">Phones and Tablets</div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>Mobile Phones</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>Smart phones</Link>
                              </li>
                              <li>
                                <Link>basic phones</Link>
                              </li>
                              <li>
                                <Link>refurbished phones</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>tablets</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>ipads</Link>
                              </li>
                              <li>
                                <Link>android tablets</Link>
                              </li>
                              <li>
                                <Link>education tablets</Link>
                              </li>
                              <li>
                                <Link>tablets accessories</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>Mobile accessories</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>accessories kits</Link>
                              </li>
                              <li>
                                <Link>adapters</Link>
                              </li>
                              <li>
                                <Link>batteries</Link>
                              </li>
                              <li>
                                <Link>battery chargers</Link>
                              </li>
                              <li>
                                <Link>bluetooth headsets</Link>
                              </li>
                              <li>
                                <Link>cables</Link>
                              </li>
                              <li>
                                <Link>car accessories</Link>
                              </li>
                              <li>
                                <Link>chargers</Link>
                              </li>
                              <li>
                                <Link>earphones & headsets </Link>
                              </li>
                              <li>
                                <Link>Micro SD cards</Link>
                              </li>
                              <li>
                                <Link>screen protectors</Link>
                              </li>
                              <li>
                                <Link>selfie sticks & tripods</Link>
                              </li>
                              <li>
                                <Link>smart watches</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>Top smartphones</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>iphones 11 pro max</Link>
                              </li>
                              <li>
                                <Link>samsung galaxy s10</Link>
                              </li>
                              <li>
                                <Link>iphone 11</Link>
                              </li>
                              <li>
                                <Link>nokia 7.2</Link>
                              </li>
                              <li>
                                <Link>huawei Y9 S</Link>
                              </li>
                              <li>
                                <Link>iphone XS Max</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>Top phone brands</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>samsung</Link>
                              </li>
                              <li>
                                <Link>apple </Link>
                              </li>
                              <li>
                                <Link>huawei</Link>
                              </li>
                              <li>
                                <Link>nokia</Link>
                              </li>
                              <li>
                                <Link>xiaomi</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="has-child home-kit">
                      <Link className="kit">
                        <MdOutlineComputer className="home" />
                        <div className="icon-large">Computing </div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>computer</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>desktops</Link>
                              </li>
                              <li>
                                <Link>laptops</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>data storages</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>external hard drives</Link>
                              </li>
                              <li>
                                <Link>USB flash drives</Link>
                              </li>
                              <li>
                                <Link>external solid state</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>printers</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>inkjet printers</Link>
                              </li>
                              <li>
                                <Link>laser printer</Link>
                              </li>
                              <li>
                                <Link>printer link & toner</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>computer accessories</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>keyboards & mice</Link>
                              </li>
                              <li>
                                <Link>uninterrupted power supply</Link>
                              </li>
                              <li>
                                <Link>memory cards</Link>
                              </li>
                              <li>
                                <Link>batteries</Link>
                              </li>
                              <li>
                                <Link>scanners</Link>
                              </li>
                              <li>
                                <Link>video projectors</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>top brands</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>hp</Link>
                              </li>
                              <li>
                                <Link>lenovo</Link>
                              </li>
                              <li>
                                <Link>apple</Link>
                              </li>
                              <li>
                                <Link>ASUS</Link>
                              </li>
                              <li>
                                <Link>huawei</Link>
                              </li>
                              <li>
                                <Link>microsoft</Link>
                              </li>
                              <li>
                                <Link>kingston</Link>
                              </li>
                              <li>
                                <Link>seagate</Link>
                              </li>
                              <li>
                                <Link>samsung</Link>
                              </li>
                              <li>
                                <Link>sandisk</Link>
                              </li>
                              <li>
                                <Link>toshiba</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-child home-kit">
                      <Link className="kit">
                        <CgSmartHomeRefrigerator className="home" />
                        <div className="icon-large">Electronics</div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>television</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>televisions</Link>
                              </li>
                              <li>
                                <Link>smart TVs</Link>
                              </li>
                              <li>
                                <Link>LED & LCD TVs</Link>
                              </li>
                              <li>
                                <Link>QLED & OLED TVs</Link>
                              </li>
                              <li>
                                <Link>DVD players & recorders </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>home audio</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>home theater system</Link>
                              </li>
                              <li>
                                <Link>receivers & amplifiers</Link>
                              </li>
                              <li>
                                <Link>sound bars</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>cameras & photos</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>digital cameras</Link>
                              </li>
                              <li>
                                <Link>projectors</Link>
                              </li>
                              <li>
                                <Link>video surveillance</Link>
                              </li>
                              <li>
                                <Link>camcorders</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>generators & portable power</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>generators</Link>
                              </li>
                              <li>
                                <Link>power inverters</Link>
                              </li>
                              <li>
                                <Link>solar & wind power</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col"></div>
                      </div>
                    </li>
                    <li className="has-child home-kit">
                      <Link className="kit">
                        <GiClothes className="home" />
                        <div className="icon-large">Fashion</div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>women's fashion</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>clothing</Link>
                              </li>
                              <li>
                                <Link>shoes</Link>
                              </li>
                              <li>
                                <Link>accessories</Link>
                              </li>
                              <li>
                                <Link>jewelry</Link>
                              </li>
                              <li>
                                <Link>handbags & wallets </Link>
                              </li>
                              <li>
                                <Link>underwear & sleepwear </Link>
                              </li>
                              <li>
                                <Link>maternity </Link>
                              </li>
                              <li>
                                <Link>dresses </Link>
                              </li>
                              <li>
                                <Link>traditional </Link>
                              </li>
                              <li>
                                <Link>beach & swimwear </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>kid's fashion</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>boy's fashion</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>men's fashion</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>clothing</Link>
                              </li>
                              <li>
                                <Link>shoes</Link>
                              </li>
                              <li>
                                <Link>accessories</Link>
                              </li>
                              <li>
                                <Link>underwear & sleepwear</Link>
                              </li>
                              <li>
                                <Link>traditional & cultural wear</Link>
                              </li>
                              <li>
                                <Link>t-shirt</Link>
                              </li>
                              <li>
                                <Link>polo shirts</Link>
                              </li>
                              <li>
                                <Link>trousers & chinos</Link>
                              </li>
                              <li>
                                <Link>sneakers</Link>
                              </li>
                              <li>
                                <Link>jewelry</Link>
                              </li>
                              <li>
                                <Link>jerseys</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>All fashion</Link>
                            </h4>
                            <ul></ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>watches</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>men's watches</Link>
                              </li>
                              <li>
                                <Link>women's watches</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>sunglasses</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>men's sunglasses</Link>
                              </li>
                              <li>
                                <Link>women's sunglasses</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>top brands</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>adidas</Link>
                              </li>
                              <li>
                                <Link>defacto</Link>
                              </li>
                              <li>
                                <Link>nike</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="has-child home-kit">
                      <Link className="kit">
                        <LuBaby className="home" />
                        <div className="icon-large">Baby Products</div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>apparel & accessories</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>baby boys</Link>
                              </li>
                              <li>
                                <Link>baby girls</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>diapering</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>disposable diapers</Link>
                              </li>
                              <li>
                                <Link>diaper bags </Link>
                              </li>
                              <li>
                                <Link>wipes & holders</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>baby & toddler toys</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>activity play centers</Link>
                              </li>
                              <li>
                                <Link>music & sound</Link>
                              </li>
                              <li>
                                <Link>bath toys</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>bathing & skin care</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>washcloths & towels</Link>
                              </li>
                              <li>
                                <Link>grooming & healthcare kits</Link>
                              </li>
                              <li>
                                <Link>skin care</Link>
                              </li>
                              <li>
                                <Link>bathing tubs & seats</Link>
                              </li>
                              <li>
                                <Link>Bathroom safety</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>feeding</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>bibs & burp cloths</Link>
                              </li>
                              <li>
                                <Link>breastfeeding</Link>
                              </li>
                              <li>
                                <Link>bottle-feeding</Link>
                              </li>
                              <li>
                                <Link>pacifiers & accessories</Link>
                              </li>
                              <li>
                                <Link>food storage</Link>
                              </li>
                              <li>
                                <Link>highchairs & booster seats</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>gear</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>backpacks & carriers</Link>
                              </li>
                              <li>
                                <Link>swings, jumpers & bouncers</Link>
                              </li>
                              <li>
                                <Link>walkers</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-child home-kit">
                      <Link className="kit">
                        <IoGameControllerOutline className="home" />
                        <div className="icon-large">Gaming</div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>playstation</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>playstation 5</Link>
                              </li>
                              <li>
                                <Link>playstation 4</Link>
                              </li>
                              <li>
                                <Link>playstation 3</Link>
                              </li>
                              <li>
                                <Link>playstation</Link>
                              </li>
                              <li>
                                <Link>playstation Vita</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>xbox</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>XBOX one</Link>
                              </li>
                              <li>
                                <Link>XBOX 360</Link>
                              </li>
                              <li>
                                <Link>XBOX</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>Nintendo</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>nintendo 3DS</Link>
                              </li>
                              <li>
                                <Link>nintendo DS</Link>
                              </li>
                              <li>
                                <Link>nintendo switch</Link>
                              </li>
                              <li>
                                <Link>nintendo wii</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>top games</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>FIFA '23 PS5</Link>
                              </li>
                              <li>
                                <Link>PES '23 PS4</Link>
                              </li>
                              <li>
                                <Link>god of war</Link>
                              </li>
                              <li>
                                <Link>spiderman</Link>
                              </li>
                              <li>
                                <Link>call of duty</Link>
                              </li>
                              <li>
                                <Link>assassin's creed valhalla</Link>
                              </li>
                              <li>
                                <Link>the last of us</Link>
                              </li>
                              <li>
                                <Link>the witcher 3</Link>
                              </li>
                              <li>
                                <Link>metal gear solid</Link>
                              </li>
                              <li>
                                <Link>madden NFL</Link>
                              </li>
                              <li>
                                <Link>far cry</Link>
                              </li>
                              <li>
                                <Link>grand theft auto</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-child home-kit">
                      <Link className="kit">
                        <CiDumbbell className="home" />
                        <div className="icon-large">Sporting goods</div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>cardio training</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>exercise bikes</Link>
                              </li>
                              <li>
                                <Link>treadmills</Link>
                              </li>
                              <li>
                                <Link>elliptical trainers</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>strength training equipment</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>core & abdominal trainers</Link>
                              </li>
                              <li>
                                <Link>dumbbells</Link>
                              </li>
                              <li>
                                <Link>bars</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>accessories</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>exercise bands</Link>
                              </li>
                              <li>
                                <Link>exercise mats</Link>
                              </li>
                              <li>
                                <Link>jump ropes</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>team sports</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>basketball</Link>
                              </li>
                              <li>
                                <Link>team sport accessories</Link>
                              </li>
                              <li>
                                <Link>tennis & racquet sports</Link>
                              </li>
                              <li>
                                <Link>swimming</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>outdoor & adventure</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>cycling</Link>
                              </li>
                              <li>
                                <Link>running</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row col"></div>
                        </div>
                      </div>
                    </li>

                    <li className="has-child home-kit">
                      <Link className="kit">
                        <AiOutlineMessage className="home" />
                        <div className="icon-large">Other categories</div>
                      </Link>
                      <div className="mega">
                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>toys & games</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>games</Link>
                              </li>
                              <li>
                                <Link>dress uo & pretend paly</Link>
                              </li>
                              <li>
                                <Link>sports & outdoor play</Link>
                              </li>
                              <li>
                                <Link>top toys & games</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>miscellaneous</Link>
                            </h4>
                            <ul></ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>books, movies and music</Link>
                            </h4>
                            <ul></ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>musical instrument</Link>
                            </h4>
                            <ul></ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>pet supplies</Link>
                            </h4>
                            <ul></ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row">
                            <h4>
                              <Link>official stores</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>adidas</Link>
                              </li>
                              <li>
                                <Link>nestle</Link>
                              </li>
                              <li>
                                <Link>xiaomi</Link>
                              </li>
                              <li>
                                <Link>huawei</Link>
                              </li>
                              <li>
                                <Link>apple</Link>
                              </li>
                              <li>
                                <Link>intel</Link>
                              </li>
                              <li>
                                <Link>reckitt benckiser</Link>
                              </li>
                              <li>
                                <Link>binatone</Link>
                              </li>
                              <li>
                                <Link>nexus</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex-col">
                          <div className="row ">
                            <h4>
                              <Link>grocery</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link>food cupboards</Link>
                              </li>
                              <li>
                                <Link>baby products</Link>
                              </li>
                              <li>
                                <Link>plastic & paper products</Link>
                              </li>
                              <li>
                                <Link>drinks</Link>
                              </li>
                              <li>
                                <Link>hygiene</Link>
                              </li>
                              <li>
                                <Link>household clothing</Link>
                              </li>
                              <li>
                                <Link>beer, wine & spirits</Link>
                              </li>
                            </ul>
                          </div>

                          <div className="row col">
                            <h4>
                              <Link>garden & outdoor</Link>
                            </h4>
                            <ul></ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>industrial & scientific</Link>
                            </h4>
                            <ul></ul>
                          </div>
                          <div className="row col">
                            <h4>
                              <Link>services</Link>
                            </h4>
                            <ul></ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* swiper */}
        <div className="slide-show">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentView ? "active" : ""}`}
              style={{
              transform: `translateX(${(index-currentView) *100}% )`,
             }}
             
            ><img src={image.image} alt="" /></div>
          ))}
        </div>

        <div className="store-shop">
          <div className="store-img">
            <img src={bsb} alt="OFFICIAL STORE" />
          </div>
          <div className="store-img">
            <img src={Jforce} alt="JFORCE" />
          </div>
        </div>
      </div>
    </>
  );
};
