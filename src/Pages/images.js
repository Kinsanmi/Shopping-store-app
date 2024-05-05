export const images = [
  {
    image:
      "https://res.cloudinary.com/dkngsthge/image/upload/v1714910824/Power_Up_712x384_hpivuf.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkngsthge/image/upload/v1714910824/712_x_384_i2mo0e.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkngsthge/image/upload/v1714910824/Desktop_Homepage_Slider__712x384_fii5zo.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkngsthge/image/upload/v1710004871/Desktop_Homepage_Slider__712x384-PERFECT_pnovcf.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkngsthge/image/upload/v1714910824/Diageo_712x384_kppbsm.png",
  },
  {
    image:
      "https://res.cloudinary.com/dkngsthge/image/upload/v1714910824/Nivea_Mumm_712_384_ejj54f.jpg",
  },
];

const slides = document.querySelectorAll(".slide");
let currentSlide = 1;

const manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[manual].classList.add('.active');
  
};
