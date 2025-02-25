import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { img_data } from "./img/img_info";
import style from "./carousel.module.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img_data?.map((single_img, i) => {
          return <img key={i} src={single_img} alt="" />;
        })}
      </Carousel>
      <div className={style.car_bottom}></div>
    </div>
  );
}

export default CarouselEffect;
