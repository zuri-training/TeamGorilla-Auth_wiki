import React from 'react'
import colImg from '../assets/images/reset.png';
import { useForm } from 'react-hook-form';
import "./reset.css";

function reset() {
  return (
        <main>
    <div class="Main-Container">
    <div class="Left-Form-Container">
     <img class="Icon" src="/Assets/reset.png" alt="" >
 
    </div>
    <div class="Right-Form-Container">
        <img class="logo" src="/Assets/Authwiki-red.png" alt="logo"/>
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
