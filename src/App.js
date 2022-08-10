import React from 'react'
import Sidebar from './Fatoura/Sidebar'
import Customer from './Fatoura/Customer'
import Invoice from './Fatoura/Invoice'
// import Header from './Fatoura/Header'
import Overview from './Fatoura/Overview'
// import NewChart  from './Component/Chart'
import Assemble from './Fatoura/Assemble'
import Header from './UpScaler/Component/Header'
import Home from './UpScaler/Component/Home'
import Footer from './UpScaler/Component/Footer'
import Faq from './UpScaler/Component/FAQ'
import VidComponent from './UpScaler/Component/VidComponent'
import Cart from './UpScaler/Component/Cart'
import ImgCard from './UpScaler/Component/ImgCard'
import SingleCart from './UpScaler/Component/SingleCart'
function App() {
  // console.log(HeaderUpScaler)
  return (
    <>
      <Header />
    <Home />
    <SingleCart />
    <ImgCard /> 
    <Cart />
    <VidComponent /> 
    <Faq />
    <Footer /> 
    
    
    
    </>
  )
}

export default App