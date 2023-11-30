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
import Brand1 from '../Data/Image cat/BRAND-DAY-CALENDER-SLIDER.jpg';
import Brand2 from '../Data/Image cat/xiaomi1168x384.jpg';
import Brand3 from '../Data/Image cat/Brand_calendar_MLP_Slider.jpg';
import Brand4 from '../Data/Image cat/Diageo_1168x384.jpg';
import Brand5 from '../Data/Image cat/Brand_calendar_MLP_Slider (1).jpg';

export const Slides = () => {
  return (
    <>
      <div className="slides">
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
          <img src={Brand1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Brand5} alt='' />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}