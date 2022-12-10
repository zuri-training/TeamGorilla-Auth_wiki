import React from 'react'
import logo from '../../assets/images/main 4.png'

function LibraryHeader() {
  return (
    <div>
        <div className='doc-header'>
        <div className='left'>
          <div className='doc-desc'>
          <h3>Authwiki Library</h3>
          <p>A Comprehensive page on Auth-wiki authentication codes, documentation and related information.</p>
          </div>
        </div>
        <div className='right'>
          <img src={logo} alt='code-editor' className='img1' />
          <img src={logo} alt='code-editor' className='img2' />
          <img src={logo} alt='code-editor' className='img3' />
        </div>
      </div>
    </div>
  )
}

export default LibraryHeader