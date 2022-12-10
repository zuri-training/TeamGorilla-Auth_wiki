import React from 'react'
import colImg from '../assets/images/signin.png';
import { useForm } from 'react-hook-form';
import "./Login.css";

export default function Login() {
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
            <h1>Welcome Back! </h1>
          </div>
            <form>
            <input type="email" placeholder='Your Email' />
            <input type="password" placeholder='Your Password' />
            <button>Log in</button>
            <div>
              <input type="checkbox" /><span>Keep me logged in</span>  
              <span><a href="">ffrffr</a></span>
            </div>
            
            </form>
            <hr/>
            <p>Dont have an account yet? <span><a href=""> Sign Up</a></span></p>
          </div>
      </div>
    </section>
  )
}
