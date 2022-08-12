import React from 'react'
import '../Component/VidComponent/index.css'
import img1 from 'UpScaler/scalerAsset/sca7.jpg'
import img2 from 'UpScaler/scalerAsset/sca2.jpg'
import img3 from 'UpScaler/scalerAsset/sca8.jpg'
import img4 from 'UpScaler/scalerAsset/sca4.jpg'
import img5 from 'UpScaler/scalerAsset/sca9.jpg'
import img6 from 'UpScaler/scalerAsset/sca6.jpg'
import { HeaderUpScaler1 } from '../../Data'


function SingleCart() {
  return (
      <>
    <div className="container">
    {HeaderUpScaler1.map((item)=>{
      return  <div className="cart-car-data" key={item.id}>
        <span className='cart-main-data-name'>{item.name}</span>
    <div className="cart-main d-flex justify-content-between">
      <img className="cart-main-1" src={img1} alt="not found" />
      <img className="cart-main-1" src={img2} alt="not found" />
      <img className="cart-main-1" src={img3} alt="not found" />
      <img className="cart-main-1" src={img4} alt="not found" />
      <img className="cart-main-1" src={img5} alt="not found" />
      <img className="cart-main-1" src={img6} alt="not found" />
    </div>
    </div>
    })}
  </div>
  </>
  )
}

export default SingleCart