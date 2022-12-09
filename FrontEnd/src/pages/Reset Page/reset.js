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
          </div>
      </div>
    </section>
  )
}

export default reset
