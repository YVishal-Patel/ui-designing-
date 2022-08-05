import React from 'react'
import Sidebar from './Sidebar'
import NewChart from './Chart'
import Customer from './Customer'
import Header from './Header'
import Invoice from './Invoice'
import Overview from './Overview'
import './main.css'

function Assemble() {
  return (
      <>
      <div className="container-fluid">
          <div className="Assemble-data d-flex">
          <div className="sidebar">
              <Sidebar />
          </div>
          <div className='header-Assemble flex-end'>
          <div className="header-Assemble">
              <Header />
          </div>
          <div className="row mt-2">
              <div className="col-7">
              <div className="overflow-Assemble">
              <Overview />
          </div>
              </div>
              <div className="col-4 assemble-outstanding-invoice">
              <div className="invoice-assemble">
              <Invoice />
          </div>
              </div>
          </div>
          
          <div className="row mt-1">
                <div className="col-4 assemble-recent-customer ">
                <div className="recent-customer">
                   <Customer />
               </div>
                </div>
                <div className="col-7">
                <div className="chart-assemble">
                   <NewChart />
               </div>
                </div>
          </div>
          </div>
          </div>
      </div>
      </>
  )
}

export default Assemble