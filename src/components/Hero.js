import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import SliderInfo from "./SliderInfo";

export default function HeroSection() {
  return (
    <section className="heroContainer w-[100%] h-[30rem] md:h-[35rem] shadow-xl rounded-3xl overflow-hidden">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide >
          <SliderInfo titulo={'discover the best shoes at the best price'} imgUrl={'https://images.pexels.com/photos/10657971/pexels-photo-10657971.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderInfo titulo={'we offer you elegance and quality'} imgUrl={'https://images.pexels.com/photos/8454901/pexels-photo-8454901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderInfo titulo={'create your own path, without measuring the obstacles'} imgUrl={'https://images.pexels.com/photos/3075078/pexels-photo-3075078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
