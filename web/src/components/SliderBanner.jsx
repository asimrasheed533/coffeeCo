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
            src="https://kopikita.id/wp-content/uploads/2022/08/coffeebean2.jpg"
            alt="img"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__img"
            src="https://kopikita.id/wp-content/uploads/2022/08/kopisusu.jpg"
            alt="img"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__img"
            src="https://kopikita.id/wp-content/uploads/2022/08/cappucino.jpg"
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
