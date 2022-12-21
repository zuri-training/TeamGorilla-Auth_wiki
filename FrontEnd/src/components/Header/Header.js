import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import '../../assets/styles/Header.css'
import logo from '../../assets/images/Authwiki.png'
import AuthService from '../../assets/api/auth.service'
import UserService from '../../assets/api/user.service';

function Header() {

    // const Navigate = useNavigate();

    const [user, setUser] = useState({})
    useEffect(() => {
      setUser(AuthService.getCurrentUser())
    }, [])
    const signOut = () => {
      AuthService.signOut()
      .then((res) => {
        setUser('')
        // history.push()
      })
      
    }
    // const [isVisible, setIsVisible] = useState(false)
    const [displayV, setDisplayV] = useState('')
    const toggle = () => {
        if (displayV === 'display'){
            setDisplayV('')
        }else {
            setDisplayV('display')
        }
    }
  return (
    <div className='header'>
     <div className='header-container'>
     <div className="logo">
        <img src={logo} alt='Authwiki-logo'/>
        </div>
        <div className="hamburger-lines" onClick={() => { toggle()}}>
          <span className="line line1">-</span>
          <span className="line line2">-</span>
          <span className="line line3">-</span>
        </div>
        
        <div>
                <a href='/' className={`nav ${displayV}`}>Home</a>
                <a href='/library' className={`nav active ${displayV}`}>Library</a>
                <a href='/team' className={`nav ${displayV}`}>Our Team</a>
                <a href='/faq' className={`nav ${displayV}`}>FAQ</a>
        </div>
        { user? 
          <div className="mobile-flex">
            <a href='/' className={`header-btn mag si ${displayV}`} onClick={(e) => signOut(e)}>Sign out</a>
          </div> 
          :
          <div className="mobile-flex">
            <a href='/login' className={`nav log mag ${displayV}`}>Sign In</a>
            <a href='/register' className={`header-btn mag ${displayV}`}>Sign up</a>
        </div>
        }
        {/* <div>
            <a href='/login' className={`nav ${displayV}`}>Log In</a>
            <a href='/register' className={`header-btn ${displayV}`}>Sign up</a>
        </div> */}
     </div>
    </div>
  )
}

export default Header