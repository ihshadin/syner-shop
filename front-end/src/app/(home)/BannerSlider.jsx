"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "./BannerSlider.css"
// Import Swiper styles
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import "swiper/css/bundle";
import SingleBannerSlider from './SingleBannerSlider';
import mainSlider from "@/data/mainSlider";


const BannerSlider = () => {
    return (
        <section className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation, EffectFade, Autoplay]}
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