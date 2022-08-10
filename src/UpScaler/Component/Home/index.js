import React from 'react'
import './index.css'
import img1 from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/sca2.jpg'
import img2 from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/sca1.jpg'
import img3 from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/sca3.jpg'
import img4 from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/sca4.jpg'
import img5 from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/sca5.jpg'
import slack from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/slack.jpg'
import stripe from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/stripe.png'
import airbnb from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/airbnb.jpg'
import amazon from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/amazon.png'
import google from '/home/vishal/Desktop/designing_page/src/UpScaler/scalerAsset/google.png'

function Home() {
  return (
      <>
      <div className="container">
          <div className="up-scale-home text-center mt-5">
              <span className='up-small-text'>Largest learning platform in the world.</span>
              <br />
              <span className='up-big-text mt-5'>1k+ Online Courses all you need is a will to learn</span>
          </div>
          <div className="up-home-btn d-flex justify-content-center mt-3">
              <button className='up-home-btns'>Find Course</button>
          </div>

       <div className="img-container-cont  d-flex justify-content-between">
           <img className='img-header-cont' src={img1} alt="not found"  />
           <img className='img-header-cont' src={img2} alt="not found" />
           <img className='img-header-cont' src={img3} alt="not found" />
           <img className='img-header-cont' src={img4} alt="not found" />
           <img className='img-header-cont' src={img5} alt="not found" />
       
           <div className="img-cont-data-des-main">
           <span className='img-cont-data-dev d-flex '>Development <svg className='svg-home-un-icon' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>

           <span className='img-cont-data-des d-flex '>Design <svg className='svg-home-un-icon' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>

           <span className='img-cont-data-per d-flex '>Personal Development <svg className='svg-home-un-icon' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>

           <span className='img-cont-data-bus d-flex '>Business <svg className='svg-home-un-icon' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>

           <span className='img-cont-data-mark d-flex '>Marketing <svg className='svg-home-un-icon' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>
           </div>
           
           </div>

           <div className="home-client-cont text-center">
             <span className="client-cont text-center"> A total of 100+ clients have trusted our services.</span>
             <div className="client-icon-cont d-flex justify-content-center">
                 <img className='client-icon-cont-img' src={slack} alt="not found" />
                 <img className='client-icon-cont-img' src={stripe} alt="not found" />
                 <img className='client-icon-cont-img' src={airbnb} alt="not found" />
                 <img className='client-icon-cont-img'  src={amazon} alt="not found" />
                 <img className='client-icon-cont-img' src={google} alt="not found" />
             </div>
           </div>
      </div>
      </>
  )
}

export default Home