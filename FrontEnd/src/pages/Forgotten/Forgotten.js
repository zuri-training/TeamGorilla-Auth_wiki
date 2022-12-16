import React from 'react'
import "../../assets/styles/Login.css";

function Forgotten() {
  return (
    <div>
      <main>
    <div className="Main-Container">
    <div className="Left-Form-Container">
    <img className="Icon" src="https://res.cloudinary.com/dlvxqyg4z/image/upload/v1671115697/password_1_1_ezk5w2.png" alt="" >
 
    </div>
    <div className="Right-Form-Container Reset">
        <img className="logo" src="https://res.cloudinary.com/dlvxqyg4z/image/upload/v1671003592/Authwiki-red_wtlpoq.png" alt="logo"/>
        <h2>Reset Password</h2>
    <form>
        <input name="Email" id="inputs" type="email" placeholder="Your Email"/>
        <input name="Email" id="inputs" type="password" placeholder="Your Password"/>
        <input name="Email" id="inputs" type="password" placeholder="Confirm Password"/>
        <button id="btn-1" type="submit">Reset</button>
    </form>
    </div>

    </div>
    </main>
    </div>
  )
}

export default ResetPassword
