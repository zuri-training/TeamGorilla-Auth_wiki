import React from 'react'
import colImg from '../assets/images/verify.png';
import { useForm } from 'react-hook-form';
import "./verify.css";

function verify() {
  return (
    <section>
      {/* Main container for all codes*/}
      <div className="Container">
        {/* left side of the form*/}
        <div className='Col-1'>
          <img src={colImg} alt="" />
          </div>
          {/*The actual form*/}
          
          <div className='Col-2'>
          <div className='TextContainer'>
          <img  />
            <h1>Verify your E-mail </h1>
            <p>A link has been sent to michealjames@gmail.com, use it to<br/> 
sign in to account  </p>
          </div>
          <div className='Buttons'>
            <button>Open your mail app</button>
            <button>Resend link</button>
            </div>
            <p>Do you have an account alredy? <span><a href=""> Log In</a></span></p>
          </div>
      </div>
    </section>
  )
}

export default verify