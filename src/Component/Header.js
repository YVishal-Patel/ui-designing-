import React from 'react'
import img1 from '../Assets/images/img2.jpg'

function Header() {
  return (
    <>
 <div className="container-fluid">
   <div className="header-main d-flex justify-content-between">
   <div className="header-data">
      <span className='header-logo-main'> Overview </span>
      </div>
      <div className="header-end d-flex justify-content-center">
        <div className="search-header d-flex">
        <input type="text" placeholder='search' className='search-input-field' />
        <svg xmlns="http://www.w3.org/2000/svg" className="search-header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
        </div>
        <svg className='bell-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#a9a9a9"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z"/></svg>
         <div className="vl"></div>
        <div className="final-header-end d-flex">
          <p className="user-header-name">Krish Agarwal</p>
          <img src={img1} alt="not found" className="user-header-img" />
        </div>
      </div>
      </div>
   </div>   
    </>
  )
}

export default Header