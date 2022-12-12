import React from 'react'
import colImg from '../../assets/images/sign-up.png';
// import googleImg from '../../assets/images/g'
import logo from '../../assets/images/logo-red.png'
import { useForm } from 'react-hook-form';
import "./signup.css";

export default function Signup() {
  return (
    <main>
    <div className="Main-Container">
    <div className="Left-Form-Container">
    <img className="Icon" src={colImg} alt="" />

    </div>
    <div className="Right-Form-Container">
<img className="logo" src={logo} alt="logo"/>
        <h2>Sign Up</h2>
        <div className="hrwrapper"><hr id="hrline"/>OR LOGIN WITH EMAIL<hr id="hrline" /></div>
<form>
    <input id="inputs" placeholder="Your Name" type="text"/>
        <input id="inputs" type="email" placeholder="Your Email"/>
        <input id="inputs" type="password" placeholder="Your Password"/>
        <div className="lower-link"><div className="Remember-Me"><input type="checkbox"/><span>I agree to the </span></div>  <div className="forgotten"><span><a href="">I agree to the Terms and Conditions</a></span></div></div>    
        <button id="submit" type="submit">Sign Up</button>
    </form>
    <hr/>
    <div className="base-link">Already have an account? <a href="">  Log In</a></div>
    <div className="UpperLink"><img className="Google-icon"src="/Assets/google.png" alt=""/> <span className="alt-Auth">Log in with Google</span></div>
    </div>

    </div>
    </main>
  )
}
