import React from 'react'
import colImg from '../assets/images/reset.png';
import { useForm } from 'react-hook-form';
import "./reset.css";

function reset() {
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
            <h1> Forgotten your password?</h1>
            <p>Follow these easy steps to reset your password</p>
          </div>
            <form>
            <input type="email" placeholder='Your Email' />
            {/*The Buttons*/}
            <div className='Buttons'>
            <button>Send Reset Link</button>
            <button>Back</button>
            </div>
            </form>
          </div>
      </div>
    </section>
  )
}

export default reset
