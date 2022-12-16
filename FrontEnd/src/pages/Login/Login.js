import React, {useState, useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import colImg from '../../assets/images/signin.png';
// import googleImg from '../../assets/images/g'
import logo from '../../assets/images/logo-red.png'
// import { useForm } from 'react-hook-form';
import "../../assets/styles/Login.css";
import { FaCheck, FaInfoCircle, FaTimes } from 'react-icons/fa';
import AuthService from '../../assets/api/auth.service'

export default function Login() {
  const Navigate = useNavigate()

  const PWD_REGEX = /^[A-Za-z0-9]\w{8,20}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const emailRef = useRef();
  const passwordRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [errMsg, setErrMsg] = useState("");
  
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setSuccess(false);
    await AuthService.login( email, password)
    .then((res) => {
      // console.log(res)
      if (res.success === true){
        Navigate("/library");
        window.location.reload()
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
    <img className="Icon" src={colImg} alt="" />

    </div>
    <div className="Right-Form-Container">
        <img className="logo" src={logo} alt="logo"/>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
          
        </p>
        <h2>Welcome Back!</h2>
    {/* <div className="UpperLink"><img className="Google-icon"src="/Assets/google.png" alt="" /> <span className="alt-Auth">Log in with Google</span></div> */}
    <form>
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
        <input id='password' 
    ref={passwordRef} 
    autoComplete="off" 
    onChange={(e) => setPassword(e.target.value)} 
    value={password} 
    required 
    aria-invalid={validPassword? "false" : "true"}
    aria-describedby="uidpassword"
    onFocus={() => setPasswordFocus(true)}
    onBlur={() => setPasswordFocus(false)} 
    className="inputs"
    placeholder="Your Password" 
    type="password"/>
      <FaCheck className={validPassword ? "valid": "hide"} />
      <FaTimes className={validPassword || !password ? "hide": "invalid"} />
      <p
            id="uidpassword"
            className={
              passwordFocus  && !validPassword
                ? "instructions"
                : "offscreen"
            }
          >
            <FaInfoCircle />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, are allowed.
          </p>
        <div className="lower-link"><div className="Remember-Me">
        <input type="checkbox" /><span>Keep me logged in</span>
        </div>  <div className="forgotten">
        <span><a href="/reset">Forget password?</a>
        </span>
        </div>
        </div>
        <button id="submit" type="submit" disabled={ !validEmail || !validPassword ? true : false}
        onClick={(e) => handleSubmit(e)}>Log in</button>
    {/* <hr/> */}
    <div className="base-link">Dont have an account yet?  <a href="/register">Sign Up</a></div>
    </form>
    </div>

    </div>
    </main>
  )
}
