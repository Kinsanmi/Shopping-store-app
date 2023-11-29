import '../Styles/MegaMenu.css';
import { Link } from 'react-router-dom';

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



import { AiOutlineMessage } from "react-icons/ai";

export const MegaMenu = () => {
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
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Indoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </li>





                                <li className="has-child home-kit">
                                    <Link className="kit">
                                        <MdOutlineHealthAndSafety className='home' />
                                        <div className="icon-large">Health</div>
                                    </Link>
                                    <div className="mega">
                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </li>




                                <li className="has-child home-kit">
                                    <Link className="kit">
                                        <AiOutlineHome className='home' />
                                        Home & kitchen
                                    </Link>
                                    <div className="mega">
                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Kitchen % Dinning</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Dinning Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pantry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Great Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Breakfast Nook</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Living</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Living Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Family room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Sunroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Bed & Bath</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Bathroom</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Powder Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Bedroom</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </li>





                                <li className="has-child home-kit">
                                    <Link className="kit">
                                        <MdOutlinePhoneAndroid className='home' />
                                        <div className="icon-large">Phones and Tablets</div>
                                    </Link>
                                    <div className="mega">
                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
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
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="has-child home-kit">
                                    <Link className="kit">
                                    <CgSmartHomeRefrigerator className='home' />
                                        <div className="icon-large">Electronics</div>
                                    </Link>
                                    <div className="mega">
                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="has-child home-kit">
                                    <Link className="kit">
                                        <GiClothes className='home' />
                                        <div className="icon-large">Fashion</div>
                                    </Link>
                                    <div className="mega">
                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
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
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
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
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="has-child home-kit">
                                    <Link className="kit">
                                    <CiDumbbell className='home' />
                                        <div className="icon-large">Sporting goods</div>
                                    </Link>
                                    <div className="mega">
                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
                                                    </li>
                                                </ul>
                                            </div>
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
                                                <h4><Link>Mobile Phones</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Smart phones</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Feature phone</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link>iOS</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Windows </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cables</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Cases & covers</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Screen protector</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>





                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Tablet Accessories</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Cases & cover</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Holder & stands</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Others</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Storage & closet Room</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Baby & Kids</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row col">
                                                <h4><Link>Utility</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Laundry</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Garage</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Mudroom</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>




                                        <div className="flex-col">
                                            <div className="row">
                                                <h4><Link>Outdoor</Link></h4>
                                                <ul>
                                                    <li>
                                                        <Link>Landscape</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Patio</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Deck</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Backyard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Porch</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Exterior</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Outdoor Kitchen</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Front Yard</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Driveway</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Pool House</Link>
                                                    </li>
                                                </ul>
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
        <div className="slide">
            <div className="img">Swiper slide</div>
        </div>


        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
         </div>

    </div>
    </>
  )
}

