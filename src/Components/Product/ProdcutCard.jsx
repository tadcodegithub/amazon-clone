import React from "react";
import style from "./product.module.css";
function ProdcutCard({ data }) {
//   console.log(data);
const {image, title, id,rating,price}=data
  return (
    <div className={style.card_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={style.rating}>
          <p>stars</p>
          <p>{rating.count}</p>
        </div>
        <div>
            <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProdcutCard;
