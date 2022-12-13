import React, {useState, useEffect} from 'react';
import '../../assets/styles/Header.css'
import logo from '../../assets/images/Authwiki.png'
import AuthService from '../../assets/api/auth.service'

function Header() {


    const [user, setUser] = useState({})
    useEffect(() => {
      setUser(AuthService.getCurrentUser())
    }, [user])

    const handleSubmit = () => {
      AuthService.signOut()
      setUser({})
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
          <div>
            <a href='/register' className={`header-btn ${displayV}`} onClick={(e) => handleSubmit(e)}>Sign out</a>
          </div> 
          :
          <div>
            <a href='/login' className={`nav ${displayV}`}>Log In</a>
            <a href='/register' className={`header-btn ${displayV}`}>Sign up</a>
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