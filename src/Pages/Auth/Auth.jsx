import React, { useContext, useState } from "react"
import LayOut from "../../Components/LayOut/LayOut"
import style from "./auth.module.css"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../Utility/firebase"
import { DataContext } from "../../Components/DataProvider/DataProvidere"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { Type } from "../../Utility/action.type"
import { ClipLoader } from "react-spinners"
function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  // console.log(email, password)
  const [{ user }, dispatch] = useContext(DataContext)
  // console.log(user);

  const [loading, setLoading] = useState({ signIn: false, signUp: false })

  const navigate = useNavigate()
  const authHandler = (e) => {
    e.preventDefault()
    // console.log(e.target.name);
    if (e.target.name === "signIn") {
      // we do sign in related
      setLoading({ ...loading, signIn: true })
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentioal) => {
          console.log(userCredentioal)
          dispatch({
            type: Type.SET_USER,
            user: userCredentioal.user,
          })
          setLoading({ ...loading, signIn: false })
          setError("")
          navigate("/")
        })
        .catch((err) => {
          // console.log(err)
          setError(err.message)
          setLoading({ ...loading, signIn: false })
        })
    } else {
      // create new account
      setLoading({ ...loading, signUp: true })
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentioal) => {
          console.log(userCredentioal)
          dispatch({
            type: Type.SET_USER,
            user: userCredentioal.user,
          })
          setError("")
          setLoading({ ...loading, signUp: false })
          navigate("/")
        })
        .catch((err) => {
          // console.log(err);
          setError(err.message)
          setLoading({ ...loading, signUp: false })
        })
    }
  }
  return (
    <section className={style.login}>
      <Link to="/amazon-clone">
        <img src="./amazon_logo_black.png" alt="" />
      </Link>
      <div className={style.loginContainer}>
        <h1>Sign In</h1>
        <form action="">
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
            className={style.login_signInBtn}
          >
            {loading.signIn && <ClipLoader color="white" size={25} />}
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signUp"
          className={style.login_registerBtn}
        >
          {loading.signUp ? (
            <ClipLoader color="white" size={25} />
          ) : (
            "   Create Your Amazon Account"
          )}
        </button>
        {error && <small>{error}</small>}
      </div>
    </section>
  )
}

export default Auth
