
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
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


   // Countdown timer

   const [timerDays, setTimerDays] = useState();
   const [timerHours, setTimerHours] = useState();
   const [timerMinutes, setTimerMinutes] = useState();
   const [timerSeconds, setTimerSeconds] = useState();



   let interval;

   const Timer = ()=>{
       const nextDay = new Date('January 1, 2024, 10:00:48').getTime();
       

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
                <div className="timer-start">
                  Time Left:
                  <div className="countdown">
                    <p>{timerDays}d:</p>
                  </div>
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
                                <div className="progress-flash"></div>
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
                <div className="f">Limited Stock deals</div>
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


