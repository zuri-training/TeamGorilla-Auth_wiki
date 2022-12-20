import React, {useState}from 'react'
import {BsDownload, BsHeart, BsHeartFill} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

function LibraryCard() {
  const Navigate = useNavigate()
    const [checked, setChecked] = useState(false);
  const check = () => {
    if (checked === false){
      setChecked(true)
    } else{
      setChecked(false)   
    }
  }
  return (
    <div className='card'>
          <h3>Jwt Web token Authentication</h3>
          <p>JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).</p>
          <div className='el'>
            <span><BsDownload /></span>
            <p>400</p>
          { checked ? <span onClick={() => check()}><BsHeartFill /></span>:
          <span onClick={() => check()}><BsHeart /></span>}
          <p>200</p>
          <button onClick={() => {Navigate('/library/auth')}}>View</button>
          </div>
        </div>
  )
}

export default LibraryCard