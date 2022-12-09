import React, {useState} from 'react';
import './Header.css'
import logo from '../../assets/images/Authwiki.png'

function Header() {
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
        <div className="logo">
        <img src={logo} alt='Authwiki-logo'/>
        </div>
        <div className="hamburger-lines" onClick={() => { toggle()}}>
          <span className="line line1">-</span>
          <span className="line line2">-</span>
          <span className="line line3">-</span>
        </div>
        
        <div>
                <a className={`nav ${displayV}`}>Home</a>
                <a className={`nav active ${displayV}`}>Library</a>
                <a className={`nav ${displayV}`}>Our Team</a>
                <a href='/faq' className={`nav ${displayV}`}>FAQ</a>
        </div>
        <div>
            <a className={`nav ${displayV}`}>Log In</a>
            <a className={`header-btn ${displayV}`}>Sign up</a>
        </div>
    </div>
  )
}

export default Header