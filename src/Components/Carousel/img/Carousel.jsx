import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { img_data } from "./img/img_info";
import styles from "./carousel.module.css";
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
          return <img key={i} src={single_img} />;
        })}
      </Carousel>
      <div className={styles.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
