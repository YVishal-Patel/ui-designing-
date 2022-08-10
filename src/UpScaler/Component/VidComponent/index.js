import React from 'react'
import './index.css'
import img1 from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/first.jpg'
import img2 from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/big6.jpg'

function VidComponent() {
  return (
      <>
      <div className="container">
          <div className="vidComponent-main">
              <div className="row vidComponent-main">
               <div className="col-6 vid-img-con">
                   <img src={img1} alt="not found" className='vid-component-img-main' />
               </div>
               <div className="col-6 vid-component-col-data ">
                   <div className="vid-component-heading">
                       <span className="vid-component-heading"> Anytime, Anywhere for discover yourself</span>
                   </div>
                   <div className="vid-component-dis">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, in minus repudiandae earum possimus rem repellendus labore beatae, ullam reprehenderit officia nostrum aspernatur error dolorem recusandae sed maiores molestias optio.</div>

                   <div className="vid-component-student ">
                    <p className='d-flex'> <span className='vid-courses '>800+ </span> <span className='vid-course d-flex justify-content-center flex-column mx-5'>Courses</span>  </p>
                   <p className='d-flex'> <span className='vid-students d-flex'> 100k+ </span> <span className='vid-course d-flex justify-content-center flex-column mx-5'> Global Students</span> </p>
                   </div>
               </div>
              </div>

              {/* ------------------- img component -------------------------------------------- */}

              <div className="img-vid-datas">
                  <img src={img2} alt="not found" className='img-second-img-data' />

                  <div className="img-vid-data-main mx-5">
                      <span className="img-vid-data-main-heading">Get  comfortable  using procreate</span>
                      <br />
                      <span className="img-vid-data-main-data">Create fun, vibrant animal illusion with illustrator Rebecca  Mills.</span>
                      <br />
                      <button className="img-vid-data-main-data-btn">Watch Now</button>
                  </div>
              </div>
          </div>
      </div>
      </>
  )
}

export default VidComponent