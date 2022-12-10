import React, {useState}from 'react'
import {BsDownload, BsHeart, BsHeartFill} from 'react-icons/bs'

function LibraryCard() {
    const [checked, setChecked] = useState(false);
  const check = () => {
    if (checked === false){
      setChecked(true)
    } else{
      setChecked(false)
    }
    console.log(checked)
  }
  return (
    <div className='card'>
          <h3>AuthName</h3>
          <p>brief description about what auth does</p>
          <div className='el'>
            <span><BsDownload /></span>
            <p>200</p>
          { checked ? <span onClick={() => check()}><BsHeartFill /></span>:
          <span onClick={() => check()}><BsHeart /></span>}
          <p>200</p>
          <button>View</button>
          </div>
        </div>
  )
}

export default LibraryCard