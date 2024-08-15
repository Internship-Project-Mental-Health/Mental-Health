import React from 'react'
import Header from '../Components/Common/Header/Header'
import ServiceTop from '../Components/OurServices/ServiceTop'
import ServiceCards from '../Components/OurServices/ServiceCards'
import ServiceDown from '../Components/OurServices/ServiceDown'
import FooterNew from '../Components/Common/Footer/FooterNew'
function OurServices() {
  return (
    <>
    <Header />
    <h1>Services</h1>
    <ServiceTop/>
    <ServiceCards/>
    <ServiceDown/>
    <FooterNew/>
    </>
  )
}

export default OurServices
