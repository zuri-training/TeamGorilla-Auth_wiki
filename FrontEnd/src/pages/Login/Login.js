import React from 'react'
import colImg from '../../assets/images/signin.png';
// import googleImg from '../../assets/images/g'
import logo from '../../assets/images/logo-red.png'
import { useForm } from 'react-hook-form';
import "./Login.css";

export default function Login() {
  return (
    <main>
    <div className="Main-Container">
    <div className="Left-Form-Container">
    <img className="Icon" src={colImg} alt="" />

    </div>
    <div className="Right-Form-Container">
        <img className="logo" src={logo} alt="logo"/>
        <h2>Welcome Back!</h2>
        <div className="hrwrapper"><hr id="hrline"/>OR LOGIN WITH EMAIL<hr id="hrline" /></div>
    <div className="UpperLink"><img className="Google-icon"src="/Assets/google.png" alt="" /> <span className="alt-Auth">Log in with Google</span></div>
    <form>
        <input id="inputs" type="email" placeholder="Your Email"/>
        <input id="inputs" type="password" placeholder="Your Password"/>
        <div className="lower-link"><div className="Remember-Me"><input type="checkbox" /><span>Keep me logged in</span></div>  <div className="forgotten"><span><a href="">Forget password?</a></span></div></div>
        <button id="submit" type="submit">Log in</button>
    </form>
    <hr/>
    <div className="base-link">Dont have an account yet?  <a href="">Sign Up</a></div>
    </div>

    </div>
    </main>
  )
}
