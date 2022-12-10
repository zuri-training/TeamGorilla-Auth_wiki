import React from 'react'

import './Library.css'
import logo from '../../assets/images/main 4.png'
import LibraryCard from './LibraryCard'

function Library() {
  
  return (
    <div className=''>
      <div className='doc'>
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
      <div className='doc-search'>
        <div class="library-search-wrapper">
          <input type="text" name="search" placeholder="Search for codes"  />
          <span class="library-search-span">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
              </path>
            </svg>
          </span>
        </div>
      </div>
      <div className='container'>
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
        
      </div>
      </div>
    </div>
  )
}

export default Library