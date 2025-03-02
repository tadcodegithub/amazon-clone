import React, { useEffect, useState } from 'react'
import axios from "axios"
import style from "./product.module.css"
import ProdcutCard from './ProdcutCard';
function Product() {
    const [products, setProducts]=useState();
    useEffect (()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        // console.log(res);
        setProducts(res.data);
    })
    .catch((err)=>{console.log(err);
    })
    },[])
  return (
    <div className={style.product_contianer}>
      {
        products?.map((single_product,i)=>{
            return <ProdcutCard key={i} data={single_product} renderADD ={true}/>
        })
      }
    </div>
  )
}

export default Product
