import React, { useContext } from "react"
import style from "./product.module.css"
import Rating from "@mui/material/Rating"
import CurrencyFormat from "../CurrecyFormat/CurrencyFormat"
import { Link } from "react-router-dom"
import { DataContext } from "../DataProvider/DataProvidere"
import { Type } from "../../Utility/action.type"
function ProdcutCard({ data, flex, renderDesc, renderADD }) {
    // console.log(data);
  const { image, title, id, rating, price, description } = data
  const [state,dispatch]=useContext(DataContext)
  const addToCart=()=>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    })
  }
  return (
    <div
      className={`${style.card_container} ${flex ? style.product_flexed : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "700px" }}>{description}</div>}
        <div className={style.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          {/* <p>{price}</p> */}
          <CurrencyFormat amount={price} />
        </div>
        {renderADD && (
          <button className={style.button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  )
}

export default ProdcutCard
