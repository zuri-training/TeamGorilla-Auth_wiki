import React from 'react'
import "../../assets/styles/Login.css";

function CheckMail() {
  return (
    <div>
       <main>
    <div className="Main-Container Check">
    <div className="Left-Form-Container">
    <img className="Icon" src="https://res.cloudinary.com/dlvxqyg4z/image/upload/v1671003592/verify_imogwd.png" alt="" >
 
    </div>
    <div className="Right-Form-Container ">
        <img className="logo" src="https://res.cloudinary.com/dlvxqyg4z/image/upload/v1671003592/Authwiki-red_wtlpoq.png" alt="logo"/>
        <h2>Check your email</h2>
        <p>We have sent a password recovery instructions<br/>
to your email</p>
    <form>
        <button id="btn-1" type="submit">Finish</button>
    </form>
    </div>

    </div>
    </main>
    </div>
  )
}

export default CheckMail
