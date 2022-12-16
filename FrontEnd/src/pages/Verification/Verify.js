import React, {useState, useEffect} from 'react'
import colImg from '../../assets/images/safe-mail.png';
import logo from '../../assets/images/logo-red.png';
// import { useForm } from 'react-hook-form';
import "../../assets/styles/Login.css";
import AuthService from '../../assets/api/auth.service'

const  Verify = () => {
  const [userEmail, setUserEmail] = useState('')
  useEffect(() => {
    setUserEmail(AuthService.getUserEmail)
  }, [userEmail])


  //AuthService.getUserEmail()
  // console.log(userEmail)
  //localStorage.removeItem('userEmail')
  return (
    <main>
    <div className="Main-Container height">
    <div className="Left-Form-Container">
        <img className="Icon" src={colImg} alt="" />

    </div>

    <div className="Right-Form-Container Verify">
        <img className="logo" src={logo} alt="logo"/>
        <h2 className="verify-heading">Verify your E-mail</h2>
        <p className="heading-text">A link has been sent to {userEmail}, use it to<br/>
sign in to account  </p>
 <div className="button-wrapper">
    <button  type="submit" id="btn-2"  className="resend-link">Resend link</button>
    </div> 
    <p className="base-link">Do you have an account already?  <span><a href="/login">Log In</a></span></p>
    </div>

    </div>
    </main>
  )
}

export default Verify;
