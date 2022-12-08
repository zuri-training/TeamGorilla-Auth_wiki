import React from 'react'
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import './Library.css'

function Library() {
  return (
    <div className=''>
      <Header />
      <div className='doc'>
      <h1>Library</h1>
      <div className='doc-search'>
        <div class="library-search-wrapper">
          <input type="text" name="search" placeholder="Search for codes" value="" />
          <span class="library-search-span">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
              </path>
            </svg>
          </span>
        </div>
      </div>
      <div className='container'>
        <div className='card'>
          <h3>AuthName</h3>
          <p>brief description about what auth does</p>
          <p>Icon</p><p>2000</p>
          <p>Icon</p><p>2000</p>
          <button>Download</button>
        </div>
      </div>
      </div>
      <Footer /> 
    </div>
  )
}

export default Library