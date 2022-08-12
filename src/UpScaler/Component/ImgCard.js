import React from 'react'
import img1 from 'UpScaler/scalerAsset/big.jpg'
import '../Component/VidComponent/index.css'

function ImgCard() {
  return (
      <>
      <div className="img-card-data-cont-data-im">
      <div className="container img-card-data-cont-data">
        <img src={img1} alt="not found" className='img-card-data-cont' />
      </div>
      </div>
      </>
  )
}

export default ImgCard