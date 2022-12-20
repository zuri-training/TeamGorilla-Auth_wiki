import React, {useState, useEffect}from 'react'
import {BsDownload, BsHeart, BsHeartFill} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import UserService from '../../assets/api/user.service';

function LibraryCard() {
  const Navigate = useNavigate()
  const  [likes , setLikes] = useState(10)
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('checked')));
  if(!checked){
    localStorage.setItem('checked', JSON.stringify({bool: false}))
  }
  const check = () => {
    if (checked === false){
      setChecked(true)
      localStorage.setItem('checked', JSON.stringify({bool: true}))
      let like = likes + 1
      setLikes(like)
    } else{
      setChecked(false)
      localStorage.setItem('checked', JSON.stringify({bool: false}))
      let like  = likes - 1
      setLikes(like)
    }
  }
  const [length, setLength] = useState(0)
  useEffect(() => {
    UserService.getDownloadNumber().then((res) => {
      setLength(res)
      console.log(res)
    })
  }, []);
  return (
    <div className='card'>
          <h3>Jwt Web token Authentication</h3>
          <p>JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).</p>
          <div className='el'>
            <span><BsDownload /></span>
            <p>{length}</p>
          { checked ? <span onClick={() => check()}><BsHeartFill /></span>:
          <span onClick={() => check()}><BsHeart /></span>}
          <p>{likes}</p>
          <button onClick={() => {Navigate('/library/auth')}}>View</button>
          </div>
        </div>
  )
}

export default LibraryCard