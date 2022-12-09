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
          </div>
      </div>
    </section>
  )
}
