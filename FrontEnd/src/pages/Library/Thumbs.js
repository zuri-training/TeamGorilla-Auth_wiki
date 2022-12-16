import React, {useState}from 'react'
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill, BsHandThumbsDown, BsHandThumbsUp } from 'react-icons/bs'

function Thumbs() {
    const [like, setLike] = useState(false)
    const[hate, setHate] = useState(false)
    const toggleLike = (val) => {
        if(val === 'like' && like === false){
            setLike(true)
            setHate(false)
        } else if(val === 'like' && like === true ){
            setLike(false)
        } else if(val === 'hate' && hate === false){
            setHate(true)
            setLike(false)
        }else{
            setHate(false)
        }
    }
  return (
    <div>
    <span onClick={() => toggleLike('like')}>{like ? <BsFillHandThumbsUpFill /> : <BsHandThumbsUp />  }</span>
    <span onClick={() => toggleLike('hate')}>{hate ? <BsFillHandThumbsDownFill /> : <BsHandThumbsDown />  }</span>

    </div>
  )
}

export default Thumbs