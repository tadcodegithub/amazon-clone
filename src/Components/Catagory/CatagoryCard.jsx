import React from 'react'
import style from "./ctagory.module.css";
function CatagoryCard({ data }) {
  return (
    <div className={style.catagory}>
      <a href="">
        <span>{data.title}</span>
        <img src={data.imageLink} alt="" />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default CatagoryCard
