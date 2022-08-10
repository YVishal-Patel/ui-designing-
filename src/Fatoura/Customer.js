import React from 'react'
import {header,headerData} from '../Data'
import './main.css'

function Customer() {
  return (
    // <div className="container-fluid">
        <div className="customer-main ">
          <div className="customer-heading">
            <span className='recent-heading'> Recent Customer</span>
          </div>
          <div className="d-flex justify-content-between mx-4">
           {header.map((item)=>{return <div className='customer-heading-items' key={item.id}>{item.name}</div>
           })}
           </div>
           
           {headerData.map((itemData)=>{ 
             return  <div key={itemData.id}>
               <div className="d-flex justify-content-between cus-data">
               <span className='customer-name'>{itemData.Customer}</span>
               <span className='customer-number' >{itemData.Number}</span>
               <span className='customer-date'>{itemData.Date}</span>
               <span className='customer-total'>{itemData.Total}</span>
               </div>
             </div>
            })}
          
        </div>
    
  )
}

export default Customer