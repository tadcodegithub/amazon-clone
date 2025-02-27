import React from "react";
import style from "./product.module.css";
import Rating from "@mui/material/Rating"
import CurrencyFormat from "../CurrecyFormat/CurrencyFormat";
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
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
            {/* <p>{price}</p> */}
            <CurrencyFormat amount={price}/>
        </div>
      </div>
      <button className={style.button}>Add to cart</button>
    </div>
  );
}

export default ProdcutCard;
