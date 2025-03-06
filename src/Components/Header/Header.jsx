import style from "./header.module.css"
import { SlLocationPin } from "react-icons/sl"
import { BsSearch } from "react-icons/bs"
import { BiCart } from "react-icons/bi"
import LowerHeader from "./LowerHeader"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../DataProvider/DataProvidere"
import { auth } from "../../Utility/firebase"
function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext)

  const totalProduct = basket.reduce((sum, item) => sum + item.amount, 0)

  console.log(totalProduct)
  return (
    <div className={style.fixed_Header}>
      <div className={style.header_container}>
        <div className={style.logo_container}>
          <Link to="/">
            <img src="amazon_logo_white.png" alt="" />
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
          <BsSearch size={39} />
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
          <Link to={!user && "/auth"}>
            <div className="">
              {user ? (
                <>
                  <p>Hello {user?.email.split("@")[0]}</p>
                  <span
                    onClick={() => {
                      auth.signOut()
                      console.log("clicked", user)
                    }}
                  >
                    {" "}
                    Sign Out
                  </span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & List</span>
                </>
              )}
            </div>
          </Link>
          <Link to="/orders">
            <p>Returns</p>
            <span>&Orders</span>
          </Link>
          <Link to="/cart" className={style.cart}>
            {/* <BiCart size={35} /> */}
            <img src="cart2.png" alt="" />
            <span>{totalProduct}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </div>
  )
}

export default Header
