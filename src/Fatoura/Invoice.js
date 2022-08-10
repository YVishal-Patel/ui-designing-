import React from 'react'
import './main.css'

function Invoice() {
  return (
    <>
    <div className="invoice">
      <div className="heading-onvo">
       <p className='heading-invoice'> Outstanding Invoices</p>
      </div>
      <div className="invoice-data">
        <div className="d-flex justify-content-between invo-data">
          <p className='invoice-data'>0-30 Days</p>
          <p className='invoice-data'>$1000</p>
        </div>
        
        <div className="d-flex justify-content-between invo-data">
          <p className='invoice-data'>0-60 Days</p>
          <p className='invoice-data'>$8000</p>
        </div>

        <div className="d-flex justify-content-between invo-data1">
          <p className='invoice-data'>0-90 Days</p>
          <p className='invoice-data'>$1200</p>
        </div>
       
        </div>
        <div className="d-flex justify-content-between total-invoice">
          <p className='invoice-data'>Total</p>
          <p className='invoice-data'>$10045</p>
        </div>
        

        
     
    </div>
    </>
  )
}

export default Invoice