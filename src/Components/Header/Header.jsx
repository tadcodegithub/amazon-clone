import React from "react";
import style from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className={style.header_container}>
        <div className={style.logo_container}>
          <Link to="/">
            <img src="/amazon_logo_white.png" alt="" />
          </Link>
          <div className={style.delivery}>
            <span>
              <SlLocationPin size={15} />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={style.search}>
          <select name="" id="">
            <option value="">ALL</option>
            <option value="">Computer</option>
            <option value="">Book</option>
            <option value="">Electronics</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          <BsSearch size={25} />
        </div>
        <div className={style.order_container}>
          <a href="" className={style.language}>
            <div className={style.lang2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="en">EN</option>
                <option value="am">አማ</option>
              </select>
            </div>
          </a>
          <Link to="/auth">
            <div className="">
              <p>Hello, sign in</p>
              <span>Account and List</span>
            </div>
          </Link>
          <Link to="/orders">
            <p>Returns</p>
            <span>&Orders</span>
          </Link>
          <Link to="/cart" className={style.cart}>
            <BiCart size={35} />
            <span>0</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </>
  );
}

export default Header;
