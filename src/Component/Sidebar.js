import React from 'react'
import logo from '../Assets/images/logo.png'
import './main.css'

function Sidebar() {
  return (
      <>
      <div className="container-fluid">
          <div className="sidebar-main">
              <div className="sidebar mx-3">
                  <div className="logo">
                      <img src={logo} width="100px" height="60px" alt="not found" />
                  </div>
                  <div className="mt-3 d-flex justify-content-center sidebar-btn">
                      <button className='side-btn'> <span className='plus-icon'> <i class="fa-solid fa-plus "> </i> </span> Create New</button>
                  </div>
                  <div className="mt-5 mx-3 my-2">
                      <div className="d-flex">
                      <span className='icon-sidebar-main'><i class="fa-solid fa-bars-progress"></i></span>
                      <span className='text-sidebar-main'>Overview</span>
                      </div>

                      <div className="d-flex my-2">
                      <span className='icon-sidebar-main'><i class="fa-solid fa-file-contract"></i></span>
                      <span className='text-sidebar-main'>My Documents</span>
                      </div>

                      <div className="d-flex my-2">
                      <span className='icon-sidebar-main'><i class="fa-solid fa-chart-column"></i></span>
                      <span className='text-sidebar-main'>My Reports</span>
                      </div>

                  </div>
                  <div className="mt-3 d-flex log-out  justify-content-center sidebar-btn">
                      <button className='side-btn '>Log Out </button>
                  </div>
              </div>

          </div>
      </div>
      </>   
  )
}

export default Sidebar