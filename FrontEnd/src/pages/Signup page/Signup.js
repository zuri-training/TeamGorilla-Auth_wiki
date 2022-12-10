import React from 'react'
import colImg from '../assets/images/signup.png';
import { useForm } from 'react-hook-form';
import "./signup.css";

export default function Signup() {
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
            <h1>Sign Up </h1>
          </div>
            <form>
            <input type="text" placeholder='username' />
            </form>
          </div>
      </div>
      </div>
    </section>
  )
}
