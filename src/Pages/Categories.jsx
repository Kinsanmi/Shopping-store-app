
import { Link } from "react-router-dom";
// category imported
import { category } from "../Data/Products/Product";

// sales imported
import { Sales } from "../Data/Products/Product";


// Flash sales imported
import { flashSales } from "../Data/Products/Product";


// Black friday deals imported
import { blackFriday } from "../Data/Products/Product";

// Naira currency icon
/* import { FaNairaSign } from "react-icons/fa6"; */


// Arrow icons
import { IoIosArrowForward } from "react-icons/io";

import '../Styles/Category.css';
import { AmazingOffer } from "./AmazingOffer";


export const Categories = ({handleClick}) => {


  /* const newTimer = ()=>{
    const date = new Date().getTime();
    const nextDay = new Date('September 12, 2023, 00:30:48').getTime();
    const total = nextDay - date;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days1 = Math.round(total / day);
    const hours1 = Math.floor((total % day)/hour);
    const mins1 = Math.floor((total % hour)/minute);
    const seconds1 = Math.floor((total % minute)/second);

    const days = document.querySelector('.day').textContent = days1 + 'D';
    const mins = document.querySelector('.minute').textContent = mins1 + 'hr';
    const hours = document.querySelector('.hour').textContent = hours1 + 'Mins';
    const seconds = document.querySelector('.second').textContent = seconds1 + 'Secs';

    if(total <= 0){
      clearInterval(date);
  }

}

useEffect(()=>{
setInterval( newTimer, 1000);
},[]); */
 


  return (
    <>
    {/* category section */}
      <section>
        <div className="category">
            <div className="cat-type">  
                <div className="cat-detail">
                    {category.map((categories, index)=>{
                        return (
                            <Link onClick={handleClick} to={categories.link} className="cat-image" key={index}>
                                <img src={categories.image} alt="Categories" />
                                <p>{categories.text}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>

        {/* sales section */}
      <section>
        <div className="sales">
            <div className="sale-type"> 
            <div className="sale-text">Top selling items</div> 
                <div className="sale-detail">
                    {Sales.map((sale, index)=>{
                        return (
                            <Link onClick={handleClick} to={sale.link} className="sale-image" key={index}>
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



        {/* Flash sales section */}
      <section>
        <div className="flash">
            <div className="flash-type"> 
            <div className="flash-text">
                <div className="f">Flash sales</div>
                <div className="timer">
                  Countdown timer
                  <div className="day"></div>
                  <div className="minute"></div>
                  <div className="hour"></div>
                  <div className="second"></div>
                </div>
                <Link to='/about/sellAll' className="sell">
                  See All <IoIosArrowForward className="left-arrow" />
                </Link>
              </div> 
                <div className="flash-detail">
                    {flashSales.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="sale-image" key={index}>
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
                                <div className="items">
                                  {sale.items}
                                </div>
                                <div className="progress"></div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>



        {/* Black friday day deals section */}
        <section>
        <div className="black">
            <div className="black-type"> 
            <div className="black-text">
                <div className="f">Black friday deals</div>
                <Link to='/about/sellAll' className="sell">
                  See All <IoIosArrowForward className="left-arrow" />
                </Link>
              </div> 
                <div className="flash-detail">
                    {blackFriday.map((sale, index)=>{
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

      <AmazingOffer />
    </>
  )
}


