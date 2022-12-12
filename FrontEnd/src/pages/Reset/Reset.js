import React from 'react'
import resetImg from '../../assets/images/reset-password.png';
// import googleImg from '../../assets/images/g'
import logo from '../../assets/images/logo-red.png'
import { useForm } from 'react-hook-form';
import "../../assets/styles/Login.css";

function reset() {
  return (
        <main>
    <div className="Main-Container">
    <div className="Left-Form-Container">
     <img className="Icon" src={resetImg} alt="" />
 
    </div>
    <div className="Right-Form-Container">
      <img className="logo" src={logo} alt="logo"/>
        <h2>Forgotten your password?</h2>
        <p>Follow these easy steps to reset your password</p>
    <form>
        <label for="Email"></label>
        <input name="Email" id="inputs" type="email" placeholder="Your Email"/>
        <button id="btn-1" type="submit">Send Reset Link</button>
        <button id="btn-2" type="reset">Back</button>
    </form>
    </div>

    </div>
    </main>
  )
}

export default reset
