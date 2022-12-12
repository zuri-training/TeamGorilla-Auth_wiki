import React from 'react'
import colImg from '../assets/images/verify.png';
import { useForm } from 'react-hook-form';
import "./verify.css";

function verify() {
  return (
    <main>
    <div class="Main-Container">
    <div class="Left-Form-Container">
        <img class="Icon" src="/Assets/verify.png" alt="" />

    </div>

    <div class="Right-Form-Container">
        <img class="logo" src="/Assets/Authwiki-red.png" alt="logo"/>
        <h2 class="verify-heading">Verify your E-mail</h2>
        <p class="heading-text">A link has been sent to michealjames@gmail.com, use it to<br/>
sign in to account  </p>
<div class="button-wrapper"><button id="btn-1" type="submit" class="mail-button">Open your mail app</button>
    <button id="btn-2" class="resend-link">Resend link</button></div>
    <p class="base-link">Do you have an account alredy?  <span><a href="">Log In</a></span></p>
    </div>

    </div>
    </main>
  )
}

export default verify
