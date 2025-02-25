import React from 'react'
import {catagoryinfo} from "./catagoryinfo"
import CatagoryCard from './CatagoryCard';
import style from "./ctagory.module.css";
function Catagory() {
  return (
    <section className={style.catagory_container}>
      {catagoryinfo?.map((singleproduct, i) => {
        return <CatagoryCard key={i} data={singleproduct} />;
      })}
    </section>
  );
}

export default Catagory
