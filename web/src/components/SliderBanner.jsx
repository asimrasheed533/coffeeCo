import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function SliderBanner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="slider__img"
            src="https://media.istockphoto.com/id/1671952587/vector/25-discount-for-black-friday-banner-modern-design-with-black-and-white-typography-on-black.jpg?s=612x612&w=0&k=20&c=4Nnf_HZpixiRxXzfjxfWC0O2-taK3XwjfE0eIH2w2yA="
            alt="img"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__img"
            src="https://media.istockphoto.com/id/511509163/photo/image-of-blackboard-menus-in-cafe-tea-and-coffee-making.jpg?s=612x612&w=0&k=20&c=VFoOy44AUvju3iwPD1DUDzg1GnTam_wu2LzYn5drU4Q="
            alt="img"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__img"
            src="https://media.istockphoto.com/id/1573463630/photo/border-of-various-coffee.jpg?s=1024x1024&w=is&k=20&c=wvE8lUWdCwnhlDCEuYe0Szf2NcaK31HwmLnn4edyhr4="
            alt="img"
            loading="lazy"
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
