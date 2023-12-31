// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../Styles/Home.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


// import Swiper images
import Brand1 from '../Data/Image cat/Desktop_MLP_slider__1168x384_(Show_Now) (1).jpg';
import Brand2 from '../Data/Image cat/Desktop_MLP_slider__1168x384_(Show_Now) (2).jpg';
import Brand3 from '../Data/Image cat/Desktop_MLP_slider__1168x384_(Show_Now).jpg';
import Brand4 from '../Data/Image cat/Desktop_MLP_Slider__1168x384.png';
import Brand5 from '../Data/Image cat/mlp.jpg';
import Brand6 from '../Data/Image cat/Desktop-MLP-slider_-1168x384-(Show-Now).jpg';

export const Slides = () => {
  return (
    <>
      <div className="slides">
        <div className="store">
          <h2>Official Store</h2>
        </div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Brand1} alt='RECKITT STORE' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand2} alt='RECKITT STORE' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand3} alt='RECKITT STORE' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand4} alt='RECKITT STORE' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand5} alt='RECKITT STORE' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand6} alt='RECKITT STORE' />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}