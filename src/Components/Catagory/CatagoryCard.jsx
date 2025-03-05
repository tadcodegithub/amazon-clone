import React from "react"
import style from "./ctagory.module.css"
import { Link } from "react-router-dom"
function CatagoryCard({ data }) {
  return (
    <div className={style.catagory}>
      <Link to={`/category/${data.category}`}>
        <span>{data.category}</span>
        <img src={data.imageLink} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  )
}

export default CatagoryCard
