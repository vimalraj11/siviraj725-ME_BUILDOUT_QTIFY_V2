import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "../CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "../CarouselRightNavigation/CarouselRightNavigation";

function Carousel({ data, renderItem }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles.wrapper}>
      <CarouselLeftNavigation
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
      />

      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={updateNavState}
        onReachBeginning={updateNavState}
        onReachEnd={updateNavState}
        onAfterInit={updateNavState}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <CarouselRightNavigation
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
      />
    </div>
  );
}

export default Carousel;