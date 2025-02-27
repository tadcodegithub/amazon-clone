import React from 'react'
import  Carousel  from '../../Components/Carousel/Carousel'
import Catagory from '../../Components/Catagory/Catagory'
import Product from '../../Components/Product/Product'
import LayOut from '../../Components/LayOut/LayOut'

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Catagory />
      <Product />
    </LayOut>
  )
}

export default Landing
