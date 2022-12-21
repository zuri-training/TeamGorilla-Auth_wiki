import React from 'react'
// import Thumbs from './Thumbs'

function Comment({ author, body, time }) {
  return (
    <div className='comments-box'>
        <h3>{author} . {time}</h3>
        <p>{body}</p>
        {/* <div className='auth-like'>
        <span><Thumbs /> </span>
        <p>reply</p> 
    </div> */}
    </div>
  )
}

export default Comment