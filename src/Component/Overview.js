import React from 'react'

function Overview() {
  return (
    <>
    <div className="container-fluid overview-main">
      <div className="overview-data">
       <div className="overview-heading d-flex justify-content-between mx-4 py-2 my-2">
        <p className='overview-heading-data'>Start Overview</p>
        <p className="over-view-time" >Last 30 Days</p>
       </div>

       <div className="overview-data-boxes d-flex justify-content-between mx-2">
        <div className="overview-box-datas mx-2">
          <div className="svg-div">
        <svg className="overview-box-datas-icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h5v-2H4v-6h18V6C22,4.89,21.11,4,20,4z M20,8H4V6h16V8z M14.93,19.17l-2.83-2.83l-1.41,1.41L14.93,22L22,14.93l-1.41-1.41L14.93,19.17z"/></g></svg>
        </div>
        <p className='overview-box-datas-value '>64</p>
        <p className='overview-box-datas-type'>Paid</p>
        </div>

        <div className="overview-box-datas">
        <div className="svg-div">
        <i class="fa-regular fa-credit-card overview-box-datas-icon"></i>
        </div>
        <p className='overview-box-datas-value '>64</p>
        <p className='overview-box-datas-type'>Unpaid</p>
        </div>

        <div className="overview-box-datas">
        <div className="svg-div">
        <svg className="overview-box-datas-icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M11,8v5l4.25,2.52l0.77-1.28l-3.52-2.09V8H11z M21,10V3l-2.64,2.64C16.74,4.01,14.49,3,12,3c-4.97,0-9,4.03-9,9 s4.03,9,9,9s9-4.03,9-9h-2c0,3.86-3.14,7-7,7s-7-3.14-7-7s3.14-7,7-7c1.93,0,3.68,0.79,4.95,2.05L14,10H21z"/></g></g></svg>
        </div>
        <p className='overview-box-datas-value '>64</p>
        <p className='overview-box-datas-type'>Overdue</p>
        </div>

        <div className="overview-box-datas">
        <div className="svg-div">
        <svg className="overview-box-datas-icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M22,3l-1.67,1.67L18.67,3L17,4.67L15.33,3l-1.66,1.67L12,3l-1.67,1.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3v16 c0,1.1,0.9,2,2,2l16,0c1.1,0,2-0.9,2-2V3z M11,19H4v-6h7V19z M20,19h-7v-2h7V19z M20,15h-7v-2h7V15z M20,11H4V8h16V11z"/></g></svg>
        </div>
        <p className='overview-box-datas-value '>64</p>
        <p className='overview-box-datas-type'>Draft</p>
        </div>
       </div>
       </div>
    </div>
    </>
  )
}

export default Overview