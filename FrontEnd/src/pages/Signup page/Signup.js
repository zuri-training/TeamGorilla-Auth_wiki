import React from 'react'
import colImg from '../assets/images/signup.png';
import { useForm } from 'react-hook-form';
import "./signup.css";

export default function Signup() {
  return (
    <main>
    <div class="Main-Container">
    <div class="Left-Form-Container">
    <img class="Icon" src="/Assets/signin.png" alt="" >

    </div>
    <div class="Right-Form-Container">
<img class="logo" src="/Assets/Authwiki-red.png" alt="logo"/>
        <h2>Sign Up</h2>
        <div class="hrwrapper"><hr id="hrline"/>OR LOGIN WITH EMAIL<hr id="hrline" /></div>
<form>
    <input id="inputs" placeholder="Your Name" type="text">
        <input id="inputs" type="email" placeholder="Your Email"/>
        <input id="inputs" type="password" placeholder="Your Password"/>
        <div class="lower-link"><div class="Remember-Me"><input type="checkbox"><span>I agree to the </span></div>  <div class="forgotten"><span><a href="">I agree to the Terms and Conditions</a></span></div></div>    
        <button id="submit" type="submit">Sign Up</button>
    </form>
    <hr/>
    <div class="base-link">Already have an account? <a href="">  Log In</a></div>
    <div class="UpperLink"><img class="Google-icon"src="/Assets/google.png" alt=""> <span class="alt-Auth">Log in with Google</span></div>
    </div>

    </div>
    </main>
  )
}
