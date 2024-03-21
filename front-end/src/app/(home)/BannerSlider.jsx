"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "./BannerSlider.css"
// Import Swiper styles
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import "swiper/css/bundle";
import SingleBannerSlider from './SingleBannerSlider';
import mainSlider from "@/data/mainSlider";


const BannerSlider = () => {
    return (
        <section className="main-slider rounded-xl overflow-hidden">
      <Swiper
      style={{
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        pagination={{ clickable: true }}
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleBannerSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    );
};

export default BannerSlider;