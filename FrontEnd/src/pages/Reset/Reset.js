import React, {useState, useRef, useEffect} from 'react'
import resetImg from '../../assets/images/reset-password.png';
// import googleImg from '../../assets/images/g'
import logo from '../../assets/images/logo-red.png'
// import { useForm } from 'react-hook-form';
import "../../assets/styles/Login.css";
import { FaCheck, FaInfoCircle, FaTimes } from 'react-icons/fa';
import AuthService from '../../assets/api/auth.service'
import { useNavigate } from 'react-router-dom';

function Reset() {

  const Navigate = useNavigate()


  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setSuccess(false);
    await AuthService.reset( email)
    .then((res) => {
      // console.log(res)
      if (res.success === true){
        Navigate("/library");
        // window.location.reload()
      }
    }, (error) => {
      const message = (error.res && 
        error.res.data && error.res.data.message) ||error.message ||
         error.toString();
         setErrMsg(message)
    })
  }

  return (
        <main>
    <div className="Main-Container">
    <div className="Left-Form-Container">
     <img className="Icon" src={resetImg} alt="" />
 
    </div>
    <div className="Right-Form-Container">
      <img className="logo" src={logo} alt="logo"/>
        <h2>Forgotten your password?</h2>
        <p>Follow these easy steps to reset your password</p>
    <form>
        {/* <label for="Email"></label> */}
        <input id='email' 
    ref={emailRef} 
    autoComplete="off" 
    onChange={(e) => setEmail(e.target.value)} 
    value={email} 
    required 
    aria-invalid={validEmail ? "false" : "true"}
    aria-describedby="uidemail"
    onFocus={() => setEmailFocus(true)}
    onBlur={() => setEmailFocus(false)} 
    className="inputs"
    placeholder="Your Email" 
    type="email"/>
      <FaCheck className={validEmail ? "valid": "hide"} />
      <FaTimes className={validEmail || !email ? "hide": "invalid"} />
      <p
            id="uidemail"
            className={
              emailFocus && email && !validEmail
                ? "instructions"
                : "offscreen"
            }
          >
            <FaInfoCircle />
            enter a valid email
          </p>
          <button id="submit" type="submit" disabled={ !validEmail ? true : false}
        onClick={(e) => handleSubmit(e)}>Send Reset Link</button>
        {/* <button id="btn-2" type="reset">Back</button> */}
    </form>
    </div>

    </div>
    </main>
  )
}

export default Reset
