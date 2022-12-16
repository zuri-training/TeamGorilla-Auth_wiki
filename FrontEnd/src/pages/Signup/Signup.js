import React, {useState, useRef, useEffect}from 'react'
import colImg from '../../assets/images/sign-up.png';
// import googleImg from '../../assets/images/g'
import logo from '../../assets/images/logo-red.png'
import { useForm } from 'react-hook-form';
import "../../assets/styles/Login.css";
import { FaCheck, FaInfoCircle, FaTimes } from 'react-icons/fa';
import AuthService from '../../assets/api/auth.service';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  let Navigate = useNavigate()

  const NAME_REGEX = /^[a-z'-]+$/i;
  const PWD_REGEX = /^[A-Za-z0-9]\w{8,20}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const errRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  // State events
useEffect(() => {
  firstNameRef.current.focus();
}, []);

  useEffect(() => {
    setValidFirstName(NAME_REGEX.test(firstName));
  }, [firstName]);
  useEffect(() => {
    setValidLastName(NAME_REGEX.test(lastName));
  }, [lastName]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setSuccess(false);
    await AuthService.register(firstName, lastName, email, password)
    .then((res) => {
      // console.log(res)
      if (res.success === true){
        Navigate("/verification");
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
    <img className="Icon" src={colImg} alt="" />

    </div>
    <div className="Right-Form-Container">
        <img className="logo" src={logo} alt="logo"/>
        <h2>Sign Up</h2>
        {/* <div className="hrwrapper"><hr id="hrline"/>OR LOGIN WITH EMAIL<hr id="hrline" /></div> */}
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
          
        </p>
<form>
    <input id='firstName' 
    ref={firstNameRef} 
    autoComplete="off" 
    onChange={(e) => setFirstName(e.target.value)} 
    value={firstName} 
    required 
    aria-invalid={validFirstName? "false" : "true"}
    aria-describedby="uidnote"
    onFocus={() => setFirstNameFocus(true)}
    onBlur={() => setFirstNameFocus(false)} 
    className="inputs"
    placeholder="Your First Name" 
    type="text"/>
      <FaCheck className={validFirstName ? "valid": "hide"} />
      <FaTimes className={validFirstName || !firstName ? "hide": "invalid"} />
      <p
            id="uidnote"
            className={
              firstNameFocus && firstName && !validFirstName
                ? "instructions"
                : "offscreen"
            }
          >
            <FaInfoCircle />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
    <input id='lastName' 
    ref={lastNameRef} 
    autoComplete="off" 
    onChange={(e) => setLastName(e.target.value)} 
    value={lastName} 
    required 
    aria-invalid={validLastName? "false" : "true"}
    aria-describedby="uidnote1"
    onFocus={() => setLastNameFocus(true)}
    onBlur={() => setLastNameFocus(false)} 
    className="inputs"
    placeholder="Your Last Name" 
    type="text"/>
      <FaCheck className={validLastName ? "valid": "hide"} />
      <FaTimes className={validLastName || !lastName ? "hide": "invalid"} />
      <p
            id="uidnote1"
            className={
              lastNameFocus && lastName && !validLastName
                ? "instructions"
                : "offscreen"
            }
          >
            <FaInfoCircle />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
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
            Letters, numbers, underscores, hyphens allowed.
          </p>  
        <button id="submit" type="submit" disabled={!validFirstName || !validLastName || !validEmail || !validPassword ? true : false}
        onClick={(e) => handleSubmit(e)}
        >Sign Up</button>
    </form>

    {/* <hr/> */}
    <div className="base-link">Already have an account? <a href="/login">  Log In</a></div>
    {/* <div className="UpperLink"><img className="Google-icon"src="/Assets/google.png" alt=""/> <span className="alt-Auth">Log in with Google</span></div> */}
    </div>

    </div>
    </main>
  )
}
